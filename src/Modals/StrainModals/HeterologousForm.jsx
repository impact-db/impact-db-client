import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Spacer,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { haveSameData } from "../../Helpers/databaseHelpers";
import FormFieldDetail from "../Components/FormFieldDetail";

const HeterologousForm = ({
  formType,
  heterologousGenes,
  setHeterologousGenes,
  setShowHeterologousForm,
  gene,
  onClose,
}) => {
  const toast = useToast();
  const [optimizedCodons, setOptimizedCodons] = useState(
    formType === "addGene" ? false : gene.optimizedCodons
  );
  const [overexpressed, setOverexpressed] = useState(
    formType === "addGene" ? false : gene.overexpressed
  );

  let initialValues = {};
  let formTitle = "";
  let oldGene = {};

  // handle initial values, and form title
  if (formType === "addGene") {
    initialValues = {
      geneId: "",
      geneName: "",
      originSpecies: "",
      promoter: "",
      integrationSite: "",
    };
    formTitle = "Add a heterologous gene";
  } else if (formType === "editGene") {
    initialValues = {
      geneId: gene.geneId,
      geneName: gene.geneName,
      originSpecies: gene.originSpecies,
      promoter: gene.promoter,
      integrationSite: gene.integrationSite,
    };
    formTitle = "Edit heterologous gene";
    oldGene = structuredClone(gene);
  }

  const autofillObject = {
    textFillColor: useColorModeValue("rgb(26, 32, 44)", "white"),
    boxShadow: "0 0 0px 1000px #00000000 inset",
    transition: "background-color 5000s ease-in-out 0s",
  };

  function validateGeneId(value) {
    let error;
    if (!value) {
      error = "Gene id is required";
    }
    return error;
  }

  function validatePromoter(value) {
    let error;
    if (!value) {
      error = "Promoter is required";
    }
    return error;
  }

  function validateIntegrationSite(value) {
    let error;
    if (!value) {
      error = "Integration site is required";
    }
    return error;
  }

  return (
    <>
      <Box
        borderWidth="1px"
        p="10px"
        mt="20px"
        borderRadius="6px"
        position="relative"
      >
        <Text
          position="absolute"
          top="-9px"
          px="8px"
          bg={useColorModeValue("white", "#2D3748")}
          fontSize="12px"
        >
          {formTitle}
        </Text>
        <Formik
          validateOnBlur={false}
          initialValues={initialValues}
          onSubmit={(values) => {
            const newGene = {
              ...values,
              optimizedCodons: optimizedCodons,
              overexpressed: overexpressed,
            };

            if (formType === "addGene") {
              setHeterologousGenes([...heterologousGenes, newGene]);
              setShowHeterologousForm(false);
            } else if (formType === "editGene") {
              // check if the gene was editted
              if (haveSameData(newGene, oldGene)) {
                toast({
                  title: "Error: the gene is unchanged",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              } else {
                // check if the data matches a different heterologous gene
                // remove the old gene
                let isDuplicate = false;
                let updatedGenes = [];

                heterologousGenes.forEach((_gene) => {
                  // replace the old gene with new gene
                  if (haveSameData(_gene, oldGene)) {
                    updatedGenes = [...updatedGenes, newGene];
                  }
                  // check if the new gene matches an existing gene
                  else if (haveSameData(_gene, newGene)) {
                    isDuplicate = true;
                  }
                  // add the existing gene if it doesn't match new or old gene
                  else {
                    updatedGenes = [...updatedGenes, _gene];
                  }
                });

                if (isDuplicate) {
                  toast({
                    title:
                      "Error: the updated gene matches another heterologous gene",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  });
                } else {
                  setHeterologousGenes(updatedGenes);
                  onClose();
                }
              }
            }
          }}
        >
          {() => (
            <Form>
              {/* gene id field */}
              <Field name="geneId" validate={validateGeneId}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.geneId && form.touched.geneId}
                  >
                    <HStack w="100%" align="flex-start" mt="10px">
                      <FormLabel htmlFor="geneId" w="230px" mt="8px">
                        Gene id
                      </FormLabel>
                      <VStack w="100%" my="10px" align="flex-start">
                        <Input
                          {...field}
                          id="geneId"
                          placeholder="Gene id"
                          _autofill={autofillObject}
                          autoFocus
                        />

                        <FormErrorMessage>
                          {form.errors.geneId}
                        </FormErrorMessage>
                      </VStack>
                      <Box h="40px" w="40px" align="center" pt="7px">
                        <FormFieldDetail text="Typically a 2-4 letter acronym" />
                      </Box>
                    </HStack>
                  </FormControl>
                )}
              </Field>

              <Spacer h="10px" />

              {/* geneName field */}
              <Field name="geneName">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.geneName && form.touched.geneName}
                  >
                    <HStack w="100%" align="flex-start">
                      <FormLabel htmlFor="geneName" w="230px" mt="8px">
                        Gene name:
                      </FormLabel>
                      <VStack w="100%" my="10px" align="flex-start">
                        <Input
                          {...field}
                          id="geneName"
                          placeholder="Gene name"
                          _autofill={autofillObject}
                        />

                        <FormErrorMessage>
                          {form.errors.geneName}
                        </FormErrorMessage>
                      </VStack>
                      <Box h="40px" w="40px" align="center" pt="7px">
                        <FormFieldDetail text="Typically the gene name ends with -ase" />
                      </Box>
                    </HStack>
                  </FormControl>
                )}
              </Field>

              <Spacer h="10px" />

              {/* species of origin field */}
              <Field name="originSpecies">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.originSpecies && form.touched.originSpecies
                    }
                  >
                    <HStack w="100%" align="flex-start">
                      <FormLabel htmlFor="originSpecies" w="230px" mt="8px">
                        Species of origin:
                      </FormLabel>
                      <VStack w="100%" my="10px" align="flex-start">
                        <Input
                          {...field}
                          id="originSpecies"
                          placeholder="Species of origin"
                          _autofill={autofillObject}
                        />

                        <FormErrorMessage>
                          {form.errors.originSpecies}
                        </FormErrorMessage>
                      </VStack>
                      <Box h="40px" w="40px" align="center" pt="7px">
                        <FormFieldDetail text="Enter abbreviated name. e.g. E. coli" />
                      </Box>
                    </HStack>
                  </FormControl>
                )}
              </Field>

              <Spacer h="10px" />

              {/* promoter field */}
              <Field name="promoter" validate={validatePromoter}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.promoter && form.touched.promoter}
                  >
                    <HStack w="100%" align="flex-start">
                      <FormLabel htmlFor="promoter" w="230px" mt="8px">
                        Promoter
                      </FormLabel>
                      <VStack w="100%" my="10px" align="flex-start">
                        <Input
                          {...field}
                          id="promoter"
                          placeholder="Promoter"
                          _autofill={autofillObject}
                        />

                        <FormErrorMessage>
                          {form.errors.promoter}
                        </FormErrorMessage>
                      </VStack>
                      <Box h="40px" w="40px" align="center" pt="7px">
                        <FormFieldDetail text="Typically starts with a capital P" />
                      </Box>
                    </HStack>
                  </FormControl>
                )}
              </Field>
              <Spacer h="10px" />

              {/* integration site field */}
              <Field name="integrationSite" validate={validateIntegrationSite}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.integrationSite &&
                      form.touched.integrationSite
                    }
                  >
                    <HStack w="100%" align="flex-start" mb="10px">
                      <FormLabel htmlFor="integrationSite" w="230px" mt="8px">
                        Integration site
                      </FormLabel>
                      <VStack w="100%" my="10px" align="flex-start">
                        <Input
                          {...field}
                          id="integrationSite"
                          placeholder="Integration site"
                          _autofill={autofillObject}
                        />

                        <FormErrorMessage>
                          {form.errors.integrationSite}
                        </FormErrorMessage>
                      </VStack>
                      <Box h="40px" w="40px" align="center" pt="7px">
                        <FormFieldDetail text="The most common sites are xx, yy, and zz" />
                      </Box>
                    </HStack>
                  </FormControl>
                )}
              </Field>

              {/* codon optimized? */}
              <HStack justify="flex-start">
                <FormLabel w="140px" mt="8px">
                  Codon optimized?
                </FormLabel>
                <Checkbox
                  isChecked={optimizedCodons}
                  onChange={() => setOptimizedCodons(!optimizedCodons)}
                />
              </HStack>
              <Spacer h="10px" />

              {/* codon optimized? */}
              <HStack justify="flex-start">
                <FormLabel w="140px" mt="8px">
                  Overexpressed?
                </FormLabel>
                <Checkbox
                  isChecked={overexpressed}
                  onChange={() => setOverexpressed(!overexpressed)}
                />
              </HStack>
              <Spacer h="10px" />

              <HStack justify="flex-end">
                <Button
                  fontSize="13px"
                  h="30px"
                  bg="green.100"
                  color="gray.800"
                  type="submit"
                >
                  Save heterologous gene
                </Button>
                <Button
                  fontSize="13px"
                  h="30px"
                  onClick={() => {
                    if (formType === "addGene") {
                      setShowHeterologousForm(false);
                    } else if (formType === "editGene") {
                      onClose();
                    }
                  }}
                >
                  Cancel
                </Button>
              </HStack>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default HeterologousForm;
