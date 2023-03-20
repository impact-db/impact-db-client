import { Flex, Tooltip } from "@chakra-ui/react";

const FormFieldDetail = ({ text }) => {
  return (
    <Tooltip label={text} placement="right" hasArrow>
      <Flex
        h="20px"
        w="20px"
        borderRadius="100%"
        border="1px solid"
        align="center"
        justify="center"
        cursor="default"
        fontSize="14px"
      >
        ?
      </Flex>
    </Tooltip>
  );
};

export default FormFieldDetail;
