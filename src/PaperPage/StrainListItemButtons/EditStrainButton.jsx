import { Button, Modal, useDisclosure } from "@chakra-ui/react";
import EditStrainModal from "../../Modals/StrainModals/EditStrainModal";

const EditStrainButton = ({ strain }) => {
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
        <EditStrainModal strain={strain} isOpen={isOpen} onClose={onClose} />
      </Modal>
    </>
  );
};

export default EditStrainButton;
