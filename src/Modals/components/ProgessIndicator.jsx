import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";

const ProgressIndicator = ({
  formNum,
  setFormNum,
  submitButton,
  firstLabel,
  secondLabel,
}) => {
  return (
    <>
      <Stack direction="row" w="100%" h="40px" spacing="0px">
        <Stack
          w="100%"
          direction="row"
          align="center"
          justify="right"
          spacing="0px"
        >
          <Box
            h="40px"
            w="40px"
            pt="7px"
            borderRadius="100%"
            textAlign="center"
            cursor="pointer"
            bg={formNum === 1 ? "green.100" : ""}
            color={formNum === 1 ? useColorModeValue("", "black") : ""}
            borderWidth={formNum === 1 ? "" : "1px"}
            onClick={() => setFormNum(1)}
          >
            1
          </Box>
          <Box w="calc(50% - 20px)" borderWidth="0.5px"></Box>
        </Stack>
        <Stack
          w="100%"
          direction="row"
          align="center"
          justify="left"
          spacing="0px"
        >
          <Box w="calc(50% - 20px)" borderWidth="0.5px"></Box>
          <Box
            h="40px"
            w="40px"
            borderRadius="100%"
            textAlign="center"
            pt="7px"
            cursor="pointer"
            bg={formNum === 2 ? "green.100" : ""}
            color={formNum === 2 ? useColorModeValue("", "black") : ""}
            borderWidth={formNum === 2 ? "" : "1px"}
            onClick={() => {
              // clicking the button to go to the second page
              // is the same as submitting the first page form
              submitButton.current.click();
            }}
          >
            2
          </Box>
        </Stack>
      </Stack>
      <Stack direction="row" w="100%" spacing="0px" my="5px">
        <Box w="100%" textAlign="center">
          <Text fontSize="14px">{firstLabel}</Text>
        </Box>
        <Box w="100%" textAlign="center">
          <Text fontSize="14px">{secondLabel}</Text>
        </Box>
      </Stack>
    </>
  );
};

export default ProgressIndicator;
