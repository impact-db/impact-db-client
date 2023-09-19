import NavBar from "../NavBar/NavBar";
import {
  Box,
  Heading,
  HStack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";
import PathwayPDF from './PathwayMap.pdf';


const PathwayPage = () => {
  let headingColor = useColorModeValue("green.600", "green.100");
    
  return (
    <>
    <NavBar />
    {/* outer container */}
    <Box maxW="1500px" mt="35px" mx="auto">
      {/* inner container */}
      <Box maxW="900px" pl="20px">
        <Box maxW="100px" mb="20px">
            <Link to={"/"}>
            <HStack spacing="4px" w="auto" h="auto">
                <ArrowBackIcon opacity="0.8" />
                <Text fontSize="14px" opacity="0.8">
                Home page
                </Text>
            </HStack>
            </Link>
        </Box>



        <HStack w="full" justifyContent="space-between" mt="5px" mb="20px">
          <Heading fontSize="20px" mt="5px" mb="20px" color={headingColor}>
            Pathway Map
          </Heading>


        </HStack>
      </Box>
      <Box maxW="1500px" height="1000px" px="20px" overflowX="auto">
        {/* Insert PDF here */}
        <embed 
            src={PathwayPDF} 
            type="application/pdf" 
            width="100%" 
            height="900px" 
          />
      </Box>

    </Box>
    </>
    );
  
};

export default PathwayPage;
