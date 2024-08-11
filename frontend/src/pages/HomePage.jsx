import { Button, Flex, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";

function HomePage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const showToast = useShowToast();

  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/posts/feed");
        const data = await res.json();
        console.log(data);
      } catch (error) {
        showToast("Error", error.message, "error");
      } finally {
        setLoading(false);
      }
    };
    getFeedPosts();
  }, [showToast]);

  return (
    <Link to={"/kaliyappan"}>
      <Flex w={"full"} justifyContent={"center"}>
        <Button mx={"auto"} bg={useColorModeValue("gray.300", "gray.dark")}>
          {" "}
          Visit Profile Page
        </Button>
      </Flex>
    </Link>
  );
}

export default HomePage;
