import { AddIcon } from "@chakra-ui/icons";
import { Button, HStack, Text, useDisclosure } from "@chakra-ui/react";
import AddStrainModal from "../../Modals/StrainModals/AddStrainModal";

const AddStrainButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        w="100%"
        borderWidth="1px"
        borderRadius="6px"
        mb="10px"
        align="center"
        onClick={onOpen}
      >
        <HStack>
          <AddIcon h="12px" w="12px" />
          <Text>Add a fermentation result</Text>
        </HStack>
      </Button>

      <AddStrainModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default AddStrainButton;
