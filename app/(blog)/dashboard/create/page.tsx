import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/index";
import { NewPostForm } from "../../_components/index";

const CreatePostPage = () => (
  <div>
    <Card className="max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Create Post</CardTitle>
        <CardDescription>Create a new post to share with the world</CardDescription>
      </CardHeader>
      <CardContent>
        <NewPostForm />
      </CardContent>
    </Card>
  </div>
);

export default CreatePostPage;
