import {
  Box,
  HStack,
  Spacer,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import ControlBox from "./ControlBox";
import PaperList from "./PaperList/PaperList";
import { dateConverterNums } from "../Helpers/dateHelpers.js";
import AddPaperButton from "./AddPaperButton.jsx";
import { getPaperArray } from "../Helpers/databaseHelpers.js";
import { useParams } from "react-router-dom";
import SummaryText from "./PaperList/SummaryText";
import PaperPageList from "./PaperList/PaperPageList";
import { useQuery } from "@tanstack/react-query";
import LoadingDots from "../loadingDots/LoadingDots";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { HashLink } from "react-router-hash-link";

const PaperListPage = () => {
  // get collectionName from url parameters
  const params = useParams();
  const species = params?.species;

  // get collectionName from species name
  const collectionName = `${species.toLowerCase()}-papers`;

  // handle mobile styles
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
  const rowOrCol = isLargerThan700 ? "row" : "column";

  // handle search
  const [searchValue, setSearchValue] = useState("");

  // handle filters
  const [sortMethod, setSortMethod] = useState("Upload Date (oldest)");
  const [yearFilter, setYearFilter] = useState("All");

  // create state variables
  const [displayPapers, setDisplayPapers] = useState([]);
  const [onScreenPapers, setOnScreenPapers] = useState(displayPapers.slice(10));

  const [page, setPage] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem(`${species}PageNumber`);
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });

  // get either cached or new paperArray data
  const { isLoading, data } = useQuery(
    ["paperArray", collectionName],
    ({ queryKey }) => getPaperArray(queryKey[1])
  );

  let paperArray = [];
  if (data) {
    paperArray = data;
  }

  // Process and filter paperArray data
  useEffect(() => {
    if (!data) return;

    let filteredPapers = data;

    // Year filter
    if (yearFilter !== "All") {
      filteredPapers = filteredPapers.filter((paper) => {
        const paperYear = parseFloat(
          dateConverterNums(paper.date).split("/")[2]
        );
        return paperYear === yearFilter;
      });
    }

    // Search filter
    filteredPapers = filteredPapers.filter(
      (paper) =>
        paper.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        paper.abstract.toLowerCase().includes(searchValue.toLowerCase()) ||
        paper.authors.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Sorting
    switch (sortMethod) {
      case "Publish Date (newest)":
        filteredPapers.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "Publish Date (oldest)":
        filteredPapers.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "Upload Date (newest)":
        filteredPapers.sort((a, b) => b.timeAdded - a.timeAdded);
        break;
      case "Upload Date (oldest)":
        filteredPapers.sort((a, b) => a.timeAdded - b.timeAdded);
        break;
      case "Alphabetical (A-Z)":
        filteredPapers.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Alphabetical (Z-A)":
        filteredPapers.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        console.log("unrecognized sort method");
    }

    setDisplayPapers(filteredPapers);
  }, [data, yearFilter, searchValue, sortMethod]);

  // Update on-screen papers when displayPapers or page changes
  useEffect(() => {
    const start = page * 10;
    const end = start + 10;
    setOnScreenPapers(displayPapers.slice(start, end));
  }, [displayPapers, page]);

  return (
    <>
      <NavBar />
      {/* outer container */}
      <Box maxW="1500px" mt="25px" mx="auto">
        <Spacer h="10px" />
        {/* inner container */}
        <VStack maxW="900px" px="20px" align="flex-start" spacing="0px">
          <HStack justify="space-between" mb="20px">
            <HashLink to="/#database">
              <HStack spacing="4px">
                <ArrowBackIcon opacity="0.8" />
                <Text fontSize="14px" opacity="0.8">
                  Species list
                </Text>
              </HStack>
            </HashLink>
          </HStack>
          {/* top row */}
          <Stack
            w="100%"
            direction={rowOrCol}
            justify="space-between"
            align="flex-start"
            spacing="14px"
          >
            {/* this stack contains the box and the summary text */}
            <VStack align="flex-start" spacing="0px">
              <ControlBox
                paperArray={paperArray}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                sortMethod={sortMethod}
                setSortMethod={setSortMethod}
                yearFilter={yearFilter}
                setYearFilter={setYearFilter}
                setPage={setPage}
              />
              <SummaryText
                onScreenPapers={onScreenPapers}
                displayPapers={displayPapers}
                isLoading={isLoading}
              />
            </VStack>
            <AddPaperButton
              isLoading={isLoading}
              isLargerThan700={isLargerThan700}
            />
          </Stack>

          <Spacer minH="30px" />

          {isLoading ? (
            <Box mt="30px" w={isLargerThan700 ? "100%" : "435px"}>
              <LoadingDots />
            </Box>
          ) : (
            <PaperList
              paperArray={paperArray}
              displayPapers={displayPapers}
              searchValue={searchValue}
              onScreenPapers={onScreenPapers}
              isLargerThan700={isLargerThan700}
            />
          )}

          <PaperPageList
            displayPapers={displayPapers}
            page={page}
            setPage={setPage}
            loading={isLoading}
          />
        </VStack>
      </Box>
    </>
  );
};

export default PaperListPage;
