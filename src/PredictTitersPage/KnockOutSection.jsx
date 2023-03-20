import { AddIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Button,
  FormLabel,
  HStack,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { getGeneInfo } from "../Helpers/getGeneInfo";
import GeneSelector from "./GeneSelector";

const KnockOutSection = ({
  knockedOutGenes,
  setKnockedOutGenes,
  showKnockOutForm,
  setShowKnockOutForm,
}) => {
  const geneInfo = getGeneInfo();
  return (
    <>
      <FormLabel pl="8px">Knocked out genes</FormLabel>

      <VStack
        align="flex-start"
        spacing="16px"
        mb={knockedOutGenes ? "16px" : "0px"}
      >
        {knockedOutGenes &&
          knockedOutGenes.split(";").map((geneId, index) => {
            let geneDetails = {};
            geneInfo.forEach((gene) => {
              if (gene.gene_id === geneId) {
                geneDetails.geneId = gene.gene_id;
                geneDetails.geneName = gene.gene_name;
                geneDetails.geneAbbr = gene.gene_abbr;
              }
            });

            return (
              <HStack w="100%" justify="space-between" key={index}>
                <Text pl="8px" fontSize="15px" opacity="0.8">
                  {geneDetails.geneId} - {geneDetails.geneName} -{" "}
                  {geneDetails.geneAbbr}
                </Text>
                <Tooltip
                  label={`Delete ${geneDetails.geneId}`}
                  placement="right"
                  hasArrow
                >
                  <Button
                    size="xs"
                    variant="ghost"
                    color="red"
                    h="24px"
                    aria-label="delete gene"
                    onClick={() => {
                      // convert the string to an array
                      let newKnockedOutGenes = knockedOutGenes.split(";");
                      // remove genes with ids that match the deleted gene id
                      newKnockedOutGenes = newKnockedOutGenes.filter(
                        (geneId) => geneId !== geneDetails.geneId
                      );
                      // convert the array to a string
                      newKnockedOutGenes = newKnockedOutGenes.join(";");
                      setKnockedOutGenes(newKnockedOutGenes);
                    }}
                  >
                    <CloseIcon h="10px" w="10px" m="0px" p="0px" />
                  </Button>
                </Tooltip>
              </HStack>
            );
          })}
      </VStack>

      {/* Either the button or the form itself */}
      <GeneSelector
        showKnockOutForm={showKnockOutForm}
        setShowKnockOutForm={setShowKnockOutForm}
        knockedOutGenes={knockedOutGenes}
        setKnockedOutGenes={setKnockedOutGenes}
      />
    </>
  );
};

export default KnockOutSection;
