import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { FC } from "react";

// import { IBlogPostExtended } from "../../_interfaces/blog.interfaces";

interface IDetailPage {
  params: Promise<{ id: string }>;
}

const DetailPage: FC<IDetailPage> = async ({ params }) => {
  const { id } = await params;
  const tempData = {
    title: "Title",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At fugit atque quia ratione ex quaerat doloremque corporis iure suscipit ut.",
  };

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const isOwner = user?.id; // todo: add user check

  console.log(id, isOwner);

  return (
    <div>
      <h1 className="text-2xl text-gray-900 items-center font-semibold m-4">{tempData.title}</h1>
      <p>{tempData.content}</p>
    </div>
  );
};

export default DetailPage;
