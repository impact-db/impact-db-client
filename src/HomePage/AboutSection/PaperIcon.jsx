import { Box, HStack, Text, VStack } from "@chakra-ui/react";

const PaperIcon = ({ paperNum }) => {
  return (
    // container that holds the paper object
    <VStack w="100%" h="100%" justify="space-between">
      {/* Top and bottom segments of a paper object */}
      <VStack spacing="0px" pt="30px" position="relative">
        {/* Top rectangle and triangle pieces */}
        <HStack spacing="0px" justify="flex-start" w="70px">
          {/* top 3 sided rectangle */}
          <Box border="1.5px solid" borderBottom="none" w="50px" h="20px" />
          {/* 45 degree line */}
          <Box
            w="28.2px"
            borderTop="1.5px solid"
            transform="rotate(45deg)"
            position="absolute"
            top="40px"
            right="-4px"
          />
          {/* Horizontal Line */}
          <Box
            w="21.5px"
            borderTop="1.5px solid"
            position="absolute"
            top="50px"
            right="0px"
          />
        </HStack>
        <Text
          position="absolute"
          fontSize="6px"
          left="8px"
          top="55px"
          opacity="0.78"
        >
          asdfkljasdfklkjlasdffl
        </Text>
        <Text
          position="absolute"
          fontSize="6px"
          left="8px"
          top="65px"
          opacity="0.78"
        >
          asdfkljasdfklasdfas
        </Text>
        <Text
          position="absolute"
          fontSize="6px"
          left="8px"
          top="75px"
          opacity="0.78"
        >
          asdfkljasdfklasdfsf
        </Text>
        <Text
          position="absolute"
          fontSize="6px"
          left="8px"
          top="85px"
          opacity="0.78"
        >
          asdfkljasdfklsadasf
        </Text>
        <Text
          position="absolute"
          fontSize="6px"
          left="8px"
          top="95px"
          opacity="0.78"
        >
          asdfkljasdfklasdfsf
        </Text>
        {/* bottom main box */}
        <Box border="1.5px solid" borderTop="none" w="70px" h="70px"></Box>
      </VStack>

      <VStack spacing="0px">
        <Text>Paper {paperNum}</Text>
        <Text opacity="0.8">{Math.ceil(Math.random() * 10)} Results</Text>
      </VStack>
    </VStack>
  );
};

export default PaperIcon;
