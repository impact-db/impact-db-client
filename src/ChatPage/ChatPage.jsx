import { useState, useEffect, useRef } from "react";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import AbstractFluxMap from "../Assets/AbstractFluxMap";
import NavBar from "../NavBar/NavBar";
import ChatWindow from "./ChatWindow";
import ChatInputBar from "./ChatInputBar";

const STICKY_SCROLL_THRESHOLD = 120;

const ChatPage = () => {
  // Create a reference to the worker object.

  const textareaRef = useRef(null);

  // Model loading and progress
  const [status, setStatus] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("");

  // Inputs and outputs
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    resizeInput();
  }, [input]);

  function resizeInput() {
    if (!textareaRef.current) return;

    const target = textareaRef.current;
    target.style.height = "auto";
    const newHeight = Math.min(Math.max(target.scrollHeight, 24), 200);
    target.style.height = `${newHeight}px`;
  }

  function handleSend() {
    console.log("handleSend");
  }

  return (
    <>
      <NavBar />
      <Heading fontSize="30px" textAlign="center" pt="10vh" pb="20px">
        Chat Page
      </Heading>
      <VStack
        minH="300px"
        maxW={{ base: "100%", sm: "90%", md: "75%", lg: "60%", xl: "50%" }}
        border="3px solid #252334"
        borderRadius="10px"
        m="auto"
        p="4"
      >
        {status === "loading" ? (
          <Box>Loading model, please wait...{loadingMessage}</Box>
        ) : (
          <>
            <ChatWindow messages={messages} />
            <ChatInputBar handleSend={handleSend} />
          </>
        )}
        <Box h="10px" />
      </VStack>
      <Flex mt="75px" justify="center">
        <AbstractFluxMap />
      </Flex>
    </>
  );
};

export default ChatPage;
