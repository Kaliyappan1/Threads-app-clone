import UserHeader from "../components/UserHeader"
import UserPost from "../components/UserPost"

function UserPage() {
  return (

  <>
  <UserHeader/>
  <UserPost likes={1200} replies={765} postImg="/post1.png" postTitle="Lets descuss about my page"/>
  <UserPost likes={700} replies={546} postImg="/post2.png" postTitle="today is my latest picture"/>
  <UserPost likes={100} replies={566} postImg="/post3.png" postTitle="about my bio this is latest picture"/>
  <UserPost likes={2004} replies={43} postTitle="this is my first title"/>
  </>
  )
}

export default UserPage