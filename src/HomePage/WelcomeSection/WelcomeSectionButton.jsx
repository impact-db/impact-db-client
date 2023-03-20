import { Text } from "@chakra-ui/react";

const WelcomeSectionButton = ({ linkPath, children }) => {
  return (
    <Text
      cursor="pointer"
      onClick={() => {
        const elementId = linkPath.split("#")[1];
        document
          .getElementById(elementId)
          .scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </Text>
  );
};

export default WelcomeSectionButton;
