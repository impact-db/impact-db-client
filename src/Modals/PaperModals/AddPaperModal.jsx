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
import { isLocalhost } from "../../Helpers/helpers";

const AddPaperModal = ({ onClose }) => {
  const submitButton = useRef(null);
  const [formNum, setFormNum] = useState(1);

  const todaysDate = new Date().toISOString().split("T")[0]; // use today's date as the default

  let initialData = {};
  if (isLocalhost()) {
    initialData = {
      title: "Test Paper 1",
      abstract: `Abstract abstract abstract abstract abstract abstract abstract abstract abstract abstract abstract abstract abstract abstract abstract abstract abstract abstract abstract abstract `,
      journal: "Test journal",
      doi: "Test-doi",
      date: todaysDate,
      authors:
        "Author 1, Author 2, Author 3, Author 4, Author 5, Author 6, Author 7, Author 8",
    };
  } else {
    initialData = {
      title: "",
      abstract: "",
      journal: "",
      doi: "",
      date: todaysDate,
      authors: "",
    };
  }

  // initial values are blank
  const [paperData, setPaperData] = useState(initialData);

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Paper</ModalHeader>
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
              formType="addPaper"
            />
          )}
        </ModalBody>
      </ModalContent>
    </>
  );
};

export default AddPaperModal;
