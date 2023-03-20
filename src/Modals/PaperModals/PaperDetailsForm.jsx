import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  ModalFooter,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import FormFieldDetail from "../Components/FormFieldDetail";

const PaperDetailsForm = ({
  paperData,
  setPaperData,
  setFormNum,
  submitButton,
}) => {
  function validateTitle(value) {
    let error;
    if (!value) {
      error = "Title is required";
    }
    return error;
  }

  function validateAbstract(value) {
    let error;
    if (!value) {
      error = "Abstract is required";
    }
    return error;
  }

  function validateJournal(value) {
    let error;
    if (!value) {
      error = "Journal is required";
    }
    return error;
  }

  function validateDoi(value) {
    let error;
    if (!value) {
      error = "DOI is required";
    }
    if (value.includes("https") || value.includes("doi.org")) {
      error = "Only enter DOI number, not the doi.org url";
    }
    return error;
  }

  function validateDate(value) {
    let error;
    console.log(value, typeof value);
    if (!value) {
      error = "Publish date is required";
    } else {
      const year = parseInt(value.split("-")[0]);
      if (year < 1900) {
        error = "Publish year must be after 1900";
      }
      console.log(year);
    }

    return error;
  }

  function validateAuthors(value) {
    let error;
    if (!value) {
      error = "At least one author is required";
    }
    return error;
  }

  return (
    <Formik
      initialValues={paperData}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        setPaperData(values);
        setFormNum(2);
      }}
    >
      {(props) => (
        <Form>
          {/* title field */}
          <Field name="title" validate={validateTitle}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.title && form.touched.title}>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input {...field} id="title" placeholder="Title" />
                <FormErrorMessage>{form.errors.title}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          {/* abstract text area */}
          <Spacer h="10px" />
          <Field name="abstract" validate={validateAbstract}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.abstract && form.touched.abstract}
              >
                <FormLabel htmlFor="abstract">Abstract</FormLabel>
                <Textarea {...field} id="abstract" placeholder="Abstract" />
                <FormErrorMessage>{form.errors.abstract}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Spacer h="10px" />
          {/* journal field */}
          <Field name="journal" validate={validateJournal}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.journal && form.touched.journal}
              >
                <FormLabel htmlFor="journal">Journal</FormLabel>
                <Input {...field} id="journal" placeholder="Journal" />
                <FormErrorMessage>{form.errors.journal}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Spacer h="10px" />
          {/* DOI field */}
          <Field name="doi" validate={validateDoi}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.doi && form.touched.doi}>
                <HStack align="center" spacing="0px" mb="8px">
                  <FormLabel htmlFor="doi" my="auto">
                    DOI
                  </FormLabel>
                  <FormFieldDetail text="Only enter DOI number, not the doi.org url" />
                </HStack>
                <Input {...field} id="doi" placeholder="DOI" />
                <FormErrorMessage>{form.errors.doi}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Spacer h="10px" />
          {/* date field */}
          <Field name="date" validate={validateDate}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.date && form.touched.date}>
                <FormLabel htmlFor="date">Publish Date</FormLabel>
                <Input {...field} id="date" type="date" />
                <FormErrorMessage>{form.errors.date}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Spacer h="10px" />
          {/* authors field */}
          <Field name="authors" validate={validateAuthors}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.authors && form.touched.authors}
              >
                <FormLabel htmlFor="authors">Authors</FormLabel>
                <Input {...field} id="authors" placeholder="Authors" />
                <FormErrorMessage>{form.errors.authors}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <ModalFooter>
            <Button
              ref={submitButton}
              bg="green.100"
              color="gray.800"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Continue
            </Button>
          </ModalFooter>
        </Form>
      )}
    </Formik>
  );
};

export default PaperDetailsForm;
