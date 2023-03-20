import {
  Box,
  Button,
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
import { haveSameData } from "../../Helpers/databaseHelpers";
import FormFieldDetail from "../Components/FormFieldDetail";

const KnockoutForm = ({
  formType,
  knockedOutGenes,
  setKnockedOutGenes,
  setShowKnockOutForm,
  gene,
  onClose,
}) => {
  const toast = useToast();
  let initialValues = {};
  let formTitle = "";
  let oldGene = {};

  // handle initial values, and form title
  if (formType === "addGene") {
    initialValues = {
      geneId: "",
      geneName: "",
    };
    formTitle = "Add a knocked out gene";
  } else if (formType === "editGene") {
    initialValues = {
      geneId: gene.geneId,
      geneName: gene.geneName,
    };
    formTitle = "Edit knocked out gene";
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
            if (formType === "addGene") {
              setKnockedOutGenes([...knockedOutGenes, values]);
              setShowKnockOutForm(false);
            } else if (formType === "editGene") {
              const newGene = values;
              // check if the gene was editted
              if (haveSameData(newGene, oldGene)) {
                toast({
                  title: "Error: the gene is unchanged",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
              } else {
                // check if the data matches a different knocked out gene
                // remove the old gene
                let isDuplicate = false;
                let updatedGenes = [];

                knockedOutGenes.forEach((_gene) => {
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
                      "Error: the updated gene matches another knocked out gene",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                  });
                } else {
                  setKnockedOutGenes(updatedGenes);
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
                    <HStack w="100%" align="flex-start">
                      <FormLabel htmlFor="geneId" w="230px" mt="8px">
                        Gene id:
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
                        <FormFieldDetail text="Typically a 2-4 letter abbreviation" />
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
              <Spacer minH="20px" />

              <HStack justify="flex-end">
                <Button
                  fontSize="13px"
                  h="30px"
                  bg="green.100"
                  color="gray.800"
                  type="submit"
                >
                  Save knocked out gene
                </Button>
                <Button
                  fontSize="13px"
                  h="30px"
                  // handle cancel button behavior
                  onClick={() => {
                    if (formType === "addGene") {
                      setShowKnockOutForm(false);
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

export default KnockoutForm;
