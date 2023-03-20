import { Text } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";

const NavLink = ({ linkPath, children }) => {
  if (location.pathname === "/") {
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
  } else {
    return <HashLink to={linkPath}>{children}</HashLink>;
  }
};

export default NavLink;
