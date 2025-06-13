import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

import { buttonVariants } from "@/components/index";
import { getPostsByUser } from "../_actions/getPosts";
import { BlogCard, CardsGrid } from "../_components";

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const data = user?.id ? await getPostsByUser(user.id) : [];

  return (
    <div>
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-xl font-medium">My Blog Posts</h2>

        <Link className={buttonVariants()} href="/dashboard/create">
          Create Post
        </Link>
      </div>

      <CardsGrid>
        {data.map((item) => (
          <BlogCard data={item} key={item.id} />
        ))}
      </CardsGrid>
    </div>
  );
};

export default DashboardPage;
