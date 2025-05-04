import Link from "next/link";
import { IBlogPostBase, IBlogPostExtended } from "../_interfaces/blog.interfaces";
import BlogDateAndAuthor from "./BlogDateAndAuthor";

interface IBlogCard {
  data: IBlogPostBase | IBlogPostExtended;
}

const BlogCard = ({ data: { content, createdAt, id, title, ...restData } }: IBlogCard) => {
  console.log(title);

  let isExtendedCard = false;
  let user;
  if ("user" in restData) {
    isExtendedCard = true;
    user = restData.user;
  }

  if (isExtendedCard) console.log(user?.id);

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/post/${id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">todo: Image</div>

        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>

          <p className="mb-4 text-sm text-gray-600 line-clamp-2">{content}</p>

          <BlogDateAndAuthor createdAt={createdAt} name={""} />
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
