import React, { useState, useEffect } from 'react';
import { useParams , useNavigate} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import productData from "../placeholderData/squaleneData.json"; // path to your JSON file
import StrainList from "../PaperPage/StrainList/StrainList";
import { Link } from "react-router-dom";
import { Box, Heading, HStack, Spacer, Text, useColorModeValue, Button} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

const ProductPage = () => {
  let params = useParams();
  let id = params?.id;


  // use useNavigate hook for button of going back
  let navigate = useNavigate(); // Use useNavigate hook
  const handleBackButtonClick = () => {
    navigate(-1);
  };


  // Fetch method
  // const [productData, setProductData] = useState(null);
  // useEffect(() => {
  //   fetch("../placeholderData/squaleneData.json")
  //     .then((response) => response.json())
  //     .then((data) => setProductData(data))
  //     .catch((error) => console.error('Error:', error));
  // }, []);


  const data = {
    experimentalData: productData
  }

  let headingColor = useColorModeValue("green.600", "green.100");

  const isLoading = false; 

  console.log(productData);


  if (isLoading) {
    return (
      <>
        <NavBar />
      </>
    );
  }
  else {
    return (
      <>
        <NavBar />
        {/* outer container */}
        <Box maxW="1500px" mt="35px" mx="auto">
          {/* inner container */}
          <Box maxW="900px" px="20px">
            <HStack justify="space-between" mb="20px">
            <Button as="a" 
              onClick={handleBackButtonClick} 
              variant="link" 
              colorScheme="black" 
              style={{cursor: "pointer"}}
              >
              {/* <Link to={"/#database"}> */}
                <HStack spacing="4px">
                  <ArrowBackIcon opacity="0.8" />
                  <Text fontSize="14px" opacity="0.8">
                    Back to the previous page
                  </Text>
                </HStack>
              {/* </Link> */}
            </Button>
            </HStack>
            <HStack>
              <Heading
                fontSize="20px"
                mt="5px"
              >
                Product: {id}
              </Heading>
            </HStack>
            <StrainList data={data} />
          </Box>
        </Box>
      </>
    );
  }
};

export default ProductPage;
