import { Box, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import ReactionNetwork from "./WelcomeSection/ReactionNetwork";
import NavBar from "../NavBar/NavBar";
import TitleText from "./WelcomeSection/TitleText";
import DatabaseStructure from "./AboutSection/DatabaseStructure";
import AboutSection from "./AboutSection/AboutSection";
import ApiSection from "./ApiSection/ApiSection";
import FermentationResultFormat from "./FermentationResultFormatSection/FermentationResultFormat";
import MLToolsSection from "./MLToolsSection/MLToolsSection";
import ContactSection from "./ContactSection/ContactSection";
import DatabaseSection from "./DatabaseSection/DatabaseSection";
import ChartSection from "./ChartSection/ChartSection";
import InventorySection from "./InventorySection/InventorySection";

const HomePage = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <>
      {/* metabolic map backgroundd */}
      <ReactionNetwork />

      {/* nav bar */}
      <NavBar />

      {/* top text */}
      <TitleText isLargerThan800={isLargerThan800} />

      {/* Database Section */}
      <DatabaseSection />

      {/* gradient transition */}
      <Box
        h="150px"
        w="100%"
        bgGradient={useColorModeValue(
          "linear(to-b, transparent, gray.200)",
          "linear(to-b, transparent, gray.900)"
        )}
      />

      {/* ML Tools Section */}
      <MLToolsSection />

      {/* gradient transition */}
      <Box
        h="150px"
        w="100%"
        bgGradient={useColorModeValue(
          "linear(to-b, gray.200, transparent)",
          "linear(to-b, gray.900, transparent)"
        )}
      />

      {/* AboutSection */}
      <AboutSection />

      {/* gradient transition */}
      <Box
        h="150px"
        w="100%"
        bgGradient={useColorModeValue(
          "linear(to-b, transparent, gray.200)",
          "linear(to-b, transparent, gray.900)"
        )}
      />

      {/* Description of database structure */}
      <DatabaseStructure isLargerThan800={isLargerThan800} />

      {/* gradient transition */}
      <Box
        h="150px"
        w="100%"
        bgGradient={useColorModeValue(
          "linear(to-b, gray.200, transparent)",
          "linear(to-b, gray.900, transparent)"
        )}
      />

      {/* Description of fermentation instance */}
      <Box maxW="100vw" w="100%" overflow="clip">
        <FermentationResultFormat isLargerThan800={isLargerThan800} />
      </Box>

      {/* gradient transition */}
      <Box
        h="150px"
        w="100%"
        bgGradient={useColorModeValue(
          "linear(to-b, transparent, gray.200)",
          "linear(to-b, transparent, gray.900)"
        )}
      />

      {/* API Section */}
      <ApiSection />

      {/* gradient transition */}
      <Box
        h="150px"
        w="100%"
        bgGradient={useColorModeValue(
          "linear(to-b, gray.200, transparent)",
          "linear(to-b, gray.900, transparent)"
        )}
      />

      {/* Inventory Section */}
      <InventorySection />

      {/* gradient transition */}
      <Box
        h="150px"
        w="100%"
        bgGradient={useColorModeValue(
          "linear(to-b, transparent, gray.200)",
          "linear(to-b, transparent, gray.900)"
        )}
      />

      {/* chart section */}
      <ChartSection />

      {/* gradient transition */}
      <Box
        h="150px"
        w="100%"
        bgGradient={useColorModeValue(
          "linear(to-b, gray.200, transparent)",
          "linear(to-b, gray.900, transparent)"
        )}
      />

      {/* Contact section */}
      <ContactSection />

      {/* spacer */}
      <Box h="100px" w="100%" />
    </>
  );
};

export default HomePage;
