import { useColorModeValue } from "@chakra-ui/react";

function getAutofillObject() {
  const autofillObject = {
    textFillColor: useColorModeValue("rgb(26, 32, 44)", "white"),
    boxShadow: "0 0 0px 1000px #00000000 inset",
    transition: "background-color 5000s ease-in-out 0s",
  };

  return autofillObject;
}

export { getAutofillObject };
