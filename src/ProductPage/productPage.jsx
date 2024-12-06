import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import StrainList from "../PaperPage/StrainList/StrainList";
import {
  Box,
  Heading,
  HStack,
  Spacer,
  Text,
  Button,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { getProductResults } from "../Helpers/databaseHelpers";
import { useQuery } from "@tanstack/react-query";
import LoadingDots from "../loadingDots/LoadingDots";

const ProductPage = () => {
  let linkColor = useColorModeValue("green.600", "green.100");
  let params = useParams();
  let product = params?.id;

  // get the product results from the database
  const { isLoading, data } = useQuery(
    ["productResults", product],
    ({ queryKey }) => getProductResults(queryKey[1])
  );

  // use useNavigate hook for button of going back
  let navigate = useNavigate(); // Use useNavigate hook
  const handleBackButtonClick = () => {
    navigate(-1);
  };

  // format the data in the way that the strain list component expects
  const productData = {
    experimentalData: data,
  };

  function DownloadCSV() {
    // Function to format data and trigger CSV download
    const experimentalData = productData.experimentalData;

    // Sort the data by the 'titer' key (convert to number for sorting)
    // const sortedData = formattedData.sort((a, b) => {
    const sortedData = experimentalData.sort((a, b) => {
      return parseFloat(b.titer) - parseFloat(a.titer);
    });

    // Convert formatted data to CSV string
    const csvContent = convertToCSV(sortedData);

    // Create a Blob and trigger download
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${product.toLowerCase()}_results.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // Function to convert an array of objects to CSV format
  const convertToCSV = (data) => {
    if (data.length === 0) return "";

    // Collect all unique headers from all objects
    const headersSet = new Set();
    data.forEach((item) => {
      Object.keys(item).forEach((key) => headersSet.add(key));
    });

    // Define the first columns to appear in the CSV
    const firstColumns = [
      "species",
      "paperSlug",
      "doi",
      "date",
      "product",
      "titer",
      "averageRate",
      "maximumRate",
      "yield",
    ];

    // Get remaining headers sorted alphabetically, excluding the first columns
    const remainingHeaders = Array.from(headersSet)
      .filter((header) => !firstColumns.includes(header))
      .sort();

    // Combine first columns with sorted remaining ones
    const headers = [...firstColumns, ...remainingHeaders];
    const csvRows = [];

    // Create the CSV header row
    csvRows.push(headers.join(","));

    // Create CSV rows for each data entry
    data.forEach((row) => {
      const values = headers.map((header) => `"${row[header] || ""}"`);
      csvRows.push(values.join(","));
    });

    // Join all rows into a single CSV string
    return csvRows.join("\n");
  };

  if (isLoading) {
    return (
      <>
        <NavBar />
        {/* outer container */}
        <Box maxW="1500px" px="20px" mt="25px" mx="auto">
          {/* inner container */}
          <Box maxW="900px">
            <Spacer h="100px" />
            <LoadingDots />
          </Box>
        </Box>
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        {/* outer container */}
        <Box maxW="1500px" mt="35px" mx="auto">
          {/* inner container */}
          <Box maxW="900px" px="20px">
            <HStack justify="space-between" mb="20px">
              <Button
                as="a"
                onClick={handleBackButtonClick}
                variant="link"
                colorScheme="black"
                style={{ cursor: "pointer" }}
              >
                <HStack spacing="4px">
                  <ArrowBackIcon opacity="0.8" />
                  <Text fontSize="14px" opacity="0.8">
                    Back to the previous page
                  </Text>
                </HStack>
              </Button>
            </HStack>

            <Heading fontSize="20px" mt="5px">
              Product: {product}{" "}
              {productData?.experimentalData?.length > 0
                ? `(${productData.experimentalData.length} fermentation results)`
                : ""}
            </Heading>
            <Text pt="20px">
              Download the{" "}
              <Link
                variant="underline"
                color={linkColor}
                textDecoration="underline"
                onClick={DownloadCSV}
              >
                {product.toLowerCase()}
              </Link>{" "}
              results as a .csv file
            </Text>
            <StrainList data={productData} page="product" />
          </Box>
        </Box>
      </>
    );
  }
};

export default ProductPage;
