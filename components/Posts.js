import { orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase";
import Post from "./Post";

const Posts = () => {
  const [realtimePosts, loading, error] = useCollection(
    query(collection(db, "posts"), orderBy("timestamp", "desc"))
  );

  return (
    <div>
      {realtimePosts?.docs.map((post) => (
        // console.log("postImage: ", post.data().postImage),
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postImage={post.data().postImage}
        />
      ))}
    </div>
  );
};

export default Posts;
