import { getAllPosts } from "../_actions/getPosts";
import { BlogCard, CardsGrid } from "../_components/index";

const PostsPage = async () => {
  const allPosts = await getAllPosts();

  return (
    <CardsGrid>
      {allPosts.map((item) => (
        <BlogCard data={item} key={item.id} />
      ))}
    </CardsGrid>
  );
};

export default PostsPage;
