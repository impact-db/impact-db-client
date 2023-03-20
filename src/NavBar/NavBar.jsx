import { EditIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorMode,
  useMediaQuery,
  Portal,
  Tooltip,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import DnaLogo from "../Assets/DnaLogo";
import {
  loginPopup,
  useFirebaseAuthentication,
  signUserOut,
} from "../Auth/auth";
import NavLink from "./NavLink";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  const currentUser = useFirebaseAuthentication();

  return (
    <>
      <Stack
        maxW="1500px"
        mx="auto"
        px="20px"
        py="20px"
        direction="row"
        justify="space-between"
        align="center"
      >
        <Link to="/">
          <HStack spacing="-2px" align="center">
            <Box height="40px" width="40px">
              <DnaLogo />
            </Box>
            <Heading fontSize="28px">ImpactDB</Heading>
          </HStack>
        </Link>

        {isLargerThan800 ? (
          <Stack direction="row" align="center" spacing="40px">
            <NavLink linkPath="/#database">Database</NavLink>
            <NavLink linkPath="/#machine-learning">ML Tools</NavLink>
            <NavLink linkPath="/#about">About</NavLink>
            <NavLink linkPath="/#contact">Contact</NavLink>
            {currentUser ? (
              <Menu>
                <MenuButton>
                  <Image
                    src={currentUser.photoURL}
                    alt="User image"
                    borderRadius="100%"
                    w="35px"
                    h="35px"
                    cursor="pointer"
                  />
                </MenuButton>
                <Portal>
                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        signUserOut();
                      }}
                    >
                      Signout
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu>
            ) : (
              <Tooltip hasArrow label="Sign in to edit">
                <EditIcon
                  onClick={loginPopup}
                  cursor="pointer"
                  w="35px"
                  h={5}
                />
              </Tooltip>
            )}
            {colorMode === "light" ? (
              <Tooltip hasArrow label="Switch to dark mode">
                <MoonIcon
                  onClick={toggleColorMode}
                  cursor="pointer"
                  w={5}
                  h={5}
                />
              </Tooltip>
            ) : (
              <Tooltip hasArrow label="Switch to light mode">
                <SunIcon
                  onClick={toggleColorMode}
                  cursor="pointer"
                  w={5}
                  h={5}
                />
              </Tooltip>
            )}
          </Stack>
        ) : (
          <Menu>
            <MenuButton as={Button}>
              <HamburgerIcon w={6} h={6} />
            </MenuButton>

            <Portal>
              <MenuList>
                <NavLink linkPath="/#database">
                  <MenuItem>Database</MenuItem>
                </NavLink>
                <NavLink linkPath="/#machine-learning">
                  <MenuItem>ML Tools</MenuItem>
                </NavLink>
                <NavLink linkPath="/#about">
                  <MenuItem>About</MenuItem>
                </NavLink>
                <NavLink linkPath="/#contact">
                  <MenuItem>Contact</MenuItem>
                </NavLink>

                {currentUser ? (
                  <MenuItem onClick={signUserOut}>Sign out</MenuItem>
                ) : (
                  <MenuItem onClick={loginPopup}>Sign in</MenuItem>
                )}

                <MenuItem onClick={toggleColorMode}>
                  {colorMode === "light" ? "Dark mode" : "Light mode"}
                </MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        )}
      </Stack>
    </>
  );
};

export default NavBar;
