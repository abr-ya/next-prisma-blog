import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

import { buttonVariants } from "@/components/index";
import { getPostsByUser } from "../_actions/getPosts";
import { BlogCard, CardsGrid } from "../_components";

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  let data = null;
  if (user) {
    data = await getPostsByUser(user.id);
    console.log("user's post count", data.length);
  } else {
    console.log("ooooops!.. i can't get user id!(");
  }

  const renderContent = () =>
    data ? (
      <CardsGrid>
        {data.map((item) => (
          <BlogCard data={item} key={item.id} />
        ))}
      </CardsGrid>
    ) : (
      <p>no posts</p>
    );

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>

        <Link className={buttonVariants()} href="/dashboard/create">
          Create Post
        </Link>
      </div>
      {renderContent()}
    </div>
  );
};

export default DashboardPage;
