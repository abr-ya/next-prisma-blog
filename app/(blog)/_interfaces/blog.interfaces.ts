import { IUser } from "@/app/_interfaces/user.interface";

export interface IBlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  authorId: string;

  user: IUser;

  createdAt: Date;
  updatedAt: Date;
}
