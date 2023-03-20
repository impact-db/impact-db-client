import { Spacer, Text } from "@chakra-ui/react";

const TiterPredictionDetails = ({ predictionInfo, productName }) => {
  // handle the rendering of an error
  if (predictionInfo && Object.keys(predictionInfo).includes("error")) {
    return (
      <>
        <Text>Error: {predictionInfo.error}</Text>
      </>
    );
  } else if (predictionInfo) {
    return (
      <>
        <Text fontWeight="bold" fontSize="17px">
          Predicted titer: {predictionInfo.predicted_titer.toFixed(7)} g/L{" "}
          {productName.toLowerCase()}
        </Text>

        <Spacer minH="20px" />
        {/* product formation */}
        <Text>Product Formation Reaction:</Text>
        <Text>
          {predictionInfo.product_formation_reaction.replace(
            "product_metabolite",
            productName.toLowerCase()
          )}
        </Text>

        <Spacer minH="20px" />
        {/* FBA information */}
        <Text>ATP Flux: {predictionInfo.atp_flux.toFixed(7)}</Text>
        <Text>NADPH Flux: {predictionInfo.nadph_flux.toFixed(7)}</Text>
        <Text>
          Pentose Phosphate Flux: {predictionInfo.ppp_flux.toFixed(7)}
        </Text>
        <Text>TCA Flux: {predictionInfo.tca_flux.toFixed(7)}</Text>
        <Text>Product Yield: {predictionInfo.product_yield.toFixed(7)}</Text>
      </>
    );
  } else {
    return <></>;
  }
};

export default TiterPredictionDetails;
