import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  VStack,
  HStack,
} from "@chakra-ui/react";
import DeleteGeneButton from "./DeleteGeneButton";
import EditGeneButton from "./EditGeneButton";

const GeneAccordion = ({ genes, setGenes, geneType, editable }) => {
  return (
    <Box w="100%" textAlign="start">
      <Accordion w="85%" allowMultiple allowToggle align="start">
        {genes.map((gene, index) => {
          return (
            <AccordionItem key={index} minW="100%">
              <HStack spacing="0px">
                <AccordionButton
                  pl="0px"
                  py="5px"
                  pr={editable ? "0px" : "10px"}
                >
                  <Box flex="1" textAlign="left">
                    <Heading fontSize="15px">{gene.geneId}</Heading>
                  </Box>
                  {editable ? (
                    <HStack spacing="6px">
                      <EditGeneButton
                        gene={gene}
                        genes={genes}
                        setGenes={setGenes}
                        geneType={geneType}
                      />
                      <DeleteGeneButton
                        gene={gene}
                        index={index}
                        genes={genes}
                        setGenes={setGenes}
                      />
                      <AccordionIcon />
                    </HStack>
                  ) : (
                    <AccordionIcon />
                  )}
                </AccordionButton>
              </HStack>
              <AccordionPanel pb={4} pl="0px">
                <VStack align="flex-start">
                  <Heading fontSize="15px">Name: {gene.geneName}</Heading>
                  {/* only show species of origin for heterologous genes  */}
                  {geneType === "heterologous" && (
                    <Heading fontSize="15px">
                      Species of origin: {gene.originSpecies}
                    </Heading>
                  )}
                  {/* only show promoter, integration site, and codon 
                      optimized for overexpressed and heterologous genes  */}
                  {(geneType === "overexpressed" ||
                    geneType === "heterologous") && (
                    <>
                      <Heading fontSize="15px">
                        Promoter: {gene.promoter}
                      </Heading>
                      <Heading fontSize="15px">
                        Integration site: {gene.integrationSite}
                      </Heading>
                      <Heading fontSize="15px">
                        Codon optimized?:{" "}
                        {gene.optimizedCodons ? "True" : "False"}
                      </Heading>
                    </>
                  )}
                  {/* only show Overexpressed? information for heterologous genes  */}
                  {geneType === "heterologous" && (
                    <Heading fontSize="15px">
                      Overexpressed?: {gene.overexpressed ? "True" : "False"}
                    </Heading>
                  )}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
  );
};

export default GeneAccordion;
