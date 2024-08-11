import { useEffect, useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { Flex, Spinner } from "@chakra-ui/react";

const postsData = [
  {
    likes: 1200,
    replies: 765,
    postImg: "/post1.png",
    postTitle: "Let's discuss about my page",
  },
  {
    likes: 700,
    replies: 546,
    postImg: "/post2.png",
    postTitle: "Today is my latest picture",
  },
  {
    likes: 700,
    replies: 546,
    postImg: "/post3.png",
    postTitle: "Today is my latest picture",
  },
  {
    likes: 100,
    replies: 566,
    postImg: "https://picsum.photos/1080/1200",
    postTitle: "About my bio, this is the latest picture",
  },
  {
    likes: 450,
    replies: 234,
    postImg: "https://picsum.photos/1080/1201",
    postTitle: "Check out my new blog post",
  },
  {
    likes: 800,
    replies: 654,
    postImg: "https://picsum.photos/1080/1202",
    postTitle: "My favorite travel destinations",
  },
  {
    likes: 950,
    replies: 345,
    postImg: "https://picsum.photos/1080/1203",
    postTitle: "Exploring the city at night",
  },
  {
    likes: 1100,
    replies: 765,
    postImg: "https://picsum.photos/1080/1204",
    postTitle: "Throwback to my vacation",
  },
  {
    likes: 300,
    replies: 223,
    postImg: "https://picsum.photos/1080/1205",
    postTitle: "New recipe for you to try",
  },
  {
    likes: 600,
    replies: 455,
    postImg: "https://picsum.photos/1080/1206",
    postTitle: "My fitness journey",
  },
  {
    likes: 900,
    replies: 666,
    postImg: "https://picsum.photos/1080/1207",
    postTitle: "Unboxing my new gadget",
  },
  {
    likes: 450,
    replies: 234,
    postImg: "https://picsum.photos/1080/1208",
    postTitle: "A day in my life",
  },
  {
    likes: 850,
    replies: 654,
    postImg: "https://picsum.photos/1080/1209",
    postTitle: "My weekend getaway",
  },
  {
    likes: 950,
    replies: 345,
    postImg: "https://picsum.photos/1080/1210",
    postTitle: "DIY home decor ideas",
  },
  {
    likes: 1100,
    replies: 765,
    postImg: "https://picsum.photos/1080/1211",
    postTitle: "My favorite books",
  },
  {
    likes: 300,
    replies: 223,
    postImg: "https://picsum.photos/1080/1212",
    postTitle: "Tips for a healthy lifestyle",
  },
  {
    likes: 600,
    replies: 455,
    postImg: "https://picsum.photos/1080/1213",
    postTitle: "My morning routine",
  },
  {
    likes: 900,
    replies: 666,
    postImg: "https://picsum.photos/1080/1214",
    postTitle: "Travel essentials",
  },
  {
    likes: 450,
    replies: 234,
    postImg: "https://picsum.photos/1080/1215",
    postTitle: "Weekend hiking trip",
  },
  {
    likes: 800,
    replies: 654,
    postImg: "https://picsum.photos/1080/1216",
    postTitle: "My art collection",
  },
  {
    likes: 950,
    replies: 345,
    postImg: "https://picsum.photos/1080/1217",
    postTitle: "Tips for better sleep",
  },
  {
    likes: 1100,
    replies: 765,
    postImg: "https://picsum.photos/1080/1218",
    postTitle: "How to stay motivated",
  },
  {
    likes: 300,
    replies: 223,
    postImg: "https://picsum.photos/1080/1219",
    postTitle: "My skincare routine",
  },
  {
    likes: 600,
    replies: 455,
    postImg: "https://picsum.photos/1080/1220",
    postTitle: "Favorite music albums",
  },
  {
    likes: 900,
    replies: 666,
    postImg: "https://picsum.photos/1080/1221",
    postTitle: "Exploring nature",
  },
  {
    likes: 450,
    replies: 234,
    postImg: "https://picsum.photos/1080/1222",
    postTitle: "How to be productive",
  },
  {
    likes: 800,
    replies: 654,
    postImg: "https://picsum.photos/1080/1223",
    postTitle: "My pet's first birthday",
  },
  {
    likes: 950,
    replies: 345,
    postImg: "https://picsum.photos/1080/1224",
    postTitle: "Quick and easy recipes",
  },
  {
    likes: 1100,
    replies: 765,
    postImg: "https://picsum.photos/1080/1225",
    postTitle: "My photography journey",
  },
  {
    likes: 300,
    replies: 223,
    postImg: "https://picsum.photos/1080/1226",
    postTitle: "Favorite workout routines",
  },
  {
    likes: 600,
    replies: 455,
    postImg: "https://picsum.photos/1080/1227",
    postTitle: "Gardening tips",
  },
  {
    likes: 900,
    replies: 666,
    postImg: "https://picsum.photos/1080/1228",
    postTitle: "My study space",
  },
  {
    likes: 450,
    replies: 234,
    postImg: "https://picsum.photos/1080/1229",
    postTitle: "How to organize your day",
  },
  {
    likes: 800,
    replies: 654,
    postImg: "https://picsum.photos/1080/1230",
    postTitle: "My top 10 movies",
  },
  {
    likes: 950,
    replies: 345,
    postImg: "https://picsum.photos/1080/1231",
    postTitle: "My favorite podcasts",
  },
  {
    likes: 1100,
    replies: 765,
    postImg: "https://picsum.photos/1080/1232",
    postTitle: "Tips for better mental health",
  },
  {
    likes: 300,
    replies: 223,
    postImg: "https://picsum.photos/1080/1233",
    postTitle: "How to cook the perfect steak",
  },
  {
    likes: 600,
    replies: 455,
    postImg: "https://picsum.photos/1080/1234",
    postTitle: "My painting process",
  },
  {
    likes: 900,
    replies: 666,
    postImg: "https://picsum.photos/1080/1235",
    postTitle: "Best cafes in town",
  },
  {
    likes: 450,
    replies: 234,
    postImg: "https://picsum.photos/1080/1236",
    postTitle: "How to start a blog",
  },
  {
    likes: 800,
    replies: 654,
    postImg: "https://picsum.photos/1080/1237",
    postTitle: "My weekend at the beach",
  },
  {
    likes: 950,
    replies: 345,
    postImg: "https://picsum.photos/1080/1238",
    postTitle: "My workout playlist",
  },
  {
    likes: 1100,
    replies: 765,
    postImg: "https://picsum.photos/1080/1239",
    postTitle: "How to declutter your space",
  },
  {
    likes: 300,
    replies: 223,
    postImg: "https://picsum.photos/1080/1240",
    postTitle: "My top 10 travel tips",
  },
  {
    likes: 600,
    replies: 455,
    postImg: "https://picsum.photos/1080/1241",
    postTitle: "How to make homemade pasta",
  },
  {
    likes: 900,
    replies: 666,
    postImg: "https://picsum.photos/1080/1242",
    postTitle: "Favorite summer activities",
  },
  {
    likes: 450,
    replies: 234,
    postImg: "https://picsum.photos/1080/1243",
    postTitle: "My autumn wardrobe",
  },
  {
    likes: 800,
    replies: 654,
    postImg: "https://picsum.photos/1080/1244",
    postTitle: "My favorite desserts",
  },
  {
    likes: 950,
    replies: 345,
    postImg: "https://picsum.photos/1080/1245",
    postTitle: "How to meditate",
  },
  {
    likes: 1100,
    replies: 765,
    postImg: "https://picsum.photos/1080/1246",
    postTitle: "My tech gadget reviews",
  },
  {
    likes: 300,
    replies: 223,
    postImg: "https://picsum.photos/1080/1247",
    postTitle: "How to set goals effectively",
  },
];
function UserPage() {
  const [user, setUser] = useState(null);
  const { username } = useParams();
  const showToast = useShowToast()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await fetch(`/api/users/profile/${username}`);
        const data = await res.json();
        if (data.error) {
          showToast("Error", data.error, "error");
          return;
        }
        setUser(data);
      }
      catch (error) {
        showToast("Error", error, "error");
      } finally{
        setLoading(false);
      }
    };
    getUser();

  }, [username, showToast]);

  if (!user && loading) {
    return(
      <Flex justifyContent={"center"}>
        <Spinner size={"xl"} />
      </Flex>
    )
  }

  if (!user && !loading) return <h1>User not found</h1>;

  return (
    <>
      <UserHeader user={user} />
      {postsData.map((data, index) => (
        <UserPost
          key={index}
          likes={data.likes}
          replies={data.replies}
          postImg={data.postImg}
          postTitle={data.postTitle}
        />
      ))}
    </>
  );
}

export default UserPage;
