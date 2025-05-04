import { IUser } from "@/app/_interfaces/user.interface";

export interface IBlogPostBase {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  authorId: string;

  createdAt: Date;
  updatedAt: Date;
}

export interface IBlogPostExtended extends IBlogPostBase {
  user: IUser;
}
