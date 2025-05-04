import { FC } from "react";

interface IBlogDateAndAuthor {
  createdAt: Date;
  name: string;
  imgUrl?: string;
}

const BlogDateAndAuthor: FC<IBlogDateAndAuthor> = () => {
  return <div>BlogDateAndAuthor</div>;
};

export default BlogDateAndAuthor;
