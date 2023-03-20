import { Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { useDropzone } from "react-dropzone";

const FileUploadBox = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const fileText =
    acceptedFiles.length > 0
      ? acceptedFiles[0].path
      : "Drag a file here, or click to select a file";

  return (
    <>
      <Stack
        w="100%"
        h="100px"
        align="center"
        justify="center"
        border="3px dashed"
        borderColor={useColorModeValue("green.600", "green.100")}
      >
        <Flex
          {...getRootProps({ className: "dropzone" })}
          w="100%"
          h="100%"
          align="center"
          justify="center"
        >
          <input {...getInputProps()} />
          <Text>{fileText}</Text>
        </Flex>
      </Stack>
    </>
  );
};

export default FileUploadBox;
