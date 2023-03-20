import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import ReportIssueButton from "../PaperPage/ReportIssueButton";
import ProductList from "./ProductList";

const ProductListPage = () => {
  return (
    <>
      <NavBar />
      {/* outer container */}
      <Box maxW="1500px" px="20px" mt="25px" mx="auto">
        <Spacer h="10px" />
        {/* inner container */}
        <Box maxW="900px">
          <HStack justify="space-between" mb="20px">
            <Link to="/">
              <HStack spacing="4px">
                <ArrowBackIcon opacity="0.8" />
                <Text fontSize="14px" opacity="0.8">
                  Home page
                  {/* {capitalize(species)} database */}
                </Text>
              </HStack>
            </Link>
            <ReportIssueButton />
          </HStack>

          <Alert maxW="500px" m="auto" mt="30px">
            <AlertIcon />
            <AlertTitle>This feature currently under development.</AlertTitle>
          </Alert>
          <Heading fontSize="30px" pt="20px" pb="5px">
            Products
          </Heading>
          <Text opacity="0.8" pb="30px">
            This is a list of all the products in ImpactDB.
          </Text>
          <ProductList />
        </Box>
      </Box>
    </>
  );
};

export default ProductListPage;
