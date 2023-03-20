import { HStack } from "@chakra-ui/react";
import DuplicateStrainButton from "../StrainListItemButtons/DuplicateStrainButton";
import ExpandStrainButton from "../StrainListItemButtons/ExpandStrainButton";

const ControlButtons = ({ strain, onHomePage, showDetails }) => {
  return (
    <HStack
      w="68px"
      h="25px"
      spacing="0px"
      justify="space-between"
      align="center"
    >
      {/* duplicate result button */}
      <DuplicateStrainButton strain={strain} onHomePage={onHomePage} />

      {/* show/hide details button */}
      <ExpandStrainButton showDetails={showDetails} />
    </HStack>
  );
};

export default ControlButtons;
