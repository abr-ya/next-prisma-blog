import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FC } from "react";
import Image from "next/image";

import { getPostById } from "../../_actions/getPosts";
import { Card, CardContent } from "@/components/index";
import { BlogDateAndAuthor } from "../../_components";

interface IDetailPage {
  params: Promise<{ id: string }>;
}

const DetailPage: FC<IDetailPage> = async ({ params }) => {
  const { id } = await params;
  const post = await getPostById(id);

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isOwner = user?.id; // todo: add user check

  console.log(id, isOwner, post);

  return (
    <div className="max-w-3xl mx-auto py-4">
      {/* Back Button */}

      {/* header and author */}
      <div className="my-4">
        <h1 className="text-2xl text-gray-900 items-center font-semibold my-4">{post.title}</h1>
        <BlogDateAndAuthor createdAt={post.createdAt} name={post.user.firstName} imgUrl={post.user.profileImage} />
      </div>

      {/* Image */}
      <div className="relative h-[400px] w-full mb-4 overflow-hidden rounded-lg">
        <Image src={post.imageUrl} alt={post.title} fill className="object-cover" priority />
      </div>

      {/* Content */}
      <Card>
        <CardContent>
          <p className="text-gray-700">{post.content}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default DetailPage;
