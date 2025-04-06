import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">Hello from Next 15!</main>
      <Link href="/posts">Go to the Blog</Link>
    </div>
  );
};

export default HomePage;
