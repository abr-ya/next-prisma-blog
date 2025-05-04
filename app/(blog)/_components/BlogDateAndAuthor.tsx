import { FC } from "react";
import Image from "next/image";

interface IBlogDateAndAuthor {
  createdAt: Date;
  name: string;
  imgUrl?: string | null;
}

const BlogDateAndAuthor: FC<IBlogDateAndAuthor> = ({ createdAt, imgUrl, name }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="relative size-8 overflow-hidden rounded-full">
          <Image
            src={imgUrl || "https://i.pinimg.com/736x/7c/1c/a4/7c1ca448be31c489fb66214ea3ae6deb.jpg"}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <p className="text-sm font-medium text-gray-700">{name}</p>
      </div>

      <time className="text-xs text-gray-500">
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: false,
        }).format(createdAt)}
      </time>
    </div>
  );
};

export default BlogDateAndAuthor;
