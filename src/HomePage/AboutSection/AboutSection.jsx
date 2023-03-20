import { Heading, Spacer, Text, VStack } from "@chakra-ui/react";

const AboutSection = () => {
  return (
    <VStack id="about" w="100vw" px="20px" py="40px" align="center">
      <VStack w="100%" maxW="1000px" m="auto" px="20px">
        <Heading textAlign="center">About</Heading>
        <Spacer minH="10px" />
        <Text textAlign="justify" maxW="800px" opacity="0.8">
          The Industrial Microbiology Publication and AI Crowd-sourced Toolbox
          (ImpactDB) is a platform for facilitating collaboration among
          synthetic biology researchers. Metabolic engineering knowledge is
          distributed in thousands of publications, so accessing relevant
          information is time-consuming. This database exists to centralize the
          currently distributed efforts of researchers who extract data from
          academic papers. The data is organized into fermentation result
          instances, which pair the bioprocess results (titer/rate/yield) of a
          strain with its bioprocess environment (e.g., temperature or pH) and
          its genetic background at a strain and gene level.
        </Text>
        <Spacer minH="4px" />
        <Text textAlign="justify" maxW="800px" opacity="0.8">
          ImpactDB also contains web interfaces for open-sourced machine
          learning models for titer prediction and strain design. These
          user-friendly interfaces provide access to modern computational
          biology tools.
        </Text>
      </VStack>
    </VStack>
  );
};

export default AboutSection;
