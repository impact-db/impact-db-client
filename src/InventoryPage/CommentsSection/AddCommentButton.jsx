import { AddIcon } from "@chakra-ui/icons";
import { Button, HStack, Text } from "@chakra-ui/react";

const AddCommentButton = ({ setShowForm }) => {
  return (
    <>
      <Button
        w="100%"
        borderWidth="1px"
        borderRadius="6px"
        mb="10px"
        align="center"
        onClick={() => setShowForm(true)}
      >
        <HStack>
          <AddIcon h="12px" w="12px" />
          <Text>Add a comment</Text>
        </HStack>
      </Button>
    </>
  );
};

export default AddCommentButton;
