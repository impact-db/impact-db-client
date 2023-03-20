import { Text, VStack } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getProductArray } from "../Helpers/databaseHelpers";
import LoadingDots from "../loadingDots/LoadingDots";
import AddProductButton from "./AddProductButton";

const ProductList = () => {
  const { isLoading, data } = useQuery(["productArray"], () =>
    getProductArray()
  );

  let productArray = data;

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
          {productArray.map((product) => {
            return <Text>{product.name}</Text>;
          })}
        </VStack>
      </>
    );
  }
};

export default ProductList;
