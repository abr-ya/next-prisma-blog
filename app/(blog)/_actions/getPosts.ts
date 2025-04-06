import { prisma } from "@/app/utils/prisma";

export const getAllPosts = async () => {
  const data = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,

      createdAt: true,
      authorId: true,
      updatedAt: true,

      user: true,
    },
  });

  return data;
};
