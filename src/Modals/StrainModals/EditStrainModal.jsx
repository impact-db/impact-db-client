import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import ProgressIndicator from "../Components/ProgessIndicator";
import BioprocessConditionsForm from "./BioprocessConditionsForm";
import GeneticBackgroundForm from "./GeneticBackgroundForm";

const EditStrainModal = ({ strain, isOpen, onClose }) => {
  const submitButton = useRef(null);
  const [formNum, setFormNum] = useState(1);

  // use values from the strain as initial data for the forms
  const [strainData, setStrainData] = useState({
    // fermentation results
    product: strain.product,
    titer: strain.titer,
    averageRate: strain.averageRate,
    maximumRate: strain.maximumRate,
    yield: strain.yield,

    // bioprocess conditions
    volume: strain.volume,
    substrate1: strain.substrate1,
    substrateConc1: strain.substrateConc1,
    substrate2: strain.substrate2,
    substrateConc2: strain.substrateConc2,
    media: strain.media,
    time: strain.time,
    pH: strain.pH,
    temperature: strain.temperature,
    bioprocessNotes: strain.bioprocessNotes,

    // genetic background
    geneIds: strain.geneIds,
    geneNames: strain.geneNames,
    knockedOutGenes: strain.knockedOutGenes,
    overexpressedGenes: strain.overexpressedGenes,
    heterologousGenes: strain.heterologousGenes,
    originSpecies: strain.originSpecies,
    promoters: strain.promoters,
    integrationSites: strain.integrationSites,
    optimizedCodons: strain.optimizedCodons,
    species: strain.species,
    strain: strain.strain,
    parentStrain: strain.parentStrain,
    engineeredStrain: strain.engineeredStrain,
    geneticNotes: strain.geneticNotes,

    // multiple choice fields
    vessel: strain.vessel,
    oxygenLevel: strain.oxygenLevel,
    nitrogenLevel: strain.nitrogenLevel,
    directedEvolution: strain.directedEvolution,
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit fermentation result</ModalHeader>
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
              formType="updateStrain"
              oldStrain={structuredClone(strain)}
            />
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default EditStrainModal;
