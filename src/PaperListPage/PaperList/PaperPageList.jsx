import { HStack, Spacer, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const PaperPageList = ({ displayPapers, page, setPage, loading }) => {
  const params = useParams();
  const species = params?.species;

  // calculate the number to pages that could be displayed
  let numPages = Math.ceil(displayPapers.length / 10);

  // make an array of all the possible pages that could be displayed
  let possiblePages = [...Array(numPages).keys()];

  return (
    <>
      {!loading && (
        <HStack mx="auto" w="100%" overflow="scroll">
          <Tabs
            m="5px"
            mb="30px"
            variant="soft-rounded"
            colorScheme="green"
            index={page}
            onChange={(index) => {
              setPage(index);
              localStorage.setItem(`${species}PageNumber`, index);
            }}
          >
            <TabList textAlign="center" padding="auto">
              {possiblePages.map((index) => {
                return <Tab key={index}>{index + 1}</Tab>;
              })}
            </TabList>
          </Tabs>
          <Spacer w="5px" />
        </HStack>
      )}
    </>
  );
};

export default PaperPageList;
