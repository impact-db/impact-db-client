import { Button, Heading, Spacer, Text, VStack } from "@chakra-ui/react";

const InventorySection = () => {
  return (
    <VStack id="about" w="100vw" px="20px" py="40px" align="center">
      <VStack w="100%" maxW="1000px" m="auto" px="20px">
        <Heading textAlign="center">Molecular Inventory</Heading>
        <Spacer minH="10px" />
        <Text textAlign="justify" maxW="800px" opacity="0.8">
          As we strive to develop machine learning algorithms for bioprocess
          fermentations, we often encounter data involving numerous substrates
          and products. Instead of employing the individual names of these
          molecules for classification, we find it more practical to utilize
          their inherent properties for model training. These properties,
          independent of specific fermentation details, can be stored in a
          standalone database apart from the fermentation results database. We
          refer to this database as the Molecular Inventory, which is now
          available for download to expedite your machine learning model
          development efforts.
        </Text>
        <Spacer minH="4px" />
        <a href="https://garrettroell.com/molecular-inventory">
          <Button size="lg" fontSize="16px" bg="green.100" color="gray.800">
            Download the inventory now
          </Button>
        </a>
      </VStack>
    </VStack>
  );
};

export default InventorySection;
