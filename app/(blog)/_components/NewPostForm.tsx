import { Input, Label, SubmitButton, Textarea } from "@/components/index";
import { createPostAction } from "../_actions/createPost";

const NewPostForm = () => (
  <form className="flex flex-col gap-4" action={createPostAction}>
    <div className="flex flex-col gap-2">
      <Label>Title</Label>
      <Input name="title" required type="text" placeholder="Title" />
    </div>
    <div className="flex flex-col gap-2">
      <Label>Content</Label>
      <Textarea name="content" required placeholder="Content" />
    </div>

    <div className="flex flex-col gap-2">
      <Label>Image URL</Label>
      <Input name="url" required type="url" placeholder="Image url" />
    </div>

    <SubmitButton title="Create" />
  </form>
);

export default NewPostForm;
