import { ChevronDownIcon } from "@chakra-ui/icons";
import { Tooltip, VStack } from "@chakra-ui/react";

const ExpandStrainButton = ({ showDetails }) => {
  return (
    <Tooltip
      hasArrow
      label={showDetails ? "Hide result details" : "Show result details"}
    >
      <VStack
        m="0px"
        h="32px"
        minW="32px"
        borderRadius="6px"
        align="center"
        justify="center"
        _hover={{
          backgroundColor: "rgba(144, 205, 244, 0.12)",
        }}
      >
        <ChevronDownIcon
          h="7"
          w="7"
          transform={showDetails ? "rotateZ(90deg)" : ""}
          transition="all 0.35s"
        />
      </VStack>
    </Tooltip>
  );
};

export default ExpandStrainButton;
