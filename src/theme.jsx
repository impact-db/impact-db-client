import { extendTheme } from "@chakra-ui/react";

// const config = {
//   initialColorMode: "dark",
//   useSystemColorMode: false,
// };

const theme = extendTheme({
  // initialColorMode: "dark",
  // useSystemColorMode: false,
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Lato, sans-serif",
  },
  colors: {
    green: {
      100: "#77dc7c",
    },
  },
});

export default theme;
