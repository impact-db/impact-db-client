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
import ReportIssueFormHomepage from "./ReportIssueForm";

const ReportIssueButton = ({ paper }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        size="lg"
        fontSize="16px"
        w="175px"
        bg="green.200"
        color="gray.800"
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
            <ReportIssueFormHomepage paper={paper} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReportIssueButton;
