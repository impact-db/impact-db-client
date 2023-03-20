import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import ExperimentalDataForm from "./ExperimentalDataForm";
import PaperDetailsForm from "./PaperDetailsForm";
import ProgressIndicator from "../Components/ProgessIndicator";

const EditPaperModal = ({ paper, onClose }) => {
  const submitButton = useRef(null);
  const [formNum, setFormNum] = useState(1);

  // get the initial form data from the paper object
  const [paperData, setPaperData] = useState({
    title: paper.title,
    abstract: paper.abstract,
    journal: paper.journal,
    doi: paper.doi,
    date: paper.date,
    authors: paper.authors,
  });

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Paper</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ProgressIndicator
            formNum={formNum}
            setFormNum={setFormNum}
            submitButton={submitButton}
            firstLabel="Paper Details"
            secondLabel="Experimental Data"
          />
          {formNum === 1 ? (
            <PaperDetailsForm
              setFormNum={setFormNum}
              paperData={paperData}
              setPaperData={setPaperData}
              submitButton={submitButton}
            />
          ) : (
            <ExperimentalDataForm
              paperData={paperData}
              setFormNum={setFormNum}
              onClose={onClose}
              formType="updatePaper"
              oldSlug={paper.slug}
            />
          )}
        </ModalBody>
      </ModalContent>
    </>
  );
};

export default EditPaperModal;
