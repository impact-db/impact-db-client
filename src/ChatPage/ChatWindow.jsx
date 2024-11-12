import { Box, Text, VStack } from "@chakra-ui/react";

const ChatWindow = ({ messages }) => {
  return (
    <VStack flex={1} spacing={4} overflowY="auto" p={4} w="100%">
      {messages &&
        messages.map((msg, index) => (
          <Box
            key={index}
            alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"}
            border="2px solid"
            borderRadius="md"
            p={3}
            maxWidth="80%"
            // boxShadow="0 0 10px #00fff9"
          >
            <Text
              //  color="#F9DF73"
              color="Gray.400"
              letterSpacing="wide"
            >
              {msg.text}
            </Text>
          </Box>
        ))}
    </VStack>
  );
};

export default ChatWindow;
