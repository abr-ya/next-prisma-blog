import { Button } from "@/components/index";
import Link from "next/link";

const BlogNavbar = () => {
  return (
    <header>
      <nav className="py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/">
            <div className="text-2xl font-semibold">
              Home<span className="text-blue-500">Page</span>
            </div>
          </Link>

          <Link href="/posts">
            <h1 className="text-2xl font-semibold">
              My<span className="text-blue-500">Next15</span>Blog
            </h1>
          </Link>

          <div className="hidden sm:flex items-center gap-6">
            <Link className="text-md font-medium hover:text-blue-500 transition-colors" href="/posts">
              Posts
            </Link>
            <Link className="text-md font-medium hover:text-blue-500 transition-colors" href="/dashboard">
              Dashboard
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          todo: <Button>Login</Button>
        </div>
      </nav>
    </header>
  );
};

export default BlogNavbar;
