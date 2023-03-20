import {
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { currentYear } from "../Helpers/dateHelpers";

const ControlBox = ({
  paperArray,
  searchValue,
  setSearchValue,
  sortMethod,
  setSortMethod,
  yearFilter,
  setYearFilter,
  setPage,
}) => {
  const [isLargerThan470] = useMediaQuery("(min-width: 470px)");
  const params = useParams();
  const species = params?.species;

  // calculate the oldest year of a paper published in the database
  let oldestYear = 2001;
  if (paperArray.length > 0) {
    const years = paperArray.map((paper) => {
      try {
        return parseInt(paper.date.split("-")[0]);
      } catch {
        return 2022;
      }
    });
    oldestYear = Math.min(...years);
  }

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    setPage(0);
    localStorage.setItem(`${species}PageNumber`, index);
  };

  return (
    <VStack
      align="flex-start"
      p="15px"
      w="100%"
      maxW="430px"
      minW={isLargerThan470 ? "435px" : "calc(100vw - 40px)"}
      spacing="25px"
      borderWidth="1px"
      borderRadius="8px"
    >
      <Input
        size="md"
        width="100%"
        placeholder="search database"
        value={searchValue}
        onChange={handleChange}
      />
      {/* bottom row */}
      <Stack
        spacing={isLargerThan470 ? "30px" : "14px"}
        direction={isLargerThan470 ? "row" : "column"}
      >
        {/* bottom row - year published */}
        <HStack spacing="4px" w="155px">
          <Text>year published:</Text>
          <Menu>
            <MenuButton>
              <Text textDecoration="underline" cursor="pointer">
                {yearFilter}
              </Text>
            </MenuButton>

            <Portal>
              <MenuList maxH="400px" overflow="scroll">
                <MenuItem
                  onClick={() => {
                    setYearFilter("All");
                  }}
                >
                  All
                </MenuItem>
                {Array(currentYear() - oldestYear + 1)
                  .fill(0)
                  .map((_, index) => {
                    const year = currentYear() - index;
                    return (
                      <MenuItem
                        key={year}
                        onClick={() => {
                          setYearFilter(year);
                        }}
                      >
                        {year}
                      </MenuItem>
                    );
                  })}
              </MenuList>
            </Portal>
          </Menu>
        </HStack>

        {/* bottom row sorting method */}
        <HStack spacing="4px">
          <Text>sort by:</Text>
          <Menu>
            <MenuButton>
              <Text textDecoration="underline" cursor="pointer">
                {sortMethod}
              </Text>
            </MenuButton>

            <Portal>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    setSortMethod("Publish Date (newest)");
                  }}
                >
                  Publish Date (newest)
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setSortMethod("Publish Date (oldest)");
                  }}
                >
                  Publish Date (oldest)
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setSortMethod("Upload Date (newest)");
                  }}
                >
                  Upload Date (newest)
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setSortMethod("Upload Date (oldest)");
                  }}
                >
                  Upload Date (oldest)
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setSortMethod("Alphabetical (A-Z)");
                  }}
                >
                  Alphabetical (A-Z)
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setSortMethod("Alphabetical (Z-A)");
                  }}
                >
                  Alphabetical (Z-A)
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </HStack>
      </Stack>
    </VStack>
  );
};

export default ControlBox;
