import { AddIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  GridItem,
  useColorModeValue,
  VStack,
  Text,
  Box,
} from "@chakra-ui/react";
import SuggestOrganismForm from "./SuggestOrganismForm";

const SuggestOrganismButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const boxShadow = useColorModeValue(
    "0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);",
    "0 1px 2px 0 rgb(60 64 67 / 80%), 0 1px 3px 1px rgb(60 64 67 / 50%);"
  );
  const hoverColor = useColorModeValue("#f5f5f5", "#11341A55");
  return (
    <Box align="center">
      <GridItem
        maxW="260px"
        h="180px"
        px="20px"
        py="12px"
        borderRadius="8px"
        boxShadow={boxShadow}
        _hover={{ backgroundColor: `${hoverColor}`, cursor: "pointer" }}
        onClick={() => {
          onOpen();
        }}
      >
        <VStack
          h="100%"
          w="100%"
          pb="14px"
          justify="center"
          align="center"
          spacing="16px"
        >
          <AddIcon h="24px" w="24px" />
          <Text>Suggest organism</Text>
        </VStack>
      </GridItem>

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Suggest Organism</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SuggestOrganismForm onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SuggestOrganismButton;
