import { Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getProductArray } from "../Helpers/databaseHelpers";
import LoadingDots from "../loadingDots/LoadingDots";
import AddProductButton from "./AddProductButton";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { isLoading, data } = useQuery(["productArray"], () =>
    getProductArray(),
  );
  let greenColor = useColorModeValue(
    "var(--chakra-colors-green-600)",
    "var(--chakra-colors-green-100)",
  );

  let productArray = data;

  console.log(productArray);

  if (isLoading) {
    return (
      <>
        <LoadingDots />
      </>
    );
  } else {
    return (
      <>
        <VStack align="flex-start" maxW="860px">
          <AddProductButton />
          {productArray.map((product, index) => {
            return (
              <Link
                to={"/product/" + product.name}
                className="product-name"
                style={{
                  color: greenColor,
                }}
                key={index}
              >
                {product.name}
              </Link>
            );
          })}
        </VStack>
      </>
    );
  }
};

export default ProductList;
