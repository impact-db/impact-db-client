import { HStack, Stack, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { convertToSlug } from "../../Helpers/stringHelpers";
import DeleteStrainButton from "../StrainListItemButtons/DeleteStrainButton";
import EditStrainButton from "../StrainListItemButtons/EditStrainButton";
import ControlButtons from "./ControlButtons";

const TopBar = ({
  strain,
  dataType,
  showDetails,
  setShowDetails,
  creatorLoggedIn,
  onHomePage,
  isLargerThan700,
  page
}) => {
  let navigate = useNavigate();

  const rowOrCol = isLargerThan700 ? "row" : "column";

  let value;
  switch (dataType) {
    case "titer":
      value = `${strain.titer} g/L`;
      break;
    case "rate":
      value = `${strain.maximumRate} g/L/hr`;
      break;
    case "yield":
      value = `${strain.yield} g/gCarbon`;
      break;
    default:
      console.log("unknown data type");
  }

  return (
    <Stack
      direction={rowOrCol}
      w="100%"
      justify="space-between"
      cursor="pointer"
      spacing="20px"
      onClick={(e) => {
        // This code is needed since the link is behind the button to show the strain details
        if (e.target.tagName === "A") {
          navigate("/product/" + convertToSlug(strain.product), {
            replace: true,
          });
          // don't open or close details if edit, delete, or duplicate buttons are clicked
        } else if (
          e.target.tagName !== "BUTTON" &&
          e.target.innerText !== "duplicate strain"
        ) {
          setShowDetails(!showDetails);
        }
      }}
    >
      {/* fermentation stat and unit */}
      <HStack w="100%" justify="space-between">
        <HStack>
          <Text textAlign="start">{value}</Text>
          <Link to={"/product/" + convertToSlug(strain.product)}>
            <Text _hover={{ textDecoration: "underline" }}>
              {strain.product}
            </Text>
          </Link>
        </HStack>
        {/* only show control buttons here if smaller than 700px */}
        {!isLargerThan700 && (
          <ControlButtons
            strain={strain}
            onHomePage={onHomePage}
            showDetails={showDetails}
            setShowDetails={setShowDetails}
            page = {page}
          />
        )}
      </HStack>

      {/* species and strain name */}
      <HStack
        // justify={isLargerThan700 ? "flex-end" : "space-between"}
        justify="space-between"
        w="100%"
      >
        <Text>
          {strain.species} {strain.parentStrain} {strain.engineeredStrain}
        </Text>

        {/* button section */}
        <HStack>
          {/* edit and delete buttons */}
          {creatorLoggedIn && page === "paper" && (
            <HStack h="20px" w="150px">
              <EditStrainButton strain={strain} />
              <Text>|</Text>
              <DeleteStrainButton strain={strain} />
            </HStack>
          )}

          {/* only show control buttons here if larger than 700*/}
          {isLargerThan700 && (
            <ControlButtons
              strain={strain}
              onHomePage={onHomePage}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
              page = {page}
            />
          )}
        </HStack>
      </HStack>
    </Stack>
  );
};

export default TopBar;
