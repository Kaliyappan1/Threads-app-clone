import { Avatar, Box, Flex, Link, Menu, MenuButton, MenuItem, MenuList, Portal, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";

function UserHeader() {
  const copyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
      console.log("URL copied to clipboard");
    })
    
  }

  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Kaliyappan
          </Text>
          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"}>kaliyappan_r4</Text>
            <Text
              fontSize={"xs"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              threads.net
            </Text>
          </Flex>
        </Box>
        <Box>
          <Avatar name="kaliyappan" src="/zuck-avatar.png" size={"xl"} />
        </Box>
      </Flex>

      <Text>
        Co-founder, executive chairman and CEO of Meta Platforms.
      </Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>3.2k followers</Text>
          <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
          <Link color={"gray.light"}>instagram.com</Link>
        </Flex>
      <Flex>
        <Box className="icon-container">
          <BsInstagram size={24} cursor={"pointer"} />
        </Box>
        <Box className="icon-container">
          <Menu>
            <MenuButton>
          <CgMoreO size={24} cursor={"pointer"} />          
            </MenuButton>
            <Portal>
              <MenuList bg={"gray.dark"}>
                <MenuItem bg={"gray.dark"} onClick={copyURL}>Copy Link</MenuItem>
              </MenuList>
            </Portal>
          </Menu>
        </Box>
      </Flex>
      </Flex>
    </VStack>
  );
}

export default UserHeader;
