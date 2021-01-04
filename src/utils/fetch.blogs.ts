import firebase from "firebase";

import { Blog } from "../components/Blog/Blog.interface";

export const fetchBlogs = async (
  db: firebase.firestore.Firestore,
  limit: number = 10,
  lastSnapShot?: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>
): Promise<{
  blogs: Blog[];
  lastSnapShot: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>;
}> => {
  const ref = db.collection("blogs").orderBy("createdAt", "desc");

  let snapShot: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>;
  if (lastSnapShot) {
    snapShot = await ref.startAfter(lastSnapShot).limit(limit).get();
  } else snapShot = await ref.limit(limit).get();

  const blogs: Blog[] = [];
  snapShot.forEach((blog) => {
    console.log(blog.id);
    blogs.push(blog.data() as Blog);
  });

  return { blogs, lastSnapShot: snapShot.docs[snapShot.docs.length - 1] };
};

export default fetchBlogs;
