import Link from "next/link";
import Image from "next/image";

import { IBlogPostBase, IBlogPostExtended } from "../_interfaces/blog.interfaces";
import BlogDateAndAuthor from "./BlogDateAndAuthor";

interface IBlogCard {
  data: IBlogPostBase | IBlogPostExtended;
}

const BlogCard = ({ data: { content, createdAt, id, imageUrl, title, ...restData } }: IBlogCard) => {
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
      <Link href={`/posts/${id}`} className="block w-full h-full">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl || "https://i.pinimg.com/736x/e4/61/5d/e4615d8c8eb5c636f1938a64a7091e24.jpg"}
            alt="Image for blog"
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className={`flex flex-col justify-between p-4 ${isExtendedCard && "h-40"}`}>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 line-clamp-1">{title}</h3>
            <p className="mb-2 text-sm text-gray-600 line-clamp-2">{content}</p>
          </div>
          {isExtendedCard ? (
            <BlogDateAndAuthor createdAt={createdAt} name={user?.firstName || ""} imgUrl={user?.profileImage} />
          ) : null}
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
