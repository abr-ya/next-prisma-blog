import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

import { buttonVariants } from "@/components/index";

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user?.email);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>

        <Link className={buttonVariants()} href="/dashboard/create">
          Create Post
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        Hello from DashboardPage == todo: My Posts
      </div>
    </div>
  );
};

export default DashboardPage;
