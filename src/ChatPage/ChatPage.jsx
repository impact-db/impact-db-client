import { useState, useEffect, useRef } from "react";
import { Box, Flex, Heading, VStack } from "@chakra-ui/react";
import AbstractFluxMap from "../Assets/AbstractFluxMap";
import NavBar from "../NavBar/NavBar";
import ChatWindow from "./ChatWindow";
import ChatInputBar from "./ChatInputBar";

const IS_WEBGPU_AVAILABLE = !!navigator.gpu;
const STICKY_SCROLL_THRESHOLD = 120;

const ChatPage = () => {
  // Create a reference to the worker object.
  const worker = useRef(null);

  const textareaRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Model loading and progress
  const [status, setStatus] = useState(null);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [progressItems, setProgressItems] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  // Inputs and outputs
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [tps, setTps] = useState(null);
  const [numTokens, setNumTokens] = useState(null);

  function onEnter(message) {
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setTps(null);
    setIsRunning(true);
    setInput("");
  }

  useEffect(() => {
    resizeInput();
  }, [input]);

  function onInterrupt() {
    // NOTE: We do not set isRunning to false here because the worker
    // will send a 'complete' message when it is done.
    worker.current.postMessage({ type: "interrupt" });
  }

  function resizeInput() {
    if (!textareaRef.current) return;

    const target = textareaRef.current;
    target.style.height = "auto";
    const newHeight = Math.min(Math.max(target.scrollHeight, 24), 200);
    target.style.height = `${newHeight}px`;
  }

  // We use the `useEffect` hook to setup the worker as soon as the `App` component is mounted.
  useEffect(() => {
    if (!worker.current) {
      // Create the worker if it does not yet exist.
      worker.current = new Worker(new URL("/src/worker.js", import.meta.url), {
        type: "module",
      });
    }

    // Create a callback function for messages from the worker thread.
    const onMessageReceived = (e) => {
      switch (e.data.status) {
        case "loading":
          // Model file start load: add a new progress item to the list.
          setStatus("loading");
          setLoadingMessage(e.data.data);
          break;

        case "initiate":
          setProgressItems((prev) => [...prev, e.data]);
          break;

        case "progress":
          // Model file progress: update one of the progress items.
          setProgressItems((prev) =>
            prev.map((item) => {
              if (item.file === e.data.file) {
                return { ...item, ...e.data };
              }
              return item;
            })
          );
          break;

        case "done":
          // Model file loaded: remove the progress item from the list.
          setProgressItems((prev) =>
            prev.filter((item) => item.file !== e.data.file)
          );
          break;

        case "ready":
          // Pipeline ready: the worker is ready to accept messages.
          setStatus("ready");
          break;

        case "start":
          {
            // Start generation
            setMessages((prev) => [
              ...prev,
              { role: "assistant", content: "" },
            ]);
          }
          break;

        case "update":
          {
            // Generation update: update the output text.
            // Parse messages
            const { output, tps, numTokens } = e.data;
            setTps(tps);
            setNumTokens(numTokens);
            setMessages((prev) => {
              const cloned = [...prev];
              const last = cloned.at(-1);
              cloned[cloned.length - 1] = {
                ...last,
                content: last.content + output,
              };
              return cloned;
            });
          }
          break;

        case "complete":
          // Generation complete: re-enable the "Generate" button
          setIsRunning(false);
          break;
      }
    };

    // Attach the callback function as an event listener.
    worker.current.addEventListener("message", onMessageReceived);

    // Define a cleanup function for when the component is unmounted.
    return () => {
      worker.current.removeEventListener("message", onMessageReceived);
    };
  }, []);

  // Send the messages to the worker thread whenever the `messages` state changes.
  useEffect(() => {
    if (messages.filter((x) => x.role === "user").length === 0) {
      // No user messages yet: do nothing.
      return;
    }
    if (messages.at(-1).role === "assistant") {
      // Do not update if the last message is from the assistant
      return;
    }
    setTps(null);
    worker.current.postMessage({ type: "generate", data: messages });
  }, [messages, isRunning]);

  useEffect(() => {
    if (!chatContainerRef.current) return;
    if (isRunning) {
      const element = chatContainerRef.current;
      if (
        element.scrollHeight - element.scrollTop - element.clientHeight <
        STICKY_SCROLL_THRESHOLD
      ) {
        element.scrollTop = element.scrollHeight;
      }
    }
  }, [messages, isRunning]);

  function handleSend() {
    console.log("handleSend");
  }

  return IS_WEBGPU_AVAILABLE ? (
    <div>
      {/* Initial State */}
      {status === null && messages.length === 0 && (
        <div>
          <div>
            <img src="logo.png" alt="Logo" />
            <h1>Phi-3 WebGPU</h1>
            <h2>A private, powerful AI chatbot running in your browser.</h2>
          </div>
          <p>
            You are about to load the{" "}
            <a
              href="https://huggingface.co/Xenova/Phi-3-mini-4k-instruct"
              target="_blank"
              rel="noreferrer"
            >
              Phi-3-mini-4k-instruct
            </a>
            , a 3.82B parameter LLM optimized for browser inference. Once
            downloaded, the 2.3GB model will be cached for future use. All
            processing is local—no internet connection required after loading.
          </p>
          <button
            onClick={() => {
              worker.current.postMessage({ type: "load" });
              setStatus("loading");
            }}
            disabled={status !== null}
          >
            Load model
          </button>
        </div>
      )}

      {/* Loading State */}
      {status === "loading" && (
        <div>
          <p>{loadingMessage}</p>
          {progressItems.map(({ file, progress, total }, i) => (
            <Progress key={i} text={file} percentage={progress} total={total} />
          ))}
        </div>
      )}

      {/* Chat Window */}
      {status === "ready" && (
        <div ref={chatContainerRef}>
          <Chat messages={messages} />
          {tps && (
            <p>
              {!isRunning && (
                <>
                  Generated {numTokens} tokens in {(numTokens / tps).toFixed(2)}{" "}
                  seconds (<span>{tps.toFixed(2)}</span> tokens/second).{" "}
                </>
              )}
              {!isRunning && (
                <span
                  onClick={() => {
                    worker.current.postMessage({ type: "reset" });
                    setMessages([]);
                  }}
                >
                  Reset
                </span>
              )}
            </p>
          )}
        </div>
      )}

      {/* Input Bar */}
      <div>
        <p>{status}</p>
        <input
          ref={textareaRef}
          placeholder="Type your message..."
          rows={1}
          value={input}
          disabled={status !== "ready"}
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !e.shiftKey &&
              input.trim() &&
              !isRunning
            ) {
              e.preventDefault();
              onEnter(input);
            }
          }}
          onInput={(e) => setInput(e.target.value)}
        />
        {isRunning ? (
          <button onClick={onInterrupt}>stop</button>
        ) : (
          <button onClick={() => input.trim() && onEnter(input)}>enter</button>
        )}
      </div>

      {/* Disclaimer */}
      <p>Disclaimer: Generated content may be inaccurate or false.</p>
    </div>
  ) : (
    <div>WebGPU is not supported by this browser :(</div>
  );

  // return (
  //   <>
  //     <NavBar />
  //     <Heading fontSize="30px" textAlign="center" pt="10vh" pb="20px">
  //       Chat Page
  //     </Heading>
  //     <VStack
  //       minH="300px"
  //       maxW={{ base: "100%", sm: "90%", md: "75%", lg: "60%", xl: "50%" }}
  //       border="3px solid #252334"
  //       borderRadius="10px"
  //       m="auto"
  //       p="4"
  //     >
  //       {status === "loading" ? (
  //         <Box>Loading model, please wait...{loadingMessage}</Box>
  //       ) : (
  //         <>
  //           <ChatWindow messages={messages} />
  //           <ChatInputBar handleSend={handleSend} />
  //         </>
  //       )}
  //       {/* {workerError && <Box color="red">{workerError}</Box>} */}
  //       <Box h="10px" />
  //     </VStack>
  //     <Flex mt="75px" justify="center">
  //       <AbstractFluxMap />
  //     </Flex>
  //   </>
  // );
};

export default ChatPage;
