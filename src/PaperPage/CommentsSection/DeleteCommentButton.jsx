import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  useDisclosure,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  deleteComment,
  speciesToCollectionName,
} from "../../Helpers/databaseHelpers";

const DeleteCommentButton = ({ comment, paper }) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  const species = params?.species;
  const collectionName = speciesToCollectionName(species);

  return (
    <VStack spacing="0px">
      <Spacer minH="4px" />
      <Button
        size="sm"
        fontSize="13px"
        h="28px"
        variant="ghost"
        colorScheme="red"
        onClick={onOpen}
      >
        DELETE
      </Button>

      {/* delete button modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pr="30px">Delete Comment</ModalHeader>
          <ModalCloseButton />
          <ModalBody pt="0px">
            <Text>Please note that this action can not be undone.</Text>
          </ModalBody>

          <ModalFooter textAlign="center">
            <Button
              m="auto"
              colorScheme="red"
              isLoading={isLoading}
              onClick={async () => {
                setIsLoading(true);
                try {
                  // run delete strain function, and refresh the page to show the change
                  await deleteComment(collectionName, paper, comment);

                  setIsLoading(false);
                  location.reload();
                } catch (e) {
                  toast({
                    title: `Error: ${e}`,
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  });

                  setIsLoading(false);
                }
              }}
            >
              Delete Comment
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default DeleteCommentButton;
