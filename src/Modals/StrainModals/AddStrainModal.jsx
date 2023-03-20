import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { isLocalhost } from "../../Helpers/helpers";
import { capitalize } from "../../Helpers/stringHelpers";
import ProgressIndicator from "../Components/ProgessIndicator";
import BioprocessConditionsForm from "./BioprocessConditionsForm";
import GeneticBackgroundForm from "./GeneticBackgroundForm";

const AddStrainModal = ({ strain = {}, isOpen, onClose }) => {
  // get collectionName from url
  const params = useParams();
  const species = params?.species;

  // these variables are needed for controlling the progress indicator
  const submitButton = useRef(null);
  const [formNum, setFormNum] = useState(1);

  let startingStrain = {};

  // if there is no initial data and on localhost use placeholder data
  if (Object.keys(strain).length === 0 && isLocalhost()) {
    startingStrain = {
      // fermentation results
      product: "citrate",
      titer: "7.5",
      maximumRate: "0.41",
      averageRate: "0.1",
      yield: "0.754",

      // bioprocess conditions
      volume: "0.05",
      substrate1: "glycerol",
      substrateConc1: "52",
      substrate2: "",
      substrateConc2: "",
      media: "",
      time: "144",
      pH: "4.1",
      temperature: "28",
      bioprocessNotes: "",

      // genetic background
      geneIds: "",
      geneNames: "",
      knockedOutGenes: "",
      overexpressedGenes: "",
      heterologousGenes: "",
      originSpecies: "",
      promoters: "",
      integrationSites: "",
      optimizedCodons: "",
      species: capitalize(species),
      strain: "123",
      parentStrain: "abc",
      engineeredStrain: "def",
      geneticNotes: "",

      // multiple choice fields
      vessel: "shake flask", // use shake flask as default
      oxygenLevel: "sufficient", // use sufficient oxygen as default
      nitrogenLevel: "sufficient", // use sufficient nitrogen as default
      directedEvolution: false,
    };
  }
  // if there is no initial data and on live site, then use blank strain data
  else if (Object.keys(strain).length === 0) {
    startingStrain = {
      // fermentation results
      product: "",
      titer: "",
      maximumRate: "",
      averageRate: "",
      yield: "",

      // bioprocess conditions
      volume: "",
      substrate1: "",
      substrateConc1: "",
      substrate2: "",
      substrateConc2: "",
      media: "",
      time: "",
      pH: "",
      temperature: "",
      bioprocessNotes: "",

      // genetic background
      geneIds: "",
      geneNames: "",
      knockedOutGenes: "",
      overexpressedGenes: "",
      heterologousGenes: "",
      originSpecies: "",
      promoters: "",
      integrationSites: "",
      optimizedCodons: "",
      species: capitalize(species),
      strain: "",
      parentStrain: "",
      engineeredStrain: "",
      geneticNotes: "",

      // multiple choice fields
      vessel: "shake flask", // use shake flask as default
      oxygenLevel: "sufficient", // use sufficient oxygen as default
      nitrogenLevel: "sufficient", // use sufficient nitrogen as default
      directedEvolution: false,
    };
  } else {
    startingStrain = strain;
  }

  // initial values depend on whether the site is on localhost
  const [strainData, setStrainData] = useState(startingStrain);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add a new fermentation result</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ProgressIndicator
            formNum={formNum}
            setFormNum={setFormNum}
            submitButton={submitButton}
            firstLabel="Product and Conditions"
            secondLabel="Genetic background"
          />
          {formNum === 1 ? (
            <BioprocessConditionsForm
              setFormNum={setFormNum}
              strainData={strainData}
              setStrainData={setStrainData}
              submitButton={submitButton}
            />
          ) : (
            <GeneticBackgroundForm
              strainData={strainData}
              onClose={onClose}
              formType="addStrain"
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddStrainModal;
