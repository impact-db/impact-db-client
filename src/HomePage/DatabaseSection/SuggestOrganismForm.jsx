import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spacer,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { loginPopup, useFirebaseAuthentication } from "../../Auth/auth";
import { sendAdminEmail, sendUserEmail } from "../../Helpers/emailHelpers";

const SuggestOrganismForm = ({ onClose }) => {
  // get the current user
  const currentUser = useFirebaseAuthentication();
  const toast = useToast();

  function validateSubject(value) {
    let error;
    if (!value) {
      error = "Subject is required";
    }
    return error;
  }

  function validateMessage(value) {
    let error;
    if (!value) {
      error = "Message is required";
    }
    return error;
  }

  return (
    <Formik
      initialValues={{ subject: "", message: "" }}
      onSubmit={async (values, actions) => {
        if (currentUser) {
          // send email to administrative emails
          await sendAdminEmail({
            subject: `ImpactDB: Organism suggestion from ${currentUser.email}`,
            html: `
              <div>
                <p>Subject: ${values.subject}</p>
                <p>Message: ${values.message}</p>
              </div>
            `,
          });

          // send email to the user
          await sendUserEmail({
            emailAddress: currentUser.email,
            subject: `Thank you for suggesting an organism for ImpactDB`,
            html: `
              <div>
                <p>We have recieved your organism suggestion.</p>
                <p>Subject: ${values.subject}</p>
                <p>Message: ${values.message}</p>
              </div>
            `,
          });

          onClose();
          toast({
            title: "Success! Thank you for suggesting a new organism",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        } else {
          // show google login modal
          loginPopup();

          // give error message
          toast({
            title: "Error: you need to be signed in to suggest a new organism",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
        actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <Field name="subject" validate={validateSubject}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.subject && form.touched.subject}
              >
                <FormLabel pl="8px">Subject:</FormLabel>
                <Input {...field} placeholder="Subject" p="8px" />
                <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Spacer h="8px" />
          <Field name="message" validate={validateMessage}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.message && form.touched.message}
              >
                <FormLabel pl="8px">Message:</FormLabel>
                <Textarea {...field} placeholder="Message" p="8px" />
                <FormErrorMessage>{form.errors.message}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button
            mt={4}
            mb="16px"
            bg="green.100"
            color="gray.800"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Suggest organism
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SuggestOrganismForm;
