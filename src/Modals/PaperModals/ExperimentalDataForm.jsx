import {
  Text,
  Link,
  Stack,
  useColorModeValue,
  ModalFooter,
  Button,
  useToast,
  Alert,
  AlertIcon,
  Spacer,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { loginPopup, useFirebaseAuthentication } from "../../Auth/auth";
import { convertToSlug } from "../../Helpers/stringHelpers";
import FileUploadBox from "../Components/FileUploadBox";
import {
  addPaper,
  speciesToCollectionName,
  updatePaper,
} from "../../Helpers/databaseHelpers";
import { sendAdminEmail } from "../../Helpers/emailHelpers";
import { downloadExample } from "../../Helpers/downloadExample";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ExperimentalDataForm = ({
  paperData,
  setFormNum,
  onClose,
  formType, // either addPaper or updatePaper
  oldSlug, // used to edit a paper
}) => {
  const toast = useToast();
  const queryClient = useQueryClient();
  const currentUser = useFirebaseAuthentication();
  const greenColor = useColorModeValue("gray.500", "gray.400");
  const [buttonLoading, setButtonLoading] = useState(false);

  // get collectionName from url parameters
  const params = useParams();
  const species = params?.species;
  const collectionName = speciesToCollectionName(species);
  console.log("species", species);
  console.log("collectionName", collectionName);

  // get the cached data for the paper array
  const paperArray = queryClient.getQueryData(["paperArray", collectionName]);

  let newPaper = {};
  let updatedPaper = {};

  const addPaperMutation = useMutation(
    ({ collectionName, newPaper }) => addPaper(collectionName, newPaper),
    {
      onSuccess: () => {
        // update the cache with the updated paper array
        const updatedPaperArray = [...paperArray, newPaper];
        queryClient.setQueryData(
          ["paperArray", collectionName],
          updatedPaperArray
        );

        // give success message
        toast({
          title: "Success: Your paper has been added to the database.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        sendAdminEmail({
          subject: `ImpactDB: New ${species} paper added by ${currentUser.email}`,
          html: `
            <div>
              <p>Title: ${newPaper.title}</p>
              <p>Abstract: ${newPaper.abstract}</p>
              <p>Journal: ${newPaper.journal}</p>
              <p>DOI: ${newPaper.doi}</p>
              <p>Publish Date: ${newPaper.date}</p>
              <p>Authors: ${newPaper.authors}</p>
              <p>Link: https://impact-database.com/paper/${species}/${newPaper.slug}</p>
            </div>
          `,
        });

        setButtonLoading(false);

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
    }
  );

  const editPaperMutation = useMutation(
    ({ collectionName, oldSlug, updatedPaper }) =>
      updatePaper(collectionName, oldSlug, updatedPaper),
    {
      onSuccess: () => {
        // update the cache with the updated paper array
        // let updatedPaperArray = structuredClone(paperArray);
        let updatedPaperArray = paperArray.filter((paper) => {
          return paper.slug !== oldSlug;
        });
        updatedPaperArray = [...updatedPaperArray, updatedPaper];

        queryClient.setQueryData(
          ["paperArray", collectionName],
          updatedPaperArray
        );

        // give success message
        toast({
          title: "Success: Your paper has been updated.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        sendAdminEmail({
          subject: `ImpactDB: A ${species} paper was updated by ${currentUser.email}`,
          html: `
            <div>
            <p>Title: ${updatedPaper.title}</p>
            <p>Abstract: ${updatedPaper.abstract}</p>
            <p>Journal: ${updatedPaper.journal}</p>
            <p>DOI: ${updatedPaper.doi}</p>
            <p>Publish Date: ${updatedPaper.date}</p>
            <p>Authors: ${updatedPaper.authors}</p>
            <p>Link: https://impact-database.com/paper/${species}/${updatedPaper.slug}</p>
            </div>
          `,
        });

        setButtonLoading(false);

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
    }
  );

  return (
    <Stack mt="30px" spacing="20px">
      <Formik
        initialValues={{ file: "", authors: "" }}
        onSubmit={async (_values, actions) => {
          setButtonLoading(true);
          // handle if the form is for adding a paper
          if (formType === "addPaper") {
            // first check if there is a user logged in
            if (!currentUser) {
              // show google login modal
              loginPopup();

              // show error toast
              toast({
                title: "Error: Sign in to add this paper to the database.",
                status: "error",
                duration: 5000,
                isClosable: true,
              });

              setButtonLoading(false);
            } else {
              // get slug of the paper to add to database
              const slug = convertToSlug(paperData.title);

              // get slugs of papers already in database
              let slugs = paperArray.map((paper) => paper.slug);

              // check if there is a matching slug already in the database
              if (slugs.indexOf(slug) !== -1) {
                // give error message
                toast({
                  title:
                    "Error: A paper with this title is already in this database",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
                setButtonLoading(false);
              } else {
                // if user is logged in AND slug is unique THEN add paper to database
                newPaper = {
                  ...paperData,
                  experimentalData: [], // need to update this line with data from file
                  comments: [],
                  issues: [],
                  slug: slug,
                  sourceEmail: currentUser.email,
                  timeAdded: Date.now(),
                };

                // add paper to database
                addPaperMutation.mutate({ collectionName, newPaper });
              }
            }
          }
          // if the form is for updating a paper, then update it
          else if (formType === "updatePaper") {
            // first check if there is a user logged in
            if (!currentUser) {
              // show google login modal
              loginPopup();
              // maybe click the submit button via a ref here if there is a current user

              // show error toast
              toast({
                title: "Error: Sign in to edit this paper to the database.",
                status: "error",
                duration: 5000,
                isClosable: true,
              });

              setButtonLoading(false);
            } else {
              // get slug of the paper to add to database
              const updatedSlug = convertToSlug(paperData.title);

              // get slugs of papers already in database
              let slugs = paperArray.map((paper) => paper.slug);

              if (
                updatedSlug !== oldSlug &&
                slugs.indexOf(updatedSlug) !== -1
              ) {
                // give error message
                toast({
                  title:
                    "Error: The updated title of this paper matches a different paper in the database",
                  status: "error",
                  duration: 5000,
                  isClosable: true,
                });
                setButtonLoading(false);
              } else {
                // if user is logged in AND slug is unique THEN update paper to database
                // get the old version of paper
                const indexToUpdate = slugs.indexOf(oldSlug);
                const oldPaper = paperArray[indexToUpdate];

                updatedPaper = {
                  ...paperData,
                  experimentalData: oldPaper.experimentalData,
                  comments: oldPaper.comments,
                  issues: oldPaper.issues,
                  slug: updatedSlug,
                  sourceEmail: currentUser.email,
                  timeAdded: Date.now(),
                };

                // add paper to database
                editPaperMutation.mutate({
                  collectionName,
                  oldSlug,
                  updatedPaper,
                });

                actions.setSubmitting(false);
              }
            }
          }
        }}
      >
        {(props) => (
          <Form>
            <Stack spacing="0px" align="center">
              <FileUploadBox />
              <Text fontSize="14px" pt="5px" color={greenColor}>
                Upload a .csv or .tsv up to 10 MB
              </Text>
              <Link pt="20px" color={greenColor} onClick={downloadExample}>
                download example file
              </Link>
              <Spacer pt="20px" />
              <Alert status="info">
                <AlertIcon />
                <Text>
                  File uploading is currently under development. For now, please
                  add your paper without data.
                </Text>
              </Alert>
            </Stack>
            <ModalFooter mt="20px">
              <Button
                mr={3}
                onClick={() => {
                  setFormNum(1);
                }}
              >
                Back
              </Button>
              <Button mr={3} onClick={onClose}>
                Close
              </Button>
              <Button
                bg="green.100"
                color="gray.800"
                isLoading={buttonLoading}
                type="submit"
              >
                {/* change button text depending on if the form is for adding or editing a paper */}
                {formType === "addPaper" && <Text>Add Paper</Text>}
                {formType === "updatePaper" && <Text>Update Paper</Text>}
              </Button>
            </ModalFooter>
          </Form>
        )}
      </Formik>
    </Stack>
  );
};

export default ExperimentalDataForm;
