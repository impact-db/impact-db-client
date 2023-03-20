import { Text, Heading, VStack } from "@chakra-ui/react";
import { getGeneLists } from "../../Helpers/geneStringHelpers";
import GeneAccordion from "./GeneAccordion";

const GeneticDetails = ({ strain }) => {
  // convert gene strings to lists of gene objects
  const geneLists = getGeneLists(
    strain.geneIds,
    strain.geneNames,
    strain.knockedOutGenes,
    strain.overexpressedGenes,
    strain.heterologousGenes,
    strain.originSpecies,
    strain.promoters,
    strain.integrationSites,
    strain.optimizedCodons
  );

  return (
    <VStack w="100%" align="flex-start">
      <Text
        fontSize="16px"
        textDecoration="underline"
        w="100%"
        textAlign="start"
      >
        Genetic background
      </Text>
      <Heading fontSize="15px" w="100%" textAlign="start">
        Directed evolution?: {strain.directedEvolution ? "True" : "False"}
      </Heading>
      <Heading
        fontSize="15px"
        textDecoration="underline"
        w="100%"
        textAlign="start"
      >
        Knocked out genes
      </Heading>
      {geneLists.knockedOutGenes.length > 0 ? (
        <GeneAccordion
          genes={geneLists.knockedOutGenes}
          geneType="knockedOut"
          editable={false}
        />
      ) : (
        <Heading fontSize="15px" w="100%" textAlign="start">
          None
        </Heading>
      )}
      <Heading
        fontSize="15px"
        textDecoration="underline"
        w="100%"
        textAlign="start"
      >
        Overexpressed native genes
      </Heading>
      {/* if there are overexpressed native genes, then show them */}
      {geneLists.overexpressedGenes.length > 0 ? (
        <GeneAccordion
          genes={geneLists.overexpressedGenes}
          geneType="overexpressed"
          editable={false}
        />
      ) : (
        <Heading fontSize="15px">None</Heading>
      )}

      <Heading
        fontSize="15px"
        textDecoration="underline"
        w="100%"
        textAlign="start"
      >
        Heterologous genes
      </Heading>
      {/* if there are heterologous genes, then show them */}
      {geneLists.heterologousGenes.length > 0 ? (
        <GeneAccordion
          genes={geneLists.heterologousGenes}
          geneType="heterologous"
          editable={false}
        />
      ) : (
        <Heading fontSize="15px" w="100%" textAlign="start">
          None
        </Heading>
      )}
      <Text fontSize="15px" w="100%" textAlign="justify" opacity="0.8">
        {strain.geneticNotes}
      </Text>
    </VStack>
  );
};

export default GeneticDetails;
