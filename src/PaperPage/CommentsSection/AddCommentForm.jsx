import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Textarea,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useParams } from "react-router-dom";
import { loginPopup, useFirebaseAuthentication } from "../../Auth/auth";
import {
  addComment,
  speciesToCollectionName,
} from "../../Helpers/databaseHelpers";
import { sendAdminEmail } from "../../Helpers/emailHelpers";

const AddCommentForm = ({ setShowForm, paper }) => {
  // get the current user
  const currentUser = useFirebaseAuthentication();
  const toast = useToast();

  // get collectionName from url
  const params = useParams();
  const species = params?.species;
  const collectionName = speciesToCollectionName(species);

  return (
    <>
      <Formik
        initialValues={{ comment: "" }}
        onSubmit={async (values, actions) => {
          if (currentUser) {
            const newComment = {
              sourceEmail: currentUser.email,
              text: values.comment,
              timeAdded: Date.now(),
              score: 1,
            };

            await addComment(collectionName, paper, newComment);

            await sendAdminEmail({
              subject: `ImpactDB: New comment from ${currentUser.email}`,
              html: `
              <div>
                <p>Comment: ${newComment.text}</p>
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

            actions.setSubmitting(false);

            paper.comments = [newComment, ...paper.comments];

            setShowForm(false);
          } else {
            // show google login modal
            loginPopup();

            // give error message
            toast({
              title: "Error: you need to be signed in to comment",
              status: "error",
              duration: 5000,
              isClosable: true,
            });
          }
        }}
      >
        {(props) => (
          <Form>
            <Field name="comment">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.comment && form.touched.comment}
                >
                  {currentUser && (
                    <FormLabel fontSize="14px" opacity="0.6">
                      Commenting publicly as {currentUser.email.split("@")[0]}
                    </FormLabel>
                  )}

                  <Textarea
                    {...field}
                    placeholder="What are your thoughts?"
                    w="860px"
                    autoFocus
                  />
                  <HStack mt="10px">
                    <Button
                      onClick={() => {
                        setShowForm(false);
                      }}
                    >
                      Cancel
                    </Button>
                    <Button
                      bg="green.400"
                      color={useColorModeValue("white", "black")}
                      type="submit"
                      isDisabled={form.values.comment === ""}
                      isLoading={props.isSubmitting}
                    >
                      Comment
                    </Button>
                  </HStack>
                </FormControl>
              )}
            </Field>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddCommentForm;
