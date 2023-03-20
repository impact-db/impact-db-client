import { Button, Modal, useDisclosure } from "@chakra-ui/react";
import EditPaperModal from "../../Modals/PaperModals/EditPaperModal";

const EditPaperButton = ({ paper }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="sm"
        variant="ghost"
        colorScheme="blue"
        onClick={async () => {
          onOpen();
        }}
      >
        EDIT
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <EditPaperModal paper={paper} onClose={onClose} />
      </Modal>
    </>
  );
};

export default EditPaperButton;
