import { NextFooter } from "@/components/index";
import BlogNavbar from "./_components/BlogNavbar";

const blogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BlogNavbar />
      <main className="flex h-[calc(100vh-100px)] flex-col">{children}</main>
      <NextFooter />
    </>
  );
};

export default blogLayout;
