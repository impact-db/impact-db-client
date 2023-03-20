import {
  Box,
  GridItem,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MLToolsListItem = ({ tool }) => {
  const boxShadow = useColorModeValue(
    "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);",
    "0 1px 2px 0 rgb(60 64 67 / 80%), 0 1px 3px 1px rgb(60 64 67 / 50%);"
  );
  const hoverColor = useColorModeValue("#f5f5f5", "#11341A55");

  return (
    <Box align="center">
      <Link to={tool.slug}>
        <GridItem
          maxW="260px"
          h="180px"
          px="20px"
          py="12px"
          borderRadius="8px"
          boxShadow={boxShadow}
          _hover={{ backgroundColor: `${hoverColor}` }}
        >
          <VStack align="flex-start" h="100%">
            <Text fontSize="20px" textAlign="start" w="100%">
              {tool.name}
            </Text>
            <Text fontSize="14px" textAlign="start" opacity="0.8">
              {tool.description}
            </Text>
          </VStack>
        </GridItem>
      </Link>
    </Box>
  );
};

export default MLToolsListItem;
