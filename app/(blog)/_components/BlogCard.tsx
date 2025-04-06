import { IBlogPost } from "../_interfaces/blog.interfaces";

interface IBlogCard {
  data: IBlogPost;
}

const BlogCard = ({ data }: IBlogCard) => {
  console.log(data);

  return <div>BlogCard == {data.title}</div>;
};

export default BlogCard;
