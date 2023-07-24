import NavBar from "../NavBar/NavBar";
import LoadingDots from "../loadingDots/LoadingDots";
import { Box, Spacer } from "@chakra-ui/react";
import { getInventory } from "../Helpers/databaseHelpers";
import { useQuery } from "@tanstack/react-query";

const InventoryPage = () => {
  // get either cached or new molecular inventory data
  const { isLoading, data } = useQuery(["inventory"], ({ queryKey }) =>
    getInventory()
  );

  // handle loading state
  if (isLoading) {
    return (
      <>
        <NavBar />
        {/* outer container */}
        <Box maxW="1500px" px="20px" mt="25px" mx="auto">
          {/* inner container */}
          <Box maxW="900px">
            <Spacer h="100px" />
            <LoadingDots />
          </Box>
        </Box>
      </>
    );
  }
  // handle display data state
  else {
    console.log("inventory data is", data);
    return (
      <>
        <NavBar />
        {/* outer container */}
        <Box maxW="1500px" mt="35px" mx="auto">
          {/* inner container */}
          <Box maxW="900px" px="20px">
            The inventory has {data.length} molecules
          </Box>
        </Box>
      </>
    );
  }
};

export default InventoryPage;
