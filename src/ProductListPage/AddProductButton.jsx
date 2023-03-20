import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
// import AddStrainModal from "../../Modals/StrainModals/AddStrainModal";

const AddProductButton = () => {
  const toast = useToast();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        w="100%"
        borderWidth="1px"
        borderRadius="6px"
        mb="10px"
        align="center"
        onClick={() => {
          toast({
            title: "We are currently implementing this feature",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        }}
      >
        <HStack>
          <AddIcon h="12px" w="12px" />
          <Text>Add a product</Text>
        </HStack>
      </Button>

      {/* <AddStrainModal
        isOpen={isOpen}
        onClose={onClose}
      /> */}
    </>
  );
};

export default AddProductButton;
