import { prisma } from "@/app/utils/prisma";
import { notFound } from "next/navigation";

const selectAllFields = {
  id: true,
  title: true,
  content: true,
  imageUrl: true,

  createdAt: true,
  authorId: true,
  updatedAt: true,

  user: true,
};

export const getAllPosts = async () => {
  const data = await prisma.blogPost.findMany({ select: selectAllFields });

  return data;
};

export const getPostsByUser = async (userId: string) => {
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
};

export const getPostById = async (id: string) => {
  const data = await prisma.blogPost.findUnique({ where: { id }, select: selectAllFields });

  return data || notFound();
};
