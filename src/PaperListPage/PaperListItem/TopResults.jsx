import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const TopResults = ({ paper }) => {
  let greenColor = useColorModeValue(
    "var(--chakra-colors-green-600)",
    "var(--chakra-colors-green-100)"
  );

  let productResults = {};
  let productSummaries = [];

  // loop over experimental data to find the products in data, the max titer, and number of each product
  if (paper.experimentalData) {
    paper.experimentalData.forEach((trial) => {
      if (Object.keys(productResults).includes(trial.product)) {
        productResults[trial.product] = [
          ...productResults[trial.product],
          trial,
        ];
      } else {
        // add the product key to the object
        productResults[trial.product] = [trial];
      }
    });

    productSummaries = Object.keys(productResults).map((product) => {
      let titers = productResults[product].map((trial) => {
        return parseFloat(trial.titer);
      });
      return {
        productName: product,
        numTrials: productResults[product].length,
        maxTiter: Math.max(...titers),
      };
    });

    // sort so that higher titers are displayed first
    productSummaries.sort((a, b) => (a.maxTiter > b.maxTiter ? -1 : 1));
  }

  return (
    <VStack
      minW="200px"
      maxW="200px"
      spacing="-2px"
      mt="3px"
      align="flex-start"
    >
      <Text fontSize="14px" mb="2px" opacity="0.8">
        Top Results:
      </Text>
      {productSummaries.map((product, index) => {
        if (index < 4) {
          return (
            <Text key={product.productName} fontSize="14px" noOfLines="1">
              {product.maxTiter} g/L{" "}
              <Link
                to={"/product/" + product.productName}
                className="product-name"
                style={{
                  color: greenColor,
                }}
              >
                {product.productName}
              </Link>{" "}
              ({product.numTrials} total)
            </Text>
          );
        }
      })}
    </VStack>
  );
};

export default TopResults;
