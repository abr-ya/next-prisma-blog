import { getAllPosts } from "../_actions/getPosts";

const PostsPage = async () => {
  const allPosts = await getAllPosts();
  console.log(allPosts);

  return <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">Hello from PostsPage</main>;
};

export default PostsPage;
