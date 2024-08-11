import { Button, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useSetRecoilState } from "recoil";
import userAtom from "../assets/userAtom";
import useShowToast from "../hooks/useShowToast";
import { CgLogOut } from "react-icons/cg";

function LogoutButton() {
  const setUser = useSetRecoilState(userAtom);
  const showToast = useShowToast();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (data.error) {
        showToast("Error", data.error, "error");
        return;
      }
      localStorage.removeItem("user-threads");
      setUser(null);

    } catch (error) { 
      showToast("Error", error, "error");
    }
  };

  return (
    <Button
      position={"fixed"}
      top={"30px"}
      right={"30px"}
      size={"sm"}
      onClick={handleLogout}
      bg={useColorModeValue("gray.300", "gray.dark")}
    >
      <CgLogOut size={20}/>
    </Button>
  );
}
export default LogoutButton;
