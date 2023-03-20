import { SimpleGrid } from "@chakra-ui/react";
import { isLocalhost } from "../../Helpers/helpers";
import SpeciesListItem from "./SpeciesListItem";
import SuggestOrganismButton from "./SuggestOrganismButton";

const SpeciesList = () => {
  const speciesList = [
    { name: "Yarrowia", type: "yeast", display: true },
    { name: "Rhodosporidium", type: "yeast", display: true },
    { name: "Lipomyces", type: "yeast", display: true },
    { name: "Pichia", type: "yeast", display: true },
    { name: "Saccharomyces", type: "yeast", display: true },
    { name: "Rhodococcus", type: "bacteria", display: true },
    { name: "Clostridium", type: "bacteria", display: true },
    { name: "Testing", type: "bacteria", display: false },
  ];

  return (
    <SimpleGrid minChildWidth="270px" spacing="40px" w="100%">
      {speciesList.map((species, index) => {
        if (isLocalhost() || species.display) {
          return <SpeciesListItem species={species} key={index} />;
        } else {
          return <></>;
        }
      })}
      <SuggestOrganismButton />
    </SimpleGrid>
  );
};

export default SpeciesList;
