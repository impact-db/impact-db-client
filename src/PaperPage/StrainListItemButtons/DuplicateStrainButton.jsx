import { AddIcon } from "@chakra-ui/icons";
import {
  Modal,
  Text,
  Tooltip,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import AddStrainModal from "../../Modals/StrainModals/AddStrainModal";

const DuplicateStrainButton = ({ strain, onHomePage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  return (
    <>
      <Tooltip hasArrow label="Add new result based on this result">
        <VStack
          h="32px"
          minW="32px"
          borderRadius="6px"
          align="center"
          justify="center"
          spacing="0px"
          _hover={{
            backgroundColor: "rgba(144, 205, 244, 0.12)",
          }}
          onClick={(e) => {
            if (onHomePage) {
              toast({
                title: "You can't add a strain on the home page",
                status: "info",
                isClosable: true,
              });
            } else {
              onOpen();
            }
          }}
        >
          <AddIcon h="3.5" w="3.25" pointerEvents="none" />
          <Text fontSize="0px">duplicate strain</Text>
        </VStack>
      </Tooltip>
      {/* add result modal to show when modifying an existing strain */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <AddStrainModal strain={strain} isOpen={isOpen} onClose={onClose} />
      </Modal>
    </>
  );
};

export default DuplicateStrainButton;
