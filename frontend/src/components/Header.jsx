import { Flex, Image, useColorMode } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import userAtom from "../assets/userAtom";
import { BsFillHouseExclamationFill, BsPersonCircle } from "react-icons/bs";
import {Link, Link as RouterLink} from "react-router-dom"

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);
  return (
    <Flex justifyContent={"space-between"} mt={6} mb="12">

      {user && (
        
        <Link as={RouterLink} to="/">
            <BsFillHouseExclamationFill size={24}/>
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
        <Link as={RouterLink} to={`/${user.username}`}>
          <BsPersonCircle size={24}/>
        </Link>
      )}


    </Flex>
  );
}

export default Header;
