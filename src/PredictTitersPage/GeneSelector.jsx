import { AddIcon } from "@chakra-ui/icons";
import { Button, HStack, Select, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { getGeneInfo } from "../Helpers/getGeneInfo";

const GeneSelector = ({
  showKnockOutForm,
  setShowKnockOutForm,
  knockedOutGenes,
  setKnockedOutGenes,
}) => {
  // variables to access the state of the gene selectors
  const [newKnockOutGeneId, setNewKnockOutGeneId] = useState("YALI0F05390g");
  const toast = useToast();
  const geneInfo = getGeneInfo();

  if (showKnockOutForm) {
    return (
      <>
        <Select
          placeholder="YALI0B15598g - 6-phosphogluconate dehydrogenase - GND1"
          mt="20px"
          onChange={(e) => {
            const newGeneData = e.target.value;
            const newGeneId = newGeneData.split(" - ")[0];
            setNewKnockOutGeneId(newGeneId);
          }}
        >
          {geneInfo.map((gene, index) => {
            return (
              <option value={gene.id} key={index}>
                {gene.gene_id} - {gene.gene_name} - {gene.gene_abbr}
              </option>
            );
          })}
        </Select>
        <HStack justify="flex-end" mt="20px">
          <Button
            fontSize="13px"
            h="30px"
            bg="green.100"
            color="gray.800"
            // a function to add a gene id to the knockedOutGenes string
            onClick={() => {
              let newKnockedOutGenes;

              // get the array of knocked out genes, handling case for no knocked out genes
              newKnockedOutGenes = knockedOutGenes.split(";");
              if (knockedOutGenes.length === 0) {
                newKnockedOutGenes = [];
              }

              // prevent duplicate knocked out genes
              if (newKnockedOutGenes.includes(newKnockOutGeneId)) {
                toast({
                  title: `${newKnockOutGeneId} is already knocked out`,
                  status: "error",
                  isClosable: true,
                });
              }
              // if the gene is knocked already knocked out, then add it to the knocked out genes string
              else {
                // add new gene id to array and convert the array to a string,
                newKnockedOutGenes = [...newKnockedOutGenes, newKnockOutGeneId];
                newKnockedOutGenes = newKnockedOutGenes.join(";");

                // update the knocked out gene string
                setKnockedOutGenes(newKnockedOutGenes);

                // close the form
                setShowKnockOutForm(false);
              }
            }}
          >
            Save knocked out gene
          </Button>
          <Button
            fontSize="13px"
            h="30px"
            // handle cancel button behavior
            onClick={() => {
              setShowKnockOutForm(false);
            }}
          >
            Cancel
          </Button>
        </HStack>
      </>
    );
  } else {
    return (
      <>
        <Button
          h="28px"
          w="85%"
          mt="10px"
          borderWidth="1px"
          borderRadius="6px"
          onClick={() => setShowKnockOutForm(true)}
        >
          <HStack>
            <AddIcon h="10px" w="10px" />
            <Text fontSize="13px">Add a knocked out gene</Text>
          </HStack>
        </Button>
      </>
    );
  }
};

export default GeneSelector;
