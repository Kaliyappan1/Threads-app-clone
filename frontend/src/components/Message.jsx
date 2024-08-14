import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { selectedConversationsAtom } from "../atoms/messagesAtom";
import userAtom from "../atoms/userAtom";
function Message({ownMessage, message}) {
  const selectedConversation = useRecoilValue(selectedConversationsAtom)
  const user = useRecoilValue(userAtom);
  console.log(user);
  
  return (
    <>
      {ownMessage ? (
        <Flex gap={2} alignSelf={"flex-end"}>
          <Text maxW={"350px"} bg={"blue.400"} p={2} borderRadius={"md"}>
            {message.text}
          </Text>
          <Avatar src={user.profilePic} w={7} h={7} />
        </Flex>
      ) : (
        <Flex gap={2}>
          <Avatar src={selectedConversation.userProfilePic} w={7} h={7} />
          <Text maxW={"350px"} bg={"gray.300"} color={"black"} p={2} borderRadius={"md"}>
            {message.text}
          </Text>
        </Flex>
      )}
    </>
  );
}

export default Message;
