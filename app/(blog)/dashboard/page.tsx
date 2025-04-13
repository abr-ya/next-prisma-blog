import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const DashboardPage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  console.log(user?.email);

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">Hello from DashboardPage</main>
  );
};

export default DashboardPage;
