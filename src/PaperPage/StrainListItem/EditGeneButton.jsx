import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import HeterologousForm from "../../Modals/StrainModals/HeterologousForm";
import KnockoutForm from "../../Modals/StrainModals/KnockOutForm";
import OverexpressedForm from "../../Modals/StrainModals/OverexpressedForm";

const EditGeneButton = ({ gene, genes, setGenes, geneType }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Tooltip label={`Edit ${gene.geneId}`} placement="bottom" hasArrow>
        <Button
          size="xs"
          maxW="35px"
          variant="ghost"
          colorScheme="blue"
          onClick={async () => {
            onOpen();
          }}
        >
          EDIT
        </Button>
      </Tooltip>

      {/* edit gene modal */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        isCentered
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader pr="30px">Edit {gene.geneId}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pt="0px">
            {geneType === "knockedOut" && (
              <KnockoutForm
                formType="editGene"
                knockedOutGenes={genes}
                setKnockedOutGenes={setGenes}
                gene={gene}
                onClose={onClose}
              />
            )}
            {geneType === "overexpressed" && (
              <OverexpressedForm
                formType="editGene"
                overexpressedGenes={genes}
                setOverexpressedGenes={setGenes}
                gene={gene}
                onClose={onClose}
              />
            )}
            {geneType === "heterologous" && (
              <HeterologousForm
                formType="editGene"
                heterologousGenes={genes}
                setHeterologousGenes={setGenes}
                gene={gene}
                onClose={onClose}
              />
            )}

            <Spacer minH="30px" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditGeneButton;
