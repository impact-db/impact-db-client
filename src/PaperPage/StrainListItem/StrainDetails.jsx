import { Stack } from "@chakra-ui/react";
import BioprocessDetails from "./BioprocessDetails";
import GeneticDetails from "./GeneticDetails";

const StrainDetails = ({ strain, isLargerThan700 }) => {
  const rowOrCol = isLargerThan700 ? "row" : "column";

  return (
    <Stack direction={rowOrCol} align="flex-start" w="100%" spacing="20px">
      <BioprocessDetails strain={strain} />
      <GeneticDetails strain={strain} />
    </Stack>
  );
};

export default StrainDetails;
