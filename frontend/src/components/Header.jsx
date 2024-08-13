import {
  Button,
  Flex,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import userAtom from "../atoms/userAtom";
import { BsFillHouseExclamationFill, BsPersonCircle } from "react-icons/bs";
import { Link, Link as RouterLink } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";
import useLogout from "../hooks/useLogout";
import authScreenAtom from "../atoms/authAtom";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  const logout = useLogout();
  const setAuthScreen = useSetRecoilState(authScreenAtom)

  return (
    <Flex justifyContent={"space-between"} mt={6} mb="12">
      {user && (
        <Link as={RouterLink} to="/">
          <BsFillHouseExclamationFill size={24} />
        </Link>
      )}
      {!user && (
        <Link as={RouterLink} to={"/auth"} onClick={
          () => setAuthScreen('login')
          }>
          Login
        </Link>
      )}

      <Image
        cursor={"pointer"}
        alt="logo"
        w={6}
        onClick={toggleColorMode}
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
      />

      {user && (
        <Flex alignItems={"center"} gap={4}>
          <Link as={RouterLink} to={`/${user.username}`}>
            <BsPersonCircle size={24} />
          </Link>
          <Button size={"xs"} onClick={logout}>
            <CgLogOut size={20} />
          </Button>
        </Flex>
      )}

      {!user && (
        <Link as={RouterLink} to={"/auth"} onClick={ () => setAuthScreen('signup')}>
          Sign up
        </Link>
      )}
    </Flex>
  );
}

export default Header;
