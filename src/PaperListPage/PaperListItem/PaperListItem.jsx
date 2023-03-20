import {
  Heading,
  HStack,
  VStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { useFirebaseAuthentication } from "../../Auth/auth";
import Highlight from "../../Helpers/HighLight";
import "./PaperListItem.css";
import DeletePaperButton from "./DeletePaperButton";
import EditPaperButton from "./EditPaperButton";
import TopResults from "./TopResults";

const PaperListItem = ({ paper, searchValue, isLargerThan700 }) => {
  const currentUser = useFirebaseAuthentication();
  let greenColor = useColorModeValue(
    "var(--chakra-colors-green-600)",
    "var(--chakra-colors-green-100)"
  );

  const params = useParams();
  const species = params?.species;

  // determine if the user who added the paper to database is logged in
  let creatorLoggedIn = false;
  if (
    (currentUser && currentUser.email === "tang.wustl.edu@gmail.com") ||
    (currentUser && currentUser.email === paper.sourceEmail)
  ) {
    creatorLoggedIn = true;
  }

  // get the publish year from the paper's date
  const year = new Date(paper.date).getFullYear();

  return (
    <>
      <VStack
        maxW="860px"
        mb="30px"
        p="10px"
        align="flex-start"
        border={creatorLoggedIn ? `1px solid ${greenColor}` : ""}
        borderRadius="5px"
      >
        {/* show edit and delete buttons to user who added the paper */}
        {creatorLoggedIn && (
          <HStack justify="flex-start" w="100%">
            <EditPaperButton paper={paper} />
            <Text>|</Text>
            <DeletePaperButton paper={paper} />
          </HStack>
        )}

        <HStack align="flex-start" w="100%">
          {/* Top Results */}
          {isLargerThan700 && <TopResults paper={paper} />}

          {/* Paper Details */}
          <VStack justify="space-between" w="100%">
            <VStack spacing="0px" w="100%" align="flex-start">
              <Text
                noOfLines="1"
                fontSize={isLargerThan700 ? "14px" : "12px"}
                opacity="0.8"
              >
                {year} | {paper.journal}
              </Text>
              <Heading
                // h="23px"
                color={greenColor}
                fontSize={isLargerThan700 ? "20px" : "16px"}
                noOfLines={isLargerThan700 ? "1" : "2"}
                _hover={{ textDecoration: "underline" }}
              >
                <Link to={"/paper/" + species.toLowerCase() + "/" + paper.slug}>
                  <Highlight
                    search={searchValue}
                    noOfLines={isLargerThan700 ? "1" : "2"}
                  >
                    {paper.title}
                  </Highlight>
                </Link>
              </Heading>
              <Text noOfLines={isLargerThan700 ? "2" : "3"} fontSize="14px">
                <Highlight search={searchValue}>{paper.abstract}</Highlight>
              </Text>
            </VStack>

            <Text noOfLines="1" fontSize="14px" w="100%" opacity="0.8">
              <Highlight search={searchValue}>{paper.authors}</Highlight>
            </Text>
          </VStack>
        </HStack>
      </VStack>
    </>
  );
};

export default PaperListItem;
