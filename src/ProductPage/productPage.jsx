import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import StrainList from "../PaperPage/StrainList/StrainList";
import { Box, Heading, HStack, Spacer, Text, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { getProductResults } from "../Helpers/databaseHelpers";
import { useQuery } from "@tanstack/react-query";
import LoadingDots from "../loadingDots/LoadingDots";

const ProductPage = () => {
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
            <HStack>
              <Heading fontSize="20px" mt="5px">
                Product: {product}
              </Heading>
            </HStack>
            <StrainList data={productData} page="product" />
          </Box>
        </Box>
      </>
    );
  }
};

export default ProductPage;
