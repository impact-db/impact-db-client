import { Tab, TabList, Tabs, useColorModeValue } from "@chakra-ui/react";

const DataTypeTabs = ({ dataType, setDataType }) => {
  return (
    <Tabs variant="unstyled">
      <TabList h="32px">
        <Tab
          w="100px"
          onClick={() => {
            setDataType("titer");
          }}
          color={
            dataType === "titer" ? useColorModeValue("white", "black") : ""
          }
          bg={dataType === "titer" ? "green.400" : ""}
          borderWidth="1px"
          borderRightWidth="0px"
          borderLeftRadius="6px"
        >
          Titer
        </Tab>
        <Tab
          w="100px"
          onClick={() => {
            setDataType("rate");
          }}
          color={dataType === "rate" ? useColorModeValue("white", "black") : ""}
          bg={dataType === "rate" ? "green.400" : ""}
          borderWidth="1px"
        >
          Rate
        </Tab>
        <Tab
          w="100px"
          onClick={() => {
            setDataType("yield");
          }}
          color={
            dataType === "yield" ? useColorModeValue("white", "black") : ""
          }
          bg={dataType === "yield" ? "green.400" : ""}
          borderWidth="1px"
          borderLeftWidth="0px"
          borderRightRadius="6px"
        >
          Yield
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default DataTypeTabs;
