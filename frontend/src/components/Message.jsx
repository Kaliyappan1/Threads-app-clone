import { Avatar, Flex, Text } from "@chakra-ui/react";
function Message({ownMessage}) {
  return (
    <>
      {ownMessage ? (
        <Flex gap={2} alignSelf={"flex-end"}>
          <Text maxW={"350px"} bg={"blue.400"} p={2} borderRadius={"md"}>
            Hello this is my text message
          </Text>
          <Avatar src="" w={7} h={7} />
        </Flex>
      ) : (
        <Flex gap={2}>
          <Avatar src="" w={7} h={7} />
          <Text maxW={"350px"} bg={"gray.300"} color={"black"} p={2} borderRadius={"md"}>
            hello this is another text message
          </Text>
        </Flex>
      )}
    </>
  );
}

export default Message;
