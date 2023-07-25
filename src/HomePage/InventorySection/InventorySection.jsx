import { Button, Heading, Spacer, Text, VStack } from "@chakra-ui/react";

const InventorySection = () => {
  return (
    <VStack id="about" w="100vw" px="20px" py="40px" align="center">
      <VStack w="100%" maxW="1000px" m="auto" px="20px">
        <Heading textAlign="center">Molecular Inventory</Heading>
        <Spacer minH="10px" />
        <Text textAlign="justify" maxW="800px" opacity="0.8">
          Machine learning models used for industrial biological processes must
          work with various types of fermentations, utilizing many types of
          carbon sources to create a wide range of products. Training these
          models with the properties of molecules rather than their names allows
          predictions to be made with carbon sources and products not included
          in the training data. These molecular characteristics do not vary
          across fermentations, so they can be kept in a separate database. This
          database, which we call the Molecular Inventory, can now be downloaded
          for free by researchers working on developing machine learning
          approaches for biological processes.
        </Text>
        <Spacer minH="4px" />
        <a href="/inventory">
          <Button size="lg" fontSize="16px" bg="green.100" color="gray.800">
            View the current inventory
          </Button>
        </a>
      </VStack>
    </VStack>
  );
};

export default InventorySection;
