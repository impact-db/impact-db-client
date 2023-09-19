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
import {
  getPaperArray,
  speciesToCollectionName,
} from "../Helpers/databaseHelpers.js";
import { useParams } from "react-router-dom";
import SummaryText from "./PaperList/SummaryText";
import PaperPageList from "./PaperList/PaperPageList";
import { useQuery } from "@tanstack/react-query";
import LoadingDots from "../loadingDots/LoadingDots";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { HashLink } from "react-router-hash-link";

const PaperListPage = () => {
  console.log("on paper list page");
  // get collectionName from url parameters
  const params = useParams();
  const species = params?.species;

  console.log(species);
  const collectionName = speciesToCollectionName(species);
  console.log(collectionName);

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

  // check if there is a page number stored, if not then use 0
  // const pageNumber = localStorage.getItem(`${species}PageNumber`);

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

  // update paper list on paper array change, search, year filter, or sort
  useEffect(() => {
    let displayList;

    // handle year filter
    if (yearFilter === "All") {
      displayList = paperArray;
    } else {
      displayList = paperArray.filter((paper) => {
        const paperYear = parseFloat(
          dateConverterNums(paper.date).split("/")[2]
        );
        return paperYear === yearFilter;
      });
    }

    // handle search filter
    displayList = displayList.filter((paper) => {
      return (
        paper.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        paper.abstract.toLowerCase().includes(searchValue.toLowerCase()) ||
        paper.authors.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    // handle sorting
    switch (sortMethod) {
      case "Publish Date (newest)":
        displayList.sort(function (a, b) {
          return new Date(b.date) > new Date(a.date) ? 1 : -1;
        });
        break;
      case "Publish Date (oldest)":
        displayList.sort(function (a, b) {
          return new Date(b.date) < new Date(a.date) ? 1 : -1;
        });
        break;
      case "Upload Date (newest)":
        displayList.sort(function (a, b) {
          return b.timeAdded > a.timeAdded ? 1 : -1;
        });
        break;
      case "Upload Date (oldest)":
        displayList.sort(function (a, b) {
          return b.timeAdded < a.timeAdded ? 1 : -1;
        });
        break;
      case "Alphabetical (A-Z)":
        displayList.sort(function (a, b) {
          return b.title < a.title ? 1 : -1;
        });
        break;
      case "Alphabetical (Z-A)":
        displayList.sort(function (a, b) {
          return b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1;
        });
        break;
      default:
        console.log("unrecognized sort method");
    }
    setDisplayPapers(displayList);
  }, [paperArray, yearFilter, searchValue, sortMethod]);

  // update papers on screen when displayPapers changes
  useEffect(() => {
    setOnScreenPapers(displayPapers.slice(page * 10, page * 10 + 10));
  }, [displayPapers]);

  // update papers on screen when page changes
  useEffect(() => {
    setOnScreenPapers(displayPapers.slice(page * 10, page * 10 + 10));
  }, [page]);

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
