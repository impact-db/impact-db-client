import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import AbstractFluxMap from "../Assets/AbstractFluxMap";
import NavBar from "../NavBar/NavBar";
import { useState, useEffect } from "react";
import ChatWindow from "./ChatWindow";
import ChatInputBar from "./ChatInputBar";
import { CreateMLCEngine } from "@mlc-ai/web-llm";

async function initializeEngine(setPercentLoaded) {
  const selectedModel = "Llama-3.1-8B-Instruct-q4f32_1-MLC";

  const initProgressCallback = (progress) => {
    console.log("Model loading progress:", progress);
    setPercentLoaded(progress.progress);
  };

  return await CreateMLCEngine(selectedModel, { initProgressCallback });
}

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { sender: "assistant", text: "Hello! How can I assist you today?" },
  ]);
  const [engine, setEngine] = useState(null);
  const [percentLoaded, setPercentLoaded] = useState(0);

  useEffect(() => {
    async function loadEngine() {
      const loadedEngine = await initializeEngine(setPercentLoaded);
      setEngine(loadedEngine);
    }
    loadEngine();
  }, []);

  const handleSend = async (message) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: message },
      { sender: "assistant", text: "Preparing response..." },
    ]);

    console.log("Creating response to message:", message);
    console.log(engine);
    // const reply = await engine.chat.completions.create({
    //   messages,
    // });

    console.log(reply);
    // console.log(reply.choices[0].message.content);

    // Replace with actual response from engine if connected
    setTimeout(() => {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { sender: "assistant", text: `You just said: ${message}` },
      ]);
    }, 4000);
  };

  return (
    <>
      <NavBar />
      <Heading fontSize="30px" textAlign="center" pt="10vh" pb="20px">
        Chat Page
      </Heading>
      <Text textAlign="center" fontSize="20px">
        The LLM is {Math.round(100 * percentLoaded)}% loaded!
      </Text>
      <VStack
        minH="300px"
        maxW={{ base: "100%", sm: "90%", md: "75%", lg: "60%", xl: "50%" }}
        border="3px solid #252334"
        borderRadius="10px"
        m="auto"
        p="4"
      >
        <ChatWindow messages={messages} />
        <ChatInputBar handleSend={handleSend} />
        <Box h="10px" />
      </VStack>
      <Flex mt="75px" justify="center">
        <AbstractFluxMap />
      </Flex>
    </>
  );
};

export default ChatPage;
