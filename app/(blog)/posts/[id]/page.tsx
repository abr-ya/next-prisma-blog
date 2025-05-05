import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FC } from "react";

import { getPostById } from "../../_actions/getPosts";

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
    <div className="max-w-3xl mx-auto py-8 px-4">
      {/* Back Button */}
      {/* header and author */}
      <div className="mb-8 mt-6">
        <h1 className="text-2xl text-gray-900 items-center font-semibold m-4">{post.title}</h1>
        <p>{post.content}</p>
        <p>todo: Author and date</p>
      </div>

      {/* Image */}
      {/* Content */}
    </div>
  );
};

export default DetailPage;
