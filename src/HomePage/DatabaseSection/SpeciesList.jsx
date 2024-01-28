import { SimpleGrid } from "@chakra-ui/react";
import { isLocalhost } from "../../Helpers/helpers";
import SpeciesListItem from "./SpeciesListItem";
import SuggestOrganismButton from "./SuggestOrganismButton";
import { getSpeciesInfo } from "../../Helpers/databaseHelpers";

const SpeciesList = () => {
  const speciesList = getSpeciesInfo();

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
