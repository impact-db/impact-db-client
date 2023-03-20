import { Button, Modal, useDisclosure } from "@chakra-ui/react";
import AddPaperModal from "../Modals/PaperModals/AddPaperModal";

const AddPaperButton = ({ loading, isLargerThan700 }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        disabled={loading}
        onClick={onOpen}
        w="100%"
        maxW={isLargerThan700 ? "150px" : "430px"}
        fontSize="16px"
        bg="green.100"
        color="gray.800"
      >
        Add Paper
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <AddPaperModal onClose={onClose} />
      </Modal>
    </>
  );
};

export default AddPaperButton;
