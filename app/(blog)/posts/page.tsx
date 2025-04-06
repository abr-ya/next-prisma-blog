import { getAllPosts } from "../_actions/getPosts";
import BlogCard from "../_components/BlogCard";

const PostsPage = async () => {
  const allPosts = await getAllPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {allPosts.map((item) => (
        <BlogCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default PostsPage;
