import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import LoadingDots from "../loadingDots/LoadingDots";
import { dateConverterString } from "../Helpers/dateHelpers";
import { capitalize } from "../Helpers/stringHelpers";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Heading,
  HStack,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import StrainList from "../PaperPage/StrainList/StrainList";
import {
  getPaperArray,
  speciesToCollectionName,
} from "../Helpers/databaseHelpers";
import ReportIssueButton from "./ReportIssueButton";
import CommentsSection from "../PaperPage/CommentsSection/CommentsSection";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useQuery } from "@tanstack/react-query";

const PaperPage = () => {
  let headingColor = useColorModeValue("green.600", "green.100");

  // get id from url parameters
  const params = useParams();
  const slug = params?.slug;
  const species = params?.species;
  const collectionName = speciesToCollectionName(species);

  // get either cached or new paperArray data
  const { isLoading, data } = useQuery(
    ["paperArray", collectionName],
    ({ queryKey }) => getPaperArray(queryKey[1])
  );

  // set the value of the paper based on cached or fetched data
  let paper = {};
  if (data) {
    const paperArray = data;

    paper = "not found";
    paperArray.forEach((_paper) => {
      if (_paper.slug === slug) {
        paper = _paper;
      }
    });
  }

  // handle loading state
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
  }
  // handle case where paper is not found
  else if (paper === "not found") {
    return (
      <>
        <NavBar />
        {/* outer container */}
        <Box maxW="1500px" px="20px" mt="25px" mx="auto">
          <Spacer h="10px" />
          {/* inner container */}
          <Box w="900px">
            <HStack justify="space-between" mb="20px">
              <Link to={"/database/" + species}>
                <HStack spacing="4px">
                  <ArrowBackIcon opacity="0.8" />
                  <Text fontSize="14px" opacity="0.8">
                    {capitalize(species)} database
                  </Text>
                </HStack>
              </Link>
              <ReportIssueButton paper={paper} />
            </HStack>
            <Text fontSize="14px">
              Error occured: This paper was not found in the database
            </Text>
          </Box>
        </Box>
      </>
    );
  }
  // if the paper is found then display its information
  else {
    return (
      <>
        <NavBar />
        {/* outer container */}
        <Box maxW="1500px" mt="35px" mx="auto">
          {/* inner container */}
          <Box maxW="900px" px="20px">
            <HStack justify="space-between" mb="20px">
              <Link to={"/database/" + species}>
                <HStack spacing="4px">
                  <ArrowBackIcon opacity="0.8" />
                  <Text fontSize="14px" opacity="0.8">
                    {capitalize(species)} database
                  </Text>
                </HStack>
              </Link>
              <ReportIssueButton paper={paper} />
            </HStack>
            <Text fontSize="14px">
              {dateConverterString(paper.date)} | {paper.journal}
            </Text>
            <HStack>
              <Heading
                fontSize="20px"
                mt="5px"
                color={headingColor}
                _hover={{ textDecoration: "underline" }}
              >
                <a href={"https://doi.org/" + paper.doi} target="_blank">
                  {paper.title}
                </a>
              </Heading>
            </HStack>
            <Heading
              mt="20px"
              fontSize="15px"
              textAlign="justify"
              lineHeight="20px"
            >
              {paper.abstract}
            </Heading>
            <Text mt="20px" fontSize="16px">
              {paper.authors}
            </Text>
            <StrainList />
            <CommentsSection paper={paper} />
          </Box>
        </Box>
      </>
    );
  }
};

export default PaperPage;
