import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  ModalFooter,
  Radio,
  RadioGroup,
  Spacer,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { loginPopup, useFirebaseAuthentication } from "../../Auth/auth";
import GeneAccordion from "../../PaperPage/StrainListItem/GeneAccordion";
import {
  addStrain,
  getPaperArray,
  haveSameData,
  speciesToCollectionName,
  strainIsUnique,
  updateStrain,
} from "../../Helpers/databaseHelpers";
import { getGeneLists, getGeneStrings } from "../../Helpers/geneStringHelpers";
import HeterologousForm from "./HeterologousForm";
import KnockoutForm from "./KnockOutForm";
import OverexpressedForm from "./OverexpressedForm";
import FormFieldDetail from "../Components/FormFieldDetail";
import { sendAdminEmail } from "../../Helpers/emailHelpers";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const GeneticBackgroundForm = ({
  strainData,
  onClose,
  formType,
  oldStrain,
}) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const currentUser = useFirebaseAuthentication();
  const autofillObject = {
    textFillColor: useColorModeValue("rgb(26, 32, 44)", "white"),
    boxShadow: "0 0 0px 1000px #00000000 inset",
    transition: "background-color 5000s ease-in-out 0s",
  };
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const slug = params?.slug;
  const species = params?.species;
  const collectionName = speciesToCollectionName(species);

  const [directedEvolutionValue, setDirectedEvolutionValue] = useState(
    strainData.directedEvolution ? "true" : "false"
  );
  const [showKnockOutForm, setShowKnockOutForm] = useState(false);
  const [showOverexpressedForm, setShowOverexpressedForm] = useState(false);
  const [showHeterologousForm, setShowHeterologousForm] = useState(false);

  // run function to convert gene strings to lists of gene objects here, and use as initial state values
  const geneLists = getGeneLists(
    strainData.geneIds,
    strainData.geneNames,
    strainData.knockedOutGenes,
    strainData.overexpressedGenes,
    strainData.heterologousGenes,
    strainData.originSpecies,
    strainData.promoters,
    strainData.integrationSites,
    strainData.optimizedCodons
  );

  const [knockedOutGenes, setKnockedOutGenes] = useState(
    geneLists.knockedOutGenes
  );
  const [overexpressedGenes, setOverexpressedGenes] = useState(
    geneLists.overexpressedGenes
  );
  const [heterologousGenes, setHeterologousGenes] = useState(
    geneLists.heterologousGenes
  );

  function validateSpecies(value) {
    let error;
    if (!value) {
      error = "Species is required";
    }
    return error;
  }

  function validateParentStrain(value) {
    let error;
    if (!value) {
      error = "Parent strain is required";
    }
    return error;
  }

  // get either cached or new paperArray data
  const { data } = useQuery(["paperArray", collectionName], ({ queryKey }) =>
    getPaperArray(queryKey[1])
  );

  // set the value of the paper based on cached or fetched data
  let paper = {};
  let paperArray = [];
  if (data) {
    paperArray = data;

    paper = "not found";
    paperArray.forEach((_paper) => {
      if (_paper.slug === slug) {
        paper = _paper;
      }
    });
  }

  // create an object to hold data
  let newStrain = {};

  const addStrainMutation = useMutation(
    ({ collectionName, paper, newStrain }) =>
      addStrain(collectionName, paper, newStrain),
    {
      onMutate: () => {
        setLoading(true);
      },
      onSuccess: () => {
        // make a version of the paper with the new strain added
        let updatedPaper = structuredClone(paper);
        updatedPaper.experimentalData = [
          ...updatedPaper.experimentalData,
          newStrain,
        ];

        // get the index of the paper to update
        const slugs = paperArray.map((_paper) => _paper.slug);
        const indexToUpdate = slugs.indexOf(slug);

        // update the paper array
        const updatedPaperArray = structuredClone(paperArray);
        updatedPaperArray[indexToUpdate] = updatedPaper;

        // update cache with updated paper array
        queryClient.setQueryData(
          ["paperArray", collectionName],
          updatedPaperArray
        );

        // give success message
        toast({
          title: "Success: Your strain has been added to the database.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        // send email
        sendAdminEmail({
          subject: `ImpactDB: A ${species} result was added by ${currentUser.email}`,
          html: `
            <div>
            <p>Title: ${paper.title}</p>
            <p>Abstract: ${paper.abstract}</p>
            <p>Journal: ${paper.journal}</p>
            <p>DOI: ${paper.doi}</p>
            <p>Publish Date: ${paper.date}</p>
            <p>Authors: ${paper.authors}</p>
            <p>Link: https://impact-database.com/paper/${species}/${paper.slug}</p>
            </div>
          `,
        });

        // close modal
        onClose();
      },
      onError: (err) => {
        console.log(err);

        toast({
          // potentially want to hide full error from user
          title: `Error: ${err}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
      onSettled: () => {
        setLoading(false);
      },
    }
  );

  const editStrainMutation = useMutation(
    ({ collectionName, paper, newStrain, oldStrain }) =>
      updateStrain(collectionName, paper, newStrain, oldStrain),
    {
      onMutate: () => {
        setLoading(true);
      },
      onSuccess: () => {
        // create a version of the paper
        const updatedPaper = structuredClone(paper);

        // remove old strain
        updatedPaper.experimentalData = updatedPaper.experimentalData.filter(
          (strain) => {
            return !haveSameData(strain, oldStrain);
          }
        );

        // add updated strain
        updatedPaper.experimentalData = [
          ...updatedPaper.experimentalData,
          newStrain,
        ];

        // get the index of the paper to update
        const slugs = paperArray.map((_paper) => _paper.slug);
        const indexToUpdate = slugs.indexOf(slug);

        // update the paper
        const updatedPaperArray = structuredClone(paperArray);
        updatedPaperArray[indexToUpdate] = updatedPaper;

        // update cache with updated paper array
        queryClient.setQueryData(
          ["paperArray", collectionName],
          updatedPaperArray
        );

        // give success message
        toast({
          title: "Success: Your strain has been updated",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        // send email
        sendAdminEmail({
          subject: `ImpactDB: A ${species} result was updated by ${currentUser.email}`,
          html: `
          <div>
          <p>Title: ${paper.title}</p>
          <p>Abstract: ${paper.abstract}</p>
          <p>Journal: ${paper.journal}</p>
          <p>DOI: ${paper.doi}</p>
          <p>Publish Date: ${paper.date}</p>
          <p>Authors: ${paper.authors}</p>
          <p>Link: https://impact-database.com/paper/${species}/${paper.slug}</p>
          </div>
        `,
        });

        // close modal
        onClose();
      },
      onError: (err) => {
        console.log(err);

        toast({
          title: `Error: ${err}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      },
      onSettled: () => {
        setLoading(false);
      },
    }
  );

  // Sensor regulator; promoter engineering, metabolon engineering,
  // protein scaffold, mutagenisis, adaptive evoluton, mutagensisi and high throughput screen

  return (
    <>
      <Spacer h="10px" />

      {/* knocked out genes */}
      <FormLabel>Knocked out genes</FormLabel>
      <GeneAccordion
        genes={knockedOutGenes}
        setGenes={setKnockedOutGenes}
        geneType="knockedOut"
        editable={true}
      />
      {/* either show knock out form, or the button to show knock out form */}
      {showKnockOutForm ? (
        <KnockoutForm
          formType="addGene"
          knockedOutGenes={knockedOutGenes}
          setKnockedOutGenes={setKnockedOutGenes}
          setShowKnockOutForm={setShowKnockOutForm}
        />
      ) : (
        <Button
          h="28px"
          w="85%"
          mt="10px"
          borderWidth="1px"
          borderRadius="6px"
          onClick={() => setShowKnockOutForm(true)}
        >
          <HStack>
            <AddIcon h="10px" w="10px" />
            <Text fontSize="13px">Add a knocked out gene</Text>
          </HStack>
        </Button>
      )}

      <Spacer h="10px" />

      {/* overexpressed genes */}
      <FormLabel>Overexpressed native genes</FormLabel>
      <GeneAccordion
        genes={overexpressedGenes}
        setGenes={setOverexpressedGenes}
        geneType="overexpressed"
        editable={true}
      />
      {/* show the overexpressed form or the button */}
      {showOverexpressedForm ? (
        <OverexpressedForm
          formType="addGene"
          overexpressedGenes={overexpressedGenes}
          setOverexpressedGenes={setOverexpressedGenes}
          setShowOverexpressedForm={setShowOverexpressedForm}
        />
      ) : (
        <Button
          h="28px"
          w="85%"
          mt="10px"
          borderWidth="1px"
          borderRadius="6px"
          onClick={() => setShowOverexpressedForm(true)}
        >
          <HStack>
            <AddIcon h="10px" w="10px" />
            <Text fontSize="13px">Add an overexpressed native gene</Text>
          </HStack>
        </Button>
      )}

      <Spacer h="10px" />

      {/* Heterologous genes */}
      <FormLabel>Heterologous genes</FormLabel>
      <GeneAccordion
        genes={heterologousGenes}
        setGenes={setHeterologousGenes}
        geneType="heterologous"
        editable={true}
      />
      {/* show the heterologous form or the button */}
      {showHeterologousForm ? (
        <HeterologousForm
          formType="addGene"
          heterologousGenes={heterologousGenes}
          setHeterologousGenes={setHeterologousGenes}
          setShowHeterologousForm={setShowHeterologousForm}
        />
      ) : (
        <Button
          h="28px"
          w="85%"
          mt="10px"
          borderWidth="1px"
          borderRadius="6px"
          onClick={() => setShowHeterologousForm(true)}
        >
          <HStack>
            <AddIcon h="10px" w="10px" />
            <Text fontSize="13px">Add an heterologous native gene</Text>
          </HStack>
        </Button>
      )}

      <Formik
        initialValues={{
          species: strainData.species,
          parentStrain: strainData.parentStrain,
          engineeredStrain: strainData.engineeredStrain,
          geneticNotes: strainData.geneticNotes,
        }}
        onSubmit={async (values) => {
          // convert lists of gene objects into gene strings
          const geneStrings = getGeneStrings(
            knockedOutGenes,
            overexpressedGenes,
            heterologousGenes
          );

          if (currentUser) {
            newStrain = {
              ...strainData,
              sourceEmail: currentUser.email,
              geneIds: geneStrings.geneIds,
              geneNames: geneStrings.geneNames,
              knockedOutGenes: geneStrings.knockedOutGenes,
              overexpressedGenes: geneStrings.overexpressedGenes,
              heterologousGenes: geneStrings.heterologousGenes,
              originSpecies: geneStrings.originSpecies,
              integrationSites: geneStrings.integrationSites,
              promoters: geneStrings.promoters,
              optimizedCodons: geneStrings.optimizedCodons,
              directedEvolution:
                directedEvolutionValue === "true" ? true : false,
              species: values.species,
              parentStrain: values.parentStrain,
              engineeredStrain: values.engineeredStrain,
              geneticNotes: values.geneticNotes,
            };

            // check if the new strain is already in the paper
            if (!strainIsUnique(paper, newStrain)) {
              toast({
                title:
                  "Error: This fermentation result is already in the database",
                status: "error",
                duration: 5000,
                isClosable: true,
              });
            }
            // if the strain is unique, then add it to the database
            else {
              if (formType === "addStrain") {
                addStrainMutation.mutate({ collectionName, paper, newStrain });
              } else if (formType === "updateStrain") {
                editStrainMutation.mutate({
                  collectionName,
                  paper,
                  newStrain,
                  oldStrain,
                });
              }
            }

            // actions.setSubmitting(false);
          } else {
            // show login popup
            loginPopup();

            toast({
              title: "Error: Sign in to add or edit this strain",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        }}
      >
        {(props) => (
          <Form>
            <Spacer h="20px" />
            <Field name="species" validate={validateSpecies}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.species && form.touched.species}
                >
                  <HStack align="center" spacing="0px" mb="8px">
                    <FormLabel my="auto">Species</FormLabel>
                    <FormFieldDetail text="Species must match the database" />
                  </HStack>
                  <Input
                    {...field}
                    placeholder="Species"
                    pointerEvents="none"
                    _autofill={autofillObject}
                    disabled
                  />
                  <FormErrorMessage>{form.errors.species}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Spacer h="10px" />

            <Field name="parentStrain" validate={validateParentStrain}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.parentStrain && form.touched.parentStrain
                  }
                >
                  <FormLabel>Parent strain</FormLabel>
                  <Input
                    {...field}
                    placeholder="Parent strain"
                    _autofill={autofillObject}
                  />
                  <FormErrorMessage>
                    {form.errors.parentStrain}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Spacer h="10px" />

            <Field
              name="engineeredStrain"
              // validate={validateEngineeredStrain}
            >
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.engineeredStrain &&
                    form.touched.engineeredStrain
                  }
                >
                  <FormLabel>Engineered strain</FormLabel>
                  <Input
                    {...field}
                    placeholder="Engineered strain"
                    _autofill={autofillObject}
                  />
                  <FormErrorMessage>
                    {form.errors.engineeredStrain}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Spacer h="10px" />

            {/* directed evolution field */}
            <HStack align="center" spacing="0px" mb="8px">
              <FormLabel my="auto">Directed Evolution</FormLabel>
              <FormFieldDetail text="Was directed evolution used to increase strain performance?" />
            </HStack>

            <RadioGroup
              onChange={setDirectedEvolutionValue}
              value={directedEvolutionValue}
            >
              <HStack
                my="15px"
                justify="center"
                align="flex-start"
                spacing="30px"
              >
                <Radio colorScheme="green" value="true">
                  True
                </Radio>
                <Radio colorScheme="green" value="false">
                  False
                </Radio>
              </HStack>
            </RadioGroup>

            {/* genetic notes field */}
            <Spacer h="10px" />
            <Field name="geneticNotes">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.geneticNotes && form.touched.geneticNotes
                  }
                >
                  <HStack align="center" spacing="0px" mb="8px">
                    <FormLabel htmlFor="geneticNotes" my="auto">
                      Genetic Notes:
                    </FormLabel>
                    <FormFieldDetail text="Optionally, include additional details" />
                  </HStack>
                  <Textarea
                    {...field}
                    id="geneticNotes"
                    placeholder="Notes on genetic background"
                    _autofill={autofillObject}
                    minH="100px"
                  />
                  <FormErrorMessage>
                    {form.errors.geneticNotes}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <ModalFooter pr="0px">
              <Button
                bg="green.100"
                color="gray.800"
                type="submit"
                isLoading={loading}
              >
                {formType === "addStrain" && (
                  <Text>Add Fermentation Result</Text>
                )}
                {formType === "updateStrain" && (
                  <Text>Update Fermentation Result</Text>
                )}
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default GeneticBackgroundForm;
