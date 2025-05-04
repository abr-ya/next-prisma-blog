import { IBlogPostBase, IBlogPostExtended } from "../_interfaces/blog.interfaces";

interface IBlogCard {
  data: IBlogPostBase | IBlogPostExtended;
}

const BlogCard = ({ data: { title, ...restData } }: IBlogCard) => {
  console.log(title);

  let isExtendedCard = false;
  let user;
  if ("user" in restData) {
    isExtendedCard = true;
    user = restData.user;
  }

  if (isExtendedCard) console.log(user?.id);

  return <div>BlogCard == {title}</div>;
};

export default BlogCard;
