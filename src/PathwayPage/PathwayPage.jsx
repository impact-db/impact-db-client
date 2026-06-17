import NavBar from "../NavBar/NavBar";
import {
  Box,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  Tooltip,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

import PathwayMapImage from "./PathwayMap.png";
import productMapInfo from "./productMapInfo.json";

const MAP_WIDTH = 1500;

const PathwayPage = () => {
  const headingColor = useColorModeValue("green.600", "green.100");
  const linkColor = useColorModeValue("blue.600", "blue.300");

  return (
    <>
      <NavBar />

      <Box maxW="1500px" mt="35px" mx="auto">
        <Box maxW="900px" pl="20px">
          <Box maxW="100px" mb="20px">
            <RouterLink to="/">
              <HStack spacing="4px">
                <ArrowBackIcon opacity="0.8" />
                <Text fontSize="14px" opacity="0.8">
                  Home page
                </Text>
              </HStack>
            </RouterLink>
          </Box>

          <Heading fontSize="20px" mt="5px" mb="20px" color={headingColor}>
            Pathway Map
          </Heading>
        </Box>

        <Box
          w="100%"
          px="20px"
          overflowX="auto"
          overflowY="hidden"
          sx={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          <Box position="relative" width={`${MAP_WIDTH}px`} maxW="none">
            <Box
              as="img"
              src={PathwayMapImage}
              alt="Pathway map"
              width={`${MAP_WIDTH}px`}
              maxW="none"
              display="block"
            />

            {productMapInfo
              .filter(
                (product) =>
                  product.isOnPathwayMap &&
                  product.x !== null &&
                  product.y !== null,
              )
              .map((product) => (
                <Tooltip key={product.name} label={product.fullName}>
                  <ChakraLink
                    as={RouterLink}
                    to={`/product/${encodeURIComponent(product.name)}`}
                    position="absolute"
                    left={`${product.x}%`}
                    top={`${product.y}%`}
                    transform="translate(-50%, -50%)"
                    fontFamily="'Times New Roman', serif"
                    fontSize="8.5px"
                    color={linkColor}
                    fontWeight="bold"
                    lineHeight="1"
                    bg="white"
                    px="1px"
                    py="0px"
                    borderRadius="1px"
                    _hover={{
                      color: "green.600",
                      textDecoration: "underline",
                      zIndex: 10,
                    }}
                  >
                    {product.pathwayMapName}
                  </ChakraLink>
                </Tooltip>
              ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PathwayPage;
