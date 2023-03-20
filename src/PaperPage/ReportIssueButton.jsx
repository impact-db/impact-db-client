import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import ReportIssueForm from "./ReportIssueForm";

const ReportIssueButton = ({ paper }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        variant="outline"
        fontSize="12px"
        h="22px"
        px="5px"
        opacity="0.8"
        onClick={onOpen}
      >
        Report an issue
      </Button>

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Report an issue</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ReportIssueForm paper={paper} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReportIssueButton;
