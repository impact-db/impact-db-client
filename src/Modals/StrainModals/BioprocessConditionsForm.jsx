import {
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  ModalFooter,
  Radio,
  RadioGroup,
  Spacer,
  Text,
  Textarea,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { round } from "../../Helpers/helpers";
import { isNumeric } from "../../Helpers/stringHelpers";
import FormFieldDetail from "../Components/FormFieldDetail";

const BioprocessConditionsForm = ({
  setFormNum,
  strainData,
  setStrainData,
  submitButton,
}) => {
  // controlled inputs
  const [rateValue, setRateValue] = useState(strainData.averageRate);
  const [yieldValue, setYieldValue] = useState(strainData.yield);

  // multiple choice inputs
  const [oxygenValue, setOxygenValue] = useState(strainData.oxygenLevel);
  const [nitrogenValue, setNitrogenValue] = useState(strainData.nitrogenLevel);
  const [vesselValue, setVesselValue] = useState(strainData.vessel);

  // optional field controls
  // use custom maximum rate by default only if values are different
  const [maximumRateEqualsAverageRate, setMaximumRateEqualsAverageRate] =
    useState(strainData.maximumRate === strainData.averageRate);

  const autofillObject = {
    textFillColor: useColorModeValue("rgb(26, 32, 44)", "white"),
    boxShadow: "0 0 0px 1000px #00000000 inset",
    transition: "background-color 5000s ease-in-out 0s",
  };

  function validateProduct(value) {
    let error;
    if (!value) {
      error = "Product is required";
    }
    return error;
  }

  function validateTiter(value) {
    let error;
    if (!value) {
      error = "Titer is required";
    } else if (isNaN(value)) {
      error = "Titer is required to be a numeric value";
    }
    return error;
  }

  function validateMaximumRate(value) {
    let error;
    if (!value) {
      error = "Maximum rate is required";
    } else if (isNaN(value)) {
      error = "Maximum rate is required to be a numeric value";
    }
    return error;
  }

  function validateYield(value) {
    let error;
    // if (!value) {
    //   error = "Yield is required";
    // } else
    // if (value && !isNumeric(value)) {
    //   error = "Yield is required to be a numeric value";
    // }
    return error;
  }

  function validateVolume(value) {
    let error;
    //   if (!value) {
    //     error = "Volume is required";
    //   } else

    if (value && !isNumeric(value)) {
      error = "Volume is required to be a numeric value";
    }
    return error;
  }

  function validateSubstrate1(value) {
    let error;
    if (!value) {
      error = "At least one substrate is required";
    }
    return error;
  }

  function validateSubstrateConc1(value) {
    let error;
    if (!value) {
      error = "The concentration of the first carbon source is required";
    } else if (isNaN(value)) {
      error = "Concentration is required to be a numeric value";
    }
    return error;
  }

  function validateTime(value) {
    let error;
    if (!value) {
      error = "Time is required";
    } else if (isNaN(value)) {
      error = "Time is required to be a numeric value";
    }
    return error;
  }

  function validateTemperature(value) {
    let error;
    if (value && isNaN(value)) {
      error = "Temperature must be a numeric value";
    }
    return error;
  }

  function validatepH(value) {
    let error;
    if (value && isNaN(value)) {
      error = "pH must be a numeric value";
    }
    return error;
  }

  return (
    <Formik
      initialValues={strainData}
      onSubmit={(values, actions) => {
        actions.setSubmitting(false);
        values = {
          ...values,
          maximumRate: `${
            maximumRateEqualsAverageRate
              ? rateValue.toString()
              : values.maximumRate
          }`,
          averageRate: rateValue.toString(),
          yield: yieldValue.toString(),
          vessel: vesselValue,
          oxygenLevel: oxygenValue,
          nitrogenLevel: nitrogenValue,
        };

        // may need to change this to a loop over form data properties
        setStrainData(values);
        setFormNum(2);
      }}
    >
      {(props) => (
        <Form>
          <Spacer h="10px" />
          {/* product field */}
          <Field name="product" validate={validateProduct}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.product && form.touched.product}
              >
                <HStack align="center" spacing="0px" mb="8px">
                  <FormLabel htmlFor="product" my="auto">
                    Product
                  </FormLabel>
                  <FormFieldDetail text="Ex: citrate, succinate, b-carotene..." />
                </HStack>
                <Input
                  {...field}
                  id="product"
                  placeholder="Product"
                  _autofill={autofillObject}
                />
                <FormErrorMessage>{form.errors.product}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Spacer h="10px" />
          {/* titer field */}
          <Field name="titer" validate={validateTiter}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.titer && form.touched.titer}>
                <HStack align="center" spacing="0px" mb="8px">
                  <FormLabel htmlFor="titer" my="auto">
                    Titer (g/L)
                  </FormLabel>
                  <FormFieldDetail text="Titer = final product concentration" />
                </HStack>
                <Input
                  {...field}
                  id="titer"
                  placeholder="Titer"
                  _autofill={autofillObject}
                  onBlur={() => {
                    // get rate value

                    // get titer and time from formik props object
                    const titer = props.values.titer;
                    const time = props.values.time;

                    // if both titer and time are numeric, then calculate and set rate value
                    if (isNumeric(titer) && isNumeric(time)) {
                      const rate = titer / time;
                      setRateValue(round(rate, 4));
                    }

                    // define variables for yield calculation
                    let totalSubstrateConc = 0;
                    const substrateConc1 = props.values.substrateConc1;
                    const substrateConc2 = props.values.substrateConc2;

                    // if there is a value for a substrate then add it to the total substrate concentration
                    if (isNumeric(substrateConc1)) {
                      totalSubstrateConc += parseFloat(substrateConc1);
                    }
                    if (isNumeric(substrateConc2)) {
                      totalSubstrateConc += parseFloat(substrateConc2);
                    }

                    // if there is a substrate then calculate and set the yield
                    if (isNumeric(titer) && totalSubstrateConc > 0) {
                      const _yield = titer / totalSubstrateConc;
                      setYieldValue(round(_yield, 4));
                    }
                  }}
                />
                <FormErrorMessage>{form.errors.titer}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Spacer h="10px" />

          {/* time field */}
          <Field name="time" validate={validateTime}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.time && form.touched.time}>
                <FormLabel htmlFor="time">Time (hr)</FormLabel>
                <Input
                  {...field}
                  id="time"
                  placeholder="Time"
                  _autofill={autofillObject}
                  onBlur={() => {
                    // get titer and time from formik props object
                    const titer = props.values.titer;
                    const time = props.values.time;

                    // if both titer and time are numeric, then calculate and set rate value
                    if (isNumeric(titer) && isNumeric(time)) {
                      const rate = titer / time;
                      setRateValue(round(rate, 4));
                    }
                  }}
                />
                <FormErrorMessage>{form.errors.time}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <Spacer h="10px" />

          {/* average rate field */}
          <Field name="rate">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.averageRate && form.touched.averageRate}
              >
                <HStack align="center" spacing="0px" mb="8px">
                  <FormLabel htmlFor="averageRate" my="auto">
                    Average rate (g/L/hr)
                  </FormLabel>
                  <FormFieldDetail text="Average rate is calculated using the titer and time fields" />
                </HStack>
                <Input
                  {...field}
                  id="averageRate"
                  placeholder="Average rate"
                  value={rateValue}
                  pointerEvents="none"
                  disabled
                />
                <FormErrorMessage>{form.errors.averageRate}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Spacer h="10px" />

          {/* maximum rate field */}
          <Field
            name="maximumRate"
            validate={maximumRateEqualsAverageRate ? true : validateMaximumRate}
          >
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  !maximumRateEqualsAverageRate &&
                  form.errors.maximumRate &&
                  form.touched.maximumRate
                }
              >
                <HStack align="center" spacing="0px" mb="8px">
                  <FormLabel htmlFor="maximumRate" my="auto">
                    Maximum rate (g/L/hr)
                  </FormLabel>
                  <FormFieldDetail text="Maximum rate is the average rate by default" />
                </HStack>
                {maximumRateEqualsAverageRate ? (
                  <Input
                    {...field}
                    id="maximumRate"
                    placeholder="Maximum rate"
                    pointerEvents="none"
                    value={rateValue}
                    disabled
                    _autofill={autofillObject}
                  />
                ) : (
                  <Input
                    {...field}
                    id="maximumRate"
                    placeholder="Maximum rate"
                    _autofill={autofillObject}
                  />
                )}
                <FormErrorMessage>{form.errors.maximumRate}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <HStack spacing="10px" pt="4px" pl="4px" align="center">
            <Checkbox
              isChecked={!maximumRateEqualsAverageRate}
              onChange={() =>
                setMaximumRateEqualsAverageRate(!maximumRateEqualsAverageRate)
              }
              colorScheme="green"
            />
            <Text
              opacity="0.8"
              fontSize="14px"
              cursor="pointer"
              onClick={() =>
                setMaximumRateEqualsAverageRate(!maximumRateEqualsAverageRate)
              }
            >
              Maximum rate is not equal to average rate
            </Text>
          </HStack>

          <Spacer h="12px" />

          {/* substrate 1 field */}
          <Field name="substrate1" validate={validateSubstrate1}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.substrate1 && form.touched.substrate1}
              >
                <HStack align="center" spacing="0px" mb="8px">
                  <FormLabel htmlFor="substrate1" my="auto">
                    Carbon source 1
                  </FormLabel>
                  <FormFieldDetail text="Ex: glucose, glycerol, xylose" />
                </HStack>
                <Input
                  {...field}
                  id="substrate1"
                  placeholder="Carbon source 1"
                  _autofill={autofillObject}
                />
                <FormErrorMessage>{form.errors.substrate1}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          {/* substrate concentration 1 field */}
          <Spacer h="10px" />
          <Field name="substrateConc1" validate={validateSubstrateConc1}>
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  form.errors.substrateConc1 && form.touched.substrateConc1
                }
              >
                <FormLabel htmlFor="substrateConc1">
                  Carbon source 1 concentration (g/L)
                </FormLabel>
                <Input
                  {...field}
                  id="substrateConc1"
                  placeholder="Carbon source 1 concentration"
                  _autofill={autofillObject}
                  onBlur={() => {
                    // define variables for yield calculation
                    const titer = props.values.titer;

                    let totalSubstrateConc = 0;
                    const substrateConc1 = props.values.substrateConc1;
                    const substrateConc2 = props.values.substrateConc2;

                    // if there is a value for a substrate then add it to the total substrate concentration
                    if (isNumeric(substrateConc1)) {
                      totalSubstrateConc += parseFloat(substrateConc1);
                    }
                    if (isNumeric(substrateConc2)) {
                      totalSubstrateConc += parseFloat(substrateConc2);
                    }

                    // if there is a substrate then calculate and set the yield
                    if (isNumeric(titer) && totalSubstrateConc > 0) {
                      const _yield = titer / totalSubstrateConc;
                      setYieldValue(round(_yield, 4));
                    }
                  }}
                />
                <FormErrorMessage>
                  {form.errors.substrateConc1}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          {/* substrate 2 field */}
          <Spacer h="10px" />
          <Field name="substrate2">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.substrate2 && form.touched.substrate2}
              >
                <FormLabel htmlFor="substrate2">Carbon source 2</FormLabel>
                <Input
                  {...field}
                  id="substrate2"
                  placeholder="Carbon source 2"
                  _autofill={autofillObject}
                />
                <FormErrorMessage>{form.errors.substrate2}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          {/* substrate concentration 2 field */}
          <Spacer h="10px" />
          <Field name="substrateConc2">
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  form.errors.substrateConc2 && form.touched.substrateConc2
                }
              >
                <FormLabel htmlFor="substrateConc2">
                  Carbon source 2 concentration (g/L)
                </FormLabel>
                <Input
                  {...field}
                  id="substrateConc2"
                  placeholder="Carbon source 2 concentration"
                  _autofill={autofillObject}
                  onBlur={() => {
                    // define variables for yield calculation
                    const titer = props.values.titer;

                    let totalSubstrateConc = 0;
                    const substrateConc1 = props.values.substrateConc1;
                    const substrateConc2 = props.values.substrateConc2;

                    // if there is a value for a substrate then add it to the total substrate concentration
                    if (isNumeric(substrateConc1)) {
                      totalSubstrateConc += parseFloat(substrateConc1);
                    }
                    if (isNumeric(substrateConc2)) {
                      totalSubstrateConc += parseFloat(substrateConc2);
                    }

                    // if there is a substrate then calculate and set the yield
                    if (isNumeric(titer) && totalSubstrateConc > 0) {
                      const _yield = titer / totalSubstrateConc;
                      setYieldValue(round(_yield, 4));
                    }
                  }}
                />
                <FormErrorMessage>
                  {form.errors.substrateConc2}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Spacer h="10px" />

          {/* yield field */}
          <Field name="yield" validate={validateYield}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.yield && form.touched.yield}>
                <HStack align="center" spacing="0px" mb="8px">
                  <FormLabel htmlFor="yield" my="auto">
                    Yield (g/gCarbon)
                  </FormLabel>
                  <FormFieldDetail text="Yield is calculated using titer and the carbon source concentrations" />
                </HStack>
                <Input
                  {...field}
                  id="yield"
                  placeholder="Yield"
                  pointerEvents="none"
                  value={yieldValue}
                  disabled
                />
                <FormErrorMessage>{form.errors.yield}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Spacer h="10px" />
          {/* volume field */}
          <Field name="volume" validate={validateVolume}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.volume && form.touched.volume}
              >
                {/* <FormLabel htmlFor="volume">Volume (L)</FormLabel> */}
                <HStack align="center" spacing="0px" mb="8px">
                  <FormLabel htmlFor="volume" my="auto">
                    Culture volume (L)
                  </FormLabel>
                  <FormFieldDetail text="Enter the volume of liquid culture" />
                </HStack>
                <Input
                  {...field}
                  id="volume"
                  placeholder="Volume"
                  _autofill={autofillObject}
                />
                <FormErrorMessage>{form.errors.volume}</FormErrorMessage>
              </FormControl>
            )}
          </Field>

          {/* media field */}
          <Spacer h="10px" />
          <Field name="media">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.media && form.touched.media}>
                {/* <FormLabel htmlFor="media">Media</FormLabel> */}
                <HStack align="center" spacing="0px" mb="8px">
                  <FormLabel htmlFor="media" my="auto">
                    Media
                  </FormLabel>
                  <FormFieldDetail text="Ex: YPD (yeast extract-peptone-dextrose), YNB (Yeast nitrogen base), MM (minimal media)" />
                </HStack>
                <Input
                  {...field}
                  id="media"
                  placeholder="Media"
                  _autofill={autofillObject}
                />
                <FormErrorMessage>{form.errors.media}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Spacer h="10px" />
          {/* pH field */}
          <Field name="pH" validate={validatepH}>
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.pH && form.touched.pH}>
                <FormLabel htmlFor="pH">pH</FormLabel>
                <Input
                  {...field}
                  id="pH"
                  placeholder="pH"
                  _autofill={autofillObject}
                />
                <FormErrorMessage>{form.errors.pH}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Spacer h="10px" />
          {/* temperature field */}
          <Field name="temperature" validate={validateTemperature}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.temperature && form.touched.temperature}
              >
                <FormLabel htmlFor="temperature">Temperature (C)</FormLabel>
                <Input
                  {...field}
                  id="temperature"
                  placeholder="Temperature"
                  _autofill={autofillObject}
                />
                <FormErrorMessage>{form.errors.temperature}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Spacer h="10px" />

          {/* vessel field */}
          <HStack align="center" spacing="0px" mb="8px">
            <FormLabel my="auto">Vessel and feed mode</FormLabel>
            {/* <FormFieldDetail text="Choose the most applicable option" /> */}
          </HStack>

          <RadioGroup onChange={setVesselValue} value={vesselValue}>
            <HStack
              my="15px"
              justify="center"
              align="flex-start"
              spacing="30px"
            >
              <VStack align="flex-start" spacing="0px">
                <Radio colorScheme="green" value="shake flask">
                  Shake flask
                </Radio>
                <Radio colorScheme="green" value="fedbatch">
                  Fedbatch
                </Radio>
                <Radio colorScheme="green" value="microplates">
                  Microplates
                </Radio>
              </VStack>
              <VStack align="flex-start" spacing="0px">
                <Radio colorScheme="green" value="batch reactor">
                  Batch reactor
                </Radio>
                <Radio colorScheme="green" value="chemostat">
                  Chemostat
                </Radio>
              </VStack>
            </HStack>
          </RadioGroup>

          {/* oxygen level field */}
          <HStack align="center" spacing="0px" mb="8px">
            <FormLabel my="auto">Oxygen Level</FormLabel>
            <FormFieldDetail text='Use "Intermediate" for high to low oxygen' />
          </HStack>

          <RadioGroup onChange={setOxygenValue} value={oxygenValue}>
            <HStack my="15px" justify="center" spacing="30px">
              <VStack align="flex-start" spacing="0px">
                <Radio colorScheme="green" value="sufficient">
                  Sufficient
                </Radio>
                <Radio colorScheme="green" value="limited">
                  Limited
                </Radio>
              </VStack>
              <VStack align="flex-start" spacing="0px">
                <Radio colorScheme="green" value="intermediate">
                  Intermediate
                </Radio>
                <Radio colorScheme="green" value="anaerobic">
                  Anaerobic
                </Radio>
              </VStack>
            </HStack>
          </RadioGroup>

          {/* nitrogen level field */}
          <HStack align="center" spacing="0px" mb="8px">
            <FormLabel my="auto">Nitrogen Level</FormLabel>
            <FormFieldDetail text='Use "Intermediate" for high to low nitrogen' />
          </HStack>

          <RadioGroup onChange={setNitrogenValue} value={nitrogenValue}>
            <HStack
              my="15px"
              justify="center"
              align="flex-start"
              spacing="30px"
            >
              <VStack align="flex-start" spacing="0px">
                <Radio colorScheme="green" value="sufficient">
                  Sufficient
                </Radio>
                <Radio colorScheme="green" value="limited">
                  Limited
                </Radio>
              </VStack>
              <VStack
                // h="46px"
                align="flex-start"
                justify="flex-start"
                spacing="0px"
              >
                <Radio colorScheme="green" value="intermediate">
                  Intermediate
                </Radio>
              </VStack>
            </HStack>
          </RadioGroup>

          {/* bioprocess notes field */}
          <Spacer h="10px" />
          <Field name="bioprocessNotes">
            {({ field, form }) => (
              <FormControl
                isInvalid={
                  form.errors.bioprocessNotes && form.touched.bioprocessNotes
                }
              >
                <HStack align="center" spacing="0px" mb="8px">
                  <FormLabel htmlFor="bioprocessNotes" my="auto">
                    Bioprocess Notes:
                  </FormLabel>
                  <FormFieldDetail text="Optionally, include additional details" />
                </HStack>
                <Textarea
                  {...field}
                  id="bioprocessNotes"
                  placeholder="Notes on bioprocess conditions"
                  _autofill={autofillObject}
                  minH="100px"
                />
                <FormErrorMessage>
                  {form.errors.bioprocessNotes}
                </FormErrorMessage>
              </FormControl>
            )}
          </Field>

          <ModalFooter>
            <Button
              ref={submitButton}
              bg="green.100"
              color="gray.800"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Continue
            </Button>
          </ModalFooter>
        </Form>
      )}
    </Formik>
  );
};

export default BioprocessConditionsForm;
