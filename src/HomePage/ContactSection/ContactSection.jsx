import {
  Heading,
  Spacer,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";

const ContactSection = () => {
  return (
    <VStack
      id="about"
      w="100%"
      px="20px"
      py="40px"
      align="center"
      bg={useColorModeValue("gray.200", "gray.900")}
    >
      <VStack w="100%" maxW="1000px" m="auto" px="20px">
        {/* <Spacer minH="30px" /> */}
        <Heading id="contact" textAlign="center">
          Contact
        </Heading>
        <Spacer minH="10px" />
        <Text textAlign="justify" maxW="800px" opacity="0.8">
          Contact us with suggestions, bugs, or other feedback at
          garrett@impact-database.com
        </Text>
        <VStack pt="20px" spacing="0px">
          <Text fontSize="15px" opacity="0.8">
            Yufei Sun, Jeff Czajka, Mattheos Koffas, Yinjie Tang, Garrett Roell
          </Text>
          <Text fontSize="15px" opacity="0.8">
            2022
          </Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ContactSection;
