import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState } from "react";
import Commend from "../components/Commend";

const commentsData = [
  {
    comment: "very nice",
    createdAt: "3d",
    likes: 23,
    username: "dulik",
    image: "https://bit.ly/ryan-florence",
  },
  {
    comment: "great job",
    createdAt: "2d",
    likes: 15,
    username: "alex",
    image: "https://bit.ly/dan-abramov",
  },
  {
    comment: "well done",
    createdAt: "1d",
    likes: 12,
    username: "chris",
    image: "https://bit.ly/kent-c-dodds",
  },
  {
    comment: "excellent",
    createdAt: "4d",
    likes: 18,
    username: "maria",
    image: "https://bit.ly/prosper-baba",
  },
  {
    comment: "amazing",
    createdAt: "5d",
    likes: 21,
    username: "julia",
    image: "https://bit.ly/ryan-florence",
  },
  {
    comment: "fantastic",
    createdAt: "6d",
    likes: 17,
    username: "steve",
    image: "https://bit.ly/dan-abramov",
  },
  {
    comment: "superb",
    createdAt: "1w",
    likes: 24,
    username: "lisa",
    image: "https://bit.ly/kent-c-dodds",
  },
  {
    comment: "brilliant",
    createdAt: "2w",
    likes: 19,
    username: "mike",
    image: "https://bit.ly/prosper-baba",
  },
  {
    comment: "outstanding",
    createdAt: "3w",
    likes: 22,
    username: "anna",
    image: "https://bit.ly/ryan-florence",
  },
  {
    comment: "remarkable",
    createdAt: "1mo",
    likes: 20,
    username: "jack",
    image: "https://bit.ly/dan-abramov",
  },
  {
    comment: "exceptional",
    createdAt: "2mo",
    likes: 25,
    username: "susan",
    image: "https://bit.ly/kent-c-dodds",
  },
  {
    comment: "extraordinary",
    createdAt: "3mo",
    likes: 16,
    username: "tony",
    image: "https://bit.ly/prosper-baba",
  },
  {
    comment: "impressive",
    createdAt: "4mo",
    likes: 14,
    username: "david",
    image: "https://bit.ly/ryan-florence",
  },
  {
    comment: "phenomenal",
    createdAt: "5mo",
    likes: 13,
    username: "sarah",
    image: "https://bit.ly/dan-abramov",
  },
  {
    comment: "splendid",
    createdAt: "6mo",
    likes: 11,
    username: "daniel",
    image: "https://bit.ly/kent-c-dodds",
  },
  {
    comment: "marvelous",
    createdAt: "7mo",
    likes: 10,
    username: "lucy",
    image: "https://bit.ly/prosper-baba",
  },
  {
    comment: "awesome",
    createdAt: "8mo",
    likes: 9,
    username: "peter",
    image: "https://bit.ly/ryan-florence",
  },
  {
    comment: "wonderful",
    createdAt: "9mo",
    likes: 8,
    username: "emma",
    image: "https://bit.ly/dan-abramov",
  },
  {
    comment: "magnificent",
    createdAt: "10mo",
    likes: 7,
    username: "john",
    image: "https://bit.ly/kent-c-dodds",
  },
  {
    comment: "terrific",
    createdAt: "11mo",
    likes: 6,
    username: "lily",
    image: "https://bit.ly/prosper-baba",
  },
];

function PostPage() {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/zuck-avatar.png" size={"md"} name="kaliyappan" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              kaliyappan
            </Text>
            <Image src="/verified.png" w={4} h={4} ml={1} />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray.light"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>
      <Text my={3}> Let's talk about threads</Text>

      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src="/post1.png" w={"full"} />
      </Box>

      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          234 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>
      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />
      {commentsData.map((data, index) => (
        <Commend
          comment={data.comment}
          createdAt={data.createdAt}
          likes={data.likes}
          username={data.username}
          image={data.image}
        />
      ))}
    </>
  );
}

export default PostPage;
