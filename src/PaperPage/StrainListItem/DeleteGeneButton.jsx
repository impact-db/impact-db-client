import { CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";

const DeleteGeneButton = ({ gene, index, genes, setGenes }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip label={`Delete ${gene.geneId}`} placement="bottom" hasArrow>
        <Button
          size="xs"
          variant="ghost"
          color="red"
          h="24px"
          aria-label="delete gene"
          onClick={() => {
            onOpen();
          }}
        >
          <CloseIcon h="10px" w="10px" m="0px" p="0px" />
        </Button>
      </Tooltip>

      {/* delete gene modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="xl"
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pr="30px">Delete {gene.geneId}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pt="0px">
            <Text>
              Please note that this action will not take effect until the result
              is saved.
            </Text>
          </ModalBody>

          <ModalFooter textAlign="center">
            <Button
              m="auto"
              colorScheme="red"
              onClick={async () => {
                const updatedGenes = genes.filter(
                  (_, _index) => index !== _index
                );
                setGenes(updatedGenes);
                onClose();
              }}
            >
              Delete Gene
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteGeneButton;
