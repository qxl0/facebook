import { orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

const Posts = () => {
  const [realtimePosts, loading, error] = useCollection(
    query(collection(db, "posts"), orderBy("timestamp", "desc"))
  );

  return <div>Posts</div>;
};

export default Posts;
