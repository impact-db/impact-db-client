import { AddIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Select,
  Spacer,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { getAutofillObject } from "../Helpers/getAutofillObject";
import { getCarbonSourceInfo } from "../Helpers/getCarbonSourceInfo";
import { getGeneInfo } from "../Helpers/getGeneInfo";
import { getProductInfo } from "../Helpers/getProductInfo";
import { isNumeric } from "../Helpers/stringHelpers";
import KnockOutSection from "./KnockOutSection";
import TiterPredictionDetails from "./TiterPredictionDetails";

const PredictTitersForm = () => {
  const carbonSourceInfo = getCarbonSourceInfo();
  const productInfo = getProductInfo();
  const geneInfo = getGeneInfo();

  const [predictionInfo, setPredictionInfo] = useState(null);

  const [organism, setOrganism] = useState("Yarrowia");

  const [carbonSource, setCarbonSource] = useState("Glucose");

  const [carbonSourceMW, setCarbonSourceMW] = useState(
    carbonSourceInfo["Glucose"]["molecular_weight"]
  );
  const [carbonSourceHC, setCarbonSourceHC] = useState(
    carbonSourceInfo["Glucose"]["heat_of_combustion"]
  );
  const [productName, setProductName] = useState("Astaxanthin");
  const [productMW, setProductMW] = useState(
    productInfo["Astaxanthin"]["molecular_weight"]
  );
  const [productDeltaG, setProductDeltaG] = useState(
    productInfo["Astaxanthin"]["delta_g"]
  );
  const [productATPCost, setProductATPCost] = useState(
    productInfo["Astaxanthin"]["atp_cost"]
  );
  const [productNADHCost, setProductNADHCost] = useState(
    productInfo["Astaxanthin"]["nadh_cost"]
  );
  const [productPathwaySteps, setProductPathwaySteps] = useState(
    productInfo["Astaxanthin"]["pathway_steps"]
  );
  const [productPrecursors, setProductPrecursors] = useState(
    productInfo["Astaxanthin"]["precursors"]
  );
  const [productPrecursorCoefficients, setProductPrecursorCoefficients] =
    useState(productInfo["Astaxanthin"]["precursor_coefficients"]);

  const [productPrecursorDeltaGs, setProductPrecursorDeltaGs] = useState(
    productInfo["Astaxanthin"]["precursor_delta_g_values"]
  );

  const [media, setMedia] = useState("rich");
  const [pH, setpH] = useState(0);

  // variables for genetic background strings
  const [knockedOutGenes, setKnockedOutGenes] = useState(
    "YALI0B15598g;YALI0C06369g;YALI0E02684g"
  );
  const [overexpressedGenes, setOverexpressedGenes] = useState("");
  const [heterologousGenes, setHeterologousGenes] = useState("a;b;c");

  // handle gene form state
  const [showKnockOutForm, setShowKnockOutForm] = useState(false);
  const [showOverexpressedForm, setShowOverexpressedForm] = useState(false);
  const [showHeterologousForm, setShowHeterologousForm] = useState(false);

  const organisms = ["Yarrowia"];
  const mediaOptions = ["Rich", "Intermediate", "Minimal"];
  const pHOptions = [0, 4, 5, 6, 7, 8, 9, 10];

  function validateCarbonSourceConc(value) {
    let error;
    if (!value) {
      error = "Concentration of the substrate is required";
    }
    return error;
  }

  function validateVolume(value) {
    let error;
    if (!value) {
      error = "Culture volume is required";
    }
    if (value && !isNumeric(value)) {
      error = "Fermentation volume is required to be a numeric value";
    }
    return error;
  }

  function validateTime(value) {
    let error;
    if (!value) {
      error = "Fermentation time is required";
    }
    if (value && !isNumeric(value)) {
      error = "Fermentation time is required to be a numeric value";
    }
    return error;
  }

  function validateCarbonSourceMW(value) {
    let error;
    if (!value && !carbonSourceMW) {
      error = "Molecular weight of the substrate is required";
    }
    return error;
  }

  function validateHeatOfCombustion(value) {
    let error;
    if (!value && !carbonSourceHC) {
      error = "Heat of combustion of the substrate is required";
    }
    return error;
  }

  function validateProductMW(value) {
    let error;
    if (!value && !productMW) {
      error = "Molecular weight of the product is required";
    }
    return error;
  }

  function validateProductDeltaG(value) {
    let error;
    if (!value && !productMW) {
      error = "The delta G of formation of the product is required";
    }
    return error;
  }

  function validateProductATPCost(value) {
    let error;
    if (!value && !productATPCost) {
      error = "ATP cost of the product is required";
    }
    return error;
  }

  function validateProductNADHCost(value) {
    let error;
    if (!value && !productNADHCost) {
      error = "NADH/NADPH cost of the product is required";
    }
    return error;
  }

  function validateProductPathwaySteps(value) {
    let error;
    if (!value && !productPathwaySteps) {
      error = "The number of enzymatic steps to make the product is required";
    }
    return error;
  }

  function validateProductPrecursors(value) {
    let error;
    if (!value && !productPrecursors) {
      error = "The precursors of the product is required";
    }
    return error;
  }

  function validateProductPrecursorCoefficients(value) {
    let error;
    if (!value && !productPrecursorCoefficients) {
      error = "The precursor coefficients of the product are required";
    }
    return error;
  }

  function validateProductPrecursorDeltaGs(value) {
    let error;
    if (!value && !productPrecursorDeltaGs) {
      error = "The precursor coefficients of the product are required";
    }
    return error;
  }

  function getModifiedGeneString() {
    // create modified gene array
    let modifiedGenes = [
      ...knockedOutGenes.split(";"),
      ...overexpressedGenes.split(";"),
      ...heterologousGenes.split(";"),
    ];

    modifiedGenes = modifiedGenes.filter((geneId) => geneId !== "");

    return modifiedGenes.join(";");
  }

  function getOneOrZeroArrays(geneType, value) {
    if (geneType === "knockedOut") {
      if (knockedOutGenes === "") {
        return [];
      } else {
        return knockedOutGenes.split(";").map(() => value);
      }
    }

    if (geneType === "overexpressed") {
      if (overexpressedGenes === "") {
        return [];
      } else {
        return overexpressedGenes.split(";").map(() => value);
      }
    }

    if (geneType === "heterologous") {
      if (heterologousGenes === "") {
        return [];
      } else {
        return heterologousGenes.split(";").map(() => value);
      }
    }
  }

  function getIsKnockedOutString() {
    const isKnockedOutString = [
      ...getOneOrZeroArrays("knockedOut", "1"),
      ...getOneOrZeroArrays("overexpressed", "0"),
      ...getOneOrZeroArrays("heterologous", "0"),
    ].join(";");

    return isKnockedOutString;
  }

  function getIsOverexpressedString() {
    const isOverexpressedString = [
      ...getOneOrZeroArrays("knockedOut", "0"),
      ...getOneOrZeroArrays("overexpressed", "1"),
      ...getOneOrZeroArrays("heterologous", "0"),
    ].join(";");

    return isOverexpressedString;
  }

  function getIsHeterologousString() {
    const isHeterologousString = [
      ...getOneOrZeroArrays("knockedOut", "0"),
      ...getOneOrZeroArrays("overexpressed", "0"),
      ...getOneOrZeroArrays("heterologous", "1"),
    ].join(";");

    return isHeterologousString;
  }

  return (
    <Box maxW="450px" mx="auto" my="40px" px="20px">
      <Formik
        initialValues={{
          carbonSourceConc: "20",
          volume: "0.050",
          time: "120",
        }}
        onSubmit={async (values, actions) => {
          // clear displayed prediction data
          setPredictionInfo(null);

          // create object for machine learning input
          const mlInput = {
            ...values,
            organism: organism,
            // bioprocess conditions
            pH: pH,
            media: media,
            foldCarbonFed: 0,
            time: values.time,
            reactorVolume: values.volume,
            // carbon source info (can add a second carbon source)
            carbonSource: carbonSource,
            carbonSourceMW: carbonSourceMW,
            carbonSourceHC: carbonSourceHC,
            // product info
            productName: productName,
            productMW: productMW,
            productDeltaG: productDeltaG,
            productATPCost: productATPCost,
            productNADHCost: productNADHCost,
            productPathwaySteps: productPathwaySteps,
            // precursor info
            precursorString: productPrecursors,
            precursorCoefficientString: productPrecursorCoefficients,
            precursorDeltaGString: productPrecursorDeltaGs,
            // genetic background
            modifiedGenesString: getModifiedGeneString(),
            isKnockedOutString: getIsKnockedOutString(),
            isOverexpressedString: getIsOverexpressedString(),
            isHeterologousString: getIsHeterologousString(),
          };

          let url;

          if (import.meta.env.MODE === "development") {
            url = "http://127.0.0.1:8080";
            // url =
            //   "https://us-central1-impact-db.cloudfunctions.net/predict_titer_endpoint";
          } else {
            url =
              "https://us-central1-impact-db.cloudfunctions.net/predict_titer_endpoint";
          }

          const options = {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(mlInput),
          };

          await fetch(url, options)
            .then((response) => {
              response
                .json()
                .then((_predictionInfo) => {
                  setPredictionInfo(_predictionInfo);
                })
                .catch((e) => {
                  console.log("error 1", e);
                });
            })
            .catch((e) => {
              console.log("error 2", e);
            });

          actions.setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            {/* Organism selector */}
            <FormLabel pl="8px">Organism:</FormLabel>
            <Select
              placeholder=""
              onChange={(e) => {
                const newOrganism = e.target.value;
                setOrganism(newOrganism);
              }}
            >
              {organisms.map((organism, index) => {
                return (
                  <option value={organism} key={index}>
                    {organism}
                  </option>
                );
              })}
            </Select>

            <Spacer h="30px" />

            <Heading
              fontSize="20px"
              pb="8px"
              mb="20px"
              ml="8px"
              borderBottom="1px solid"
            >
              Carbon Source
            </Heading>

            {/* Carbon source section */}
            <Field name="carbonSourceConc" validate={validateCarbonSourceConc}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.carbonSourceConc &&
                    form.touched.carbonSourceConc
                  }
                >
                  <FormLabel pl="8px">
                    Carbon source concentration (g/L):
                  </FormLabel>
                  <Input
                    {...field}
                    p="8px"
                    pl="16px"
                    _autofill={getAutofillObject()}
                    // autoFocus
                  />
                  <FormErrorMessage>
                    {form.errors.carbonSourceConc}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Spacer h="8px" />

            {/* Carbon source selector */}
            <FormLabel pl="8px">Carbon source:</FormLabel>
            <Select
              placeholder=""
              onChange={(e) => {
                const newCarbonSource = e.target.value;

                setCarbonSource(newCarbonSource);

                if (Object.keys(carbonSourceInfo).includes(newCarbonSource)) {
                  const newMolecularWeight =
                    carbonSourceInfo[newCarbonSource]["molecular_weight"];
                  setCarbonSourceMW(newMolecularWeight);

                  const newHeatOfCombustion =
                    carbonSourceInfo[newCarbonSource]["heat_of_combustion"];
                  setCarbonSourceHC(newHeatOfCombustion);
                }
              }}
            >
              {Object.keys(carbonSourceInfo).map((carbonSource, index) => {
                return (
                  <option value={carbonSource} key={index}>
                    {carbonSource}
                  </option>
                );
              })}
            </Select>

            <Spacer h="4px" />

            {/* show/hide carbon source details */}
            <Accordion allowToggle>
              <AccordionItem borderColor="transparent">
                <AccordionButton h="30px" px="9px">
                  <Box flex="1" textAlign="left" fontSize="13px" opacity="0.7">
                    Show carbon source details
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel p="0px" mt="8px">
                  {/* Carbon source molecular weight */}
                  <Field
                    name="carbonSourceMW"
                    validate={validateCarbonSourceMW}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.carbonSourceMW &&
                          form.touched.carbonSourceMW
                        }
                      >
                        <FormLabel pl="8px" opacity="0.5">
                          Carbon source molecular weight (g/mol):
                        </FormLabel>
                        <Input
                          {...field}
                          value={carbonSourceMW}
                          placeholder="Will be autofilled when carbon source is selected"
                          p="8px"
                          pointerEvents="none"
                          disabled
                        />
                        <FormErrorMessage>
                          {form.errors.carbonSourceMW}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Spacer h="8px" />

                  {/* Carbon source heat of combustion */}
                  <Field
                    name="carbonSourceHC"
                    validate={validateHeatOfCombustion}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.carbonSourceHC &&
                          form.touched.carbonSourceHC
                        }
                      >
                        <FormLabel pl="8px" opacity="0.5">
                          Carbon source heat of combustion (kJ/mol):
                        </FormLabel>
                        <Input
                          {...field}
                          value={carbonSourceHC}
                          placeholder="Will be autofilled when carbon source is selected"
                          p="8px"
                          pointerEvents="none"
                          disabled
                        />
                        <FormErrorMessage>
                          {form.errors.carbonSourceHC}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Spacer h="30px" />

            <Heading
              fontSize="20px"
              pb="8px"
              mb="20px"
              ml="8px"
              borderBottom="1px solid"
            >
              Product
            </Heading>

            {/* product section */}
            <FormLabel pl="8px">Product:</FormLabel>

            {/* Product Selector */}
            <Select
              placeholder=""
              onChange={(e) => {
                const newProduct = e.target.value;
                if (Object.keys(productInfo).includes(newProduct)) {
                  setProductName(newProduct);

                  const newMolecularWeight =
                    productInfo[newProduct]["molecular_weight"];
                  setProductMW(newMolecularWeight);

                  const newDeltaG = productInfo[newProduct]["delta_g"];
                  setProductDeltaG(newDeltaG);

                  const newATPCost = productInfo[newProduct]["atp_cost"];
                  setProductATPCost(newATPCost);

                  const newNADHCost = productInfo[newProduct]["nadh_cost"];
                  setProductNADHCost(newNADHCost);

                  const newPathwaySteps =
                    productInfo[newProduct]["pathway_steps"];
                  setProductPathwaySteps(newPathwaySteps);

                  const newPrecursors = productInfo[newProduct]["precursors"];
                  setProductPrecursors(newPrecursors);

                  const newPrecursorCoefficients =
                    productInfo[newProduct]["precursor_coefficients"];
                  setProductPrecursorCoefficients(newPrecursorCoefficients);

                  const newPrecursorDeltaGs =
                    productInfo[newProduct]["precursor_delta_g_values"];
                  setProductPrecursorDeltaGs(newPrecursorDeltaGs);
                }
              }}
            >
              {Object.keys(productInfo).map((product, index) => {
                return (
                  <option value={product} key={index}>
                    {product}
                  </option>
                );
              })}
            </Select>

            <Spacer h="8px" />

            {/* show/hide product details */}
            <Accordion allowToggle>
              <AccordionItem borderColor="transparent">
                <AccordionButton h="30px" px="9px">
                  <Box flex="1" textAlign="left" fontSize="13px" opacity="0.7">
                    Show product details
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4}>
                  {/* Product Molecular Weight */}
                  <Field name="productMW" validate={validateProductMW}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.productMW && form.touched.productMW
                        }
                      >
                        <FormLabel pl="8px" opacity="0.5">
                          Product molecular weight (g/mol):
                        </FormLabel>
                        <Input
                          {...field}
                          value={productMW}
                          placeholder="Will be autofilled when carbon source is selected"
                          p="8px"
                          pointerEvents="none"
                          disabled
                        />
                        <FormErrorMessage>
                          {form.errors.productMW}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Spacer h="8px" />

                  {/* Product Delta G */}
                  <Field name="productDeltaG" validate={validateProductDeltaG}>
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.productDeltaG &&
                          form.touched.productDeltaG
                        }
                      >
                        <FormLabel pl="8px" opacity="0.5">
                          Product ΔG (kJ/mol):
                        </FormLabel>
                        <Input
                          {...field}
                          value={productDeltaG}
                          placeholder="Will be autofilled when carbon source is selected"
                          p="8px"
                          pointerEvents="none"
                          disabled
                        />
                        <FormErrorMessage>
                          {form.errors.productDeltaG}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Spacer h="8px" />

                  {/* Product ATP Cost */}
                  <Field
                    name="productATPCost"
                    validate={validateProductATPCost}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.productATPCost &&
                          form.touched.productATPCost
                        }
                      >
                        <FormLabel pl="8px" opacity="0.5">
                          Product ATP cost:
                        </FormLabel>
                        <Input
                          {...field}
                          value={productATPCost}
                          placeholder="Will be autofilled when carbon source is selected"
                          p="8px"
                          pointerEvents="none"
                          disabled
                        />
                        <FormErrorMessage>
                          {form.errors.productATPCost}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Spacer h="8px" />

                  {/* Product NADH/NADPH Cost */}
                  <Field
                    name="productNADHCost"
                    validate={validateProductNADHCost}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.productNADHCost &&
                          form.touched.productNADHCost
                        }
                      >
                        <FormLabel pl="8px" opacity="0.5">
                          Product NADH/NADPH cost:
                        </FormLabel>
                        <Input
                          {...field}
                          value={productNADHCost}
                          placeholder="Will be autofilled when carbon source is selected"
                          p="8px"
                          pointerEvents="none"
                          disabled
                        />
                        <FormErrorMessage>
                          {form.errors.productNADHCost}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Spacer h="8px" />

                  {/* Product pathway steps */}
                  <Field
                    name="productPathwaySteps"
                    validate={validateProductPathwaySteps}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.productPathwaySteps &&
                          form.touched.productPathwaySteps
                        }
                      >
                        <FormLabel pl="8px" opacity="0.5">
                          Product pathway steps:
                        </FormLabel>
                        <Input
                          {...field}
                          value={productPathwaySteps}
                          placeholder="Will be autofilled when carbon source is selected"
                          p="8px"
                          pointerEvents="none"
                          disabled
                        />
                        <FormErrorMessage>
                          {form.errors.productPathwaySteps}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Spacer h="8px" />

                  {/* Product precursors */}
                  <Field
                    name="productPrecursors"
                    validate={validateProductPrecursors}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.productPrecursors &&
                          form.touched.productPrecursors
                        }
                      >
                        <FormLabel pl="8px" opacity="0.5">
                          Product precursors:
                        </FormLabel>
                        <Input
                          {...field}
                          value={productPrecursors}
                          placeholder="Will be autofilled when carbon source is selected"
                          p="8px"
                          pointerEvents="none"
                          disabled
                        />
                        <FormErrorMessage>
                          {form.errors.productPrecursors}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Spacer h="8px" />

                  {/* Product precursor coefficient */}
                  <Field
                    name="productPrecursorCoefficients"
                    validate={validateProductPrecursorCoefficients}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.productPrecursorCoefficients &&
                          form.touched.productPrecursorCoefficients
                        }
                      >
                        <FormLabel pl="8px" opacity="0.5">
                          Product precursor coefficients:
                        </FormLabel>
                        <Input
                          {...field}
                          value={productPrecursorCoefficients}
                          placeholder="Will be autofilled when carbon source is selected"
                          p="8px"
                          pointerEvents="none"
                          disabled
                        />
                        <FormErrorMessage>
                          {form.errors.productPrecursorCoefficients}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>

                  <Spacer h="8px" />

                  {/* Product precursor delta G values */}
                  <Field
                    name="productPrecursorCoefficients"
                    validate={validateProductPrecursorDeltaGs}
                  >
                    {({ field, form }) => (
                      <FormControl
                        isInvalid={
                          form.errors.productPrecursorDeltaGs &&
                          form.touched.productPrecursorDeltaGs
                        }
                      >
                        <FormLabel pl="8px" opacity="0.5">
                          Product precursor coefficient ΔG values:
                        </FormLabel>
                        <Input
                          {...field}
                          value={productPrecursorDeltaGs}
                          placeholder="Will be autofilled when carbon source is selected"
                          p="8px"
                          pointerEvents="none"
                          disabled
                        />
                        <FormErrorMessage>
                          {form.errors.productPrecursorDeltaGs}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <Spacer h="30px" />

            <Heading
              fontSize="20px"
              pb="8px"
              mb="20px"
              ml="8px"
              borderBottom="1px solid"
            >
              Bioprocess Conditions
            </Heading>

            {/* Media selector */}
            <FormLabel pl="8px">Media:</FormLabel>
            <Select
              placeholder=""
              onChange={(e) => {
                const newMedia = e.target.value;
                setMedia(newMedia);
              }}
            >
              {mediaOptions.map((media, index) => {
                return (
                  <option value={media} key={index}>
                    {media}
                  </option>
                );
              })}
            </Select>

            <Spacer h="8px" />

            {/* pH selector */}
            <FormLabel pl="8px">pH:</FormLabel>
            <Select
              placeholder="0"
              onChange={(e) => {
                const newpH = e.target.value;
                setpH(newpH);
              }}
            >
              {pHOptions.map((pH, index) => {
                return (
                  <option value={pH} key={index}>
                    {pH}
                  </option>
                );
              })}
            </Select>

            <Spacer h="8px" />

            {/* Carbon source section */}
            <Field name="volume" validate={validateVolume}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.volume && form.touched.volume}
                >
                  <FormLabel pl="8px">Culture volume (L):</FormLabel>
                  <Input {...field} p="8px" _autofill={getAutofillObject()} />
                  <FormErrorMessage>{form.errors.volume}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Spacer h="8px" />

            {/* time section */}
            <Field name="time" validate={validateTime}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.time && form.touched.time}>
                  <FormLabel pl="8px">Fermentation time (hrs):</FormLabel>
                  <Input {...field} p="8px" _autofill={getAutofillObject()} />
                  <FormErrorMessage>{form.errors.time}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Spacer h="30px" />

            <Heading
              fontSize="20px"
              pb="8px"
              mb="20px"
              ml="8px"
              borderBottom="1px solid"
            >
              Genetic Background
            </Heading>

            {/* knocked out genes */}
            <KnockOutSection
              geneInfo={geneInfo}
              knockedOutGenes={knockedOutGenes}
              setKnockedOutGenes={setKnockedOutGenes}
              showKnockOutForm={showKnockOutForm}
              setShowKnockOutForm={setShowKnockOutForm}
            />

            <Spacer h="20px" />

            {/* overexpressed genes */}
            <FormLabel pl="8px">Overexpressed genes</FormLabel>
            <Tooltip hasArrow label="Under development">
              <Button
                h="28px"
                w="85%"
                mt="10px"
                borderWidth="1px"
                borderRadius="6px"
              >
                <HStack>
                  <AddIcon h="10px" w="10px" />
                  <Text fontSize="13px">Add an overexpressed gene</Text>
                </HStack>
              </Button>
            </Tooltip>

            <Spacer h="20px" />

            {/* heterologus genes */}
            <FormLabel pl="8px">Heterologous genes</FormLabel>
            <Tooltip hasArrow label="Under development">
              <Button
                h="28px"
                w="85%"
                mt="10px"
                borderWidth="1px"
                borderRadius="6px"
              >
                <HStack>
                  <AddIcon h="10px" w="10px" />
                  <Text fontSize="13px">Add a heterologous gene</Text>
                </HStack>
              </Button>
            </Tooltip>

            <Spacer h="20px" />

            <Button
              mt={4}
              mb="16px"
              bg="green.100"
              color="gray.800"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Predict titer
            </Button>
            <TiterPredictionDetails
              predictionInfo={predictionInfo}
              productName={productName}
            />
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PredictTitersForm;
