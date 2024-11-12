import { ArrowUpIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const ChatInputBar = ({ handleSend }) => {
  const [input, setInput] = useState("");

  const onSend = () => {
    if (input.trim() !== "") {
      handleSend(input); // Send the message
      setInput(""); // Clear the input after sending
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevent newline
      onSend(); // Send the message
    }
  };

  return (
    <HStack
      // bg="gray.800"
      p={4}
      mb="50px"
      borderRadius="15px"
      spacing={4}
      width="full"
      maxWidth="600px"
      boxShadow="md"
    >
      <Textarea
        variant="unstyled"
        placeholder="Type your message..."
        // color="white"
        value={input}
        onChange={(e) => setInput(e.target.value)} // Capture the input value
        onKeyDown={handleKeyDown} // Handle Enter and Shift+Enter key events
        px={4}
        _placeholder={{ color: "gray.400" }}
        resize="none" // Prevent resizing the textarea
        rows={1} // Default to a single row height
        // change the color of the flashing line
      />
      <IconButton
        aria-label="Send"
        icon={<ArrowUpIcon />}
        color="black"
        borderRadius="full"
        _hover={{ bg: "gray.200" }}
        onClick={onSend} // Trigger send on button click
      />
    </HStack>
  );
};

export default ChatInputBar;
