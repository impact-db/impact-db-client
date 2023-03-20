import { useColorModeValue, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useFirebaseAuthentication } from "../../Auth/auth";
import StrainDetails from "./StrainDetails";
import TopBar from "./TopBar";

const StrainListItem = ({
  strain,
  dataType,
  isLargerThan700,
  onHomePage = false,
}) => {
  const currentUser = useFirebaseAuthentication();
  const [showDetails, setShowDetails] = useState(onHomePage ? true : false);
  let greenColor = useColorModeValue(
    "var(--chakra-colors-green-600)",
    "var(--chakra-colors-green-100)"
  );

  // determine if the user who added the paper to database is logged in
  let creatorLoggedIn = false;
  if (onHomePage) {
    // pass
  } else if (
    (currentUser && currentUser.email === "tang.wustl.edu@gmail.com") ||
    (currentUser && currentUser.email === strain.sourceEmail)
  ) {
    creatorLoggedIn = true;
  }

  return (
    <>
      <VStack
        w="100%"
        maxW="860px"
        borderWidth="1px"
        borderRadius="6px"
        mb="10px"
        px="30px"
        pt="7px"
        pb={showDetails ? "16px" : "7px"}
        borderColor={creatorLoggedIn ? greenColor : ""}
        id="a"
      >
        <TopBar
          strain={strain}
          dataType={dataType}
          showDetails={showDetails}
          setShowDetails={setShowDetails}
          creatorLoggedIn={creatorLoggedIn}
          onHomePage={onHomePage}
          isLargerThan700={isLargerThan700}
        />
        {/* if the detais are open then show the details */}
        {showDetails && (
          <StrainDetails strain={strain} isLargerThan700={isLargerThan700} />
        )}
      </VStack>
    </>
  );
};

export default StrainListItem;
