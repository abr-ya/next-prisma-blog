"use client";

import Link from "next/link";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { type KindeUser, useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

import { buttonVariants } from "@/components/ui/button";

const BlogNavbar = () => {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  const renderUserBlock = (user: KindeUser<Record<string, string>> | null) =>
    user ? (
      <>
        <p>{user.given_name}</p>
        <LogoutLink className={buttonVariants({ variant: "secondary" })}>Logout</LogoutLink>
      </>
    ) : (
      <>
        <LoginLink className={buttonVariants()}>Login</LoginLink>
        <RegisterLink className={buttonVariants({ variant: "secondary" })}>Sign up</RegisterLink>
      </>
    );

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

        <div className="flex items-center gap-4">{renderUserBlock(user)}</div>
      </nav>
    </header>
  );
};

export default BlogNavbar;
