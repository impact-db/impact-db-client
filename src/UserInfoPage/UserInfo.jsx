import React from 'react';
import NavBar from "../NavBar/NavBar";
import { loginPopup } from "../Auth/auth";  // Make sure to import the login function

import {
  Box,
  Heading,
  Text,
  useColorModeValue,
  HStack,
  Spacer,
  Button  // Imported the Button component
} from "@chakra-ui/react";
import { useFirebaseAuthentication } from "../Auth/auth";

const UserInfo = () => {
  const userInfo = useFirebaseAuthentication();
  const email = userInfo?.email ?? "";
  const jwt = userInfo?.jwt ?? "N/A (Your token may not be ready yet, please refresh the page.)";

  const headingColor = useColorModeValue("green.600", "green.100");

  return (
    <>
      <NavBar />
      {/* outer container */}
      <Box maxW="1500px" mt="35px" mx="auto">
        {/* inner container */}
        <Box maxW="900px" px="20px">
          <HStack justify="space-between" mb="20px">
            <Heading fontSize="14px" opacity="0.8">
              User Information
            </Heading>
          </HStack>
          {userInfo ? (
            <>
              <Text fontSize="14px" color={headingColor}>
                e-mail address:
              </Text>
              <HStack>
                <Text
                  fontSize="14px"
                  mt="5px"
                >
                  {email}
                </Text>
              </HStack>

              <Text mt= "20px"fontSize="14px" color={headingColor}>
                Your token:
              </Text>
              <Text
                fontSize="14px"
                textAlign="justify"
                lineHeight="20px"
              >
                {jwt}
              </Text>
            </>
          ) : (
            <Button onClick={loginPopup}>Login to view user information</Button>
          )}
        </Box>
      </Box>
    </>
  );
};

export default UserInfo;
