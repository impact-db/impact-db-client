import { Box, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import fadedReactionNetwork from "../../Assets/fadedReactionNetwork.webp";

const ReactionNetwork = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <>
      <Box
        position="absolute"
        w="100vw"
        h={isLargerThan800 ? "100vh" : "580px"}
        top="0px"
        left="0px"
        bgImage={fadedReactionNetwork}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        opacity={useColorModeValue("0.13", "0.06")}
        pointerEvents="none"
      />
    </>
  );
};

export default ReactionNetwork;
