import NavBar from "../NavBar/NavBar";
import LoadingDots from "../loadingDots/LoadingDots";
import {
  Box,
  Heading,
  Spacer,
  Button,
  HStack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { getInventory, downloadInventoryCSV } from "../Helpers/databaseHelpers";
import { useQuery } from "@tanstack/react-query";
import ReportIssueFormInventory from "./ReportIssueForm";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@chakra-ui/icons";

const InventoryPage = () => {
  let headingColor = useColorModeValue("green.600", "green.100");

  // get either cached or new molecular inventory data
  const { isLoading, data } = useQuery(["inventory"], ({ queryKey }) =>
    getInventory()
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <Box maxW="900px" pl="20px">
            <Box mb="20px">
              <Link to={"/"}>
                <HStack spacing="4px">
                  <ArrowBackIcon opacity="0.8" />
                  <Text fontSize="14px" opacity="0.8">
                    Home page
                  </Text>
                </HStack>
              </Link>
            </Box>

            <HStack w="full" justifyContent="space-between" mt="5px" mb="20px">
              <Heading fontSize="20px" mt="5px" mb="20px" color={headingColor}>
                Molecular Inventory
              </Heading>

              <HStack>
                <Button
                  bg="green.100"
                  color="gray.800"
                  size="sm"
                  onClick={() => downloadInventoryCSV(data)}
                >
                  Download Data
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  opacity="0.8"
                  onClick={onOpen}
                >
                  Report an issue
                </Button>
              </HStack>
              <Modal
                isCentered
                isOpen={isOpen}
                onClose={onClose}
                motionPreset="slideInBottom"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Report an issue</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <ReportIssueFormInventory onClose={onClose} />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </HStack>
          </Box>
          <Box maxW="900px" px="20px" overflowX="auto">
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th>Product</Th>
                  <Th>Number of results in Yarrowia Database</Th>
                  <Th>Estimated M.W. of products</Th>
                  <Th>Product Delta G of formation</Th>
                  <Th>Central carbon precursor</Th>
                  <Th>Central carbon precursor Delta G of formation</Th>
                  <Th>Pathway enzymatic steps</Th>
                  <Th># precursors required</Th>
                  <Th>ATP cost</Th>
                  <Th>Cofactor cost</Th>
                  <Th># carbons in product</Th>
                  <Th># hydrogens in product</Th>
                  <Th># oxygens in product</Th>
                  <Th># nitrogens in product</Th>
                  <Th>Theoretical Yield(mol Product/mol Glucose)</Th>
                  <Th>solubility g/L(25C)</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((item, index) => (
                  <Tr key={index}>
                    <Td fontSize="sm">{item.Product}</Td>
                    <Td fontSize="sm">{item.num_yarrowia_results}</Td>
                    <Td fontSize="sm">{item.molecularWeight}</Td>
                    <Td fontSize="sm">{item.deltaGFormation}</Td>
                    <Td fontSize="sm">{item.precursors}</Td>
                    <Td fontSize="sm">{item.precursorDeltaGFormation}</Td>
                    <Td fontSize="sm">{item.numberEnzymaticSteps}</Td>
                    <Td fontSize="sm">{item.numberPrecursorsRequired}</Td>
                    <Td fontSize="sm">{item.ATPCost}</Td>
                    <Td fontSize="sm">{item.CofactorCost}</Td>
                    <Td fontSize="sm">{item.NumCarbons}</Td>
                    <Td fontSize="sm">{item.numHydrogens}</Td>
                    <Td fontSize="sm">{item.numOxygens}</Td>
                    <Td fontSize="sm">{item.numNitrogens}</Td>
                    <Td fontSize="sm">{item.TheoreticalYieldPerMolGlucose}</Td>
                    <Td fontSize="sm">{item.solubilityGPerL}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </Box>
      </>
    );
  }
};

export default InventoryPage;
