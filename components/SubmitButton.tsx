"use client";

import { FC } from "react";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

interface ISubmitButton {
  title?: string;
}

export const SubmitButton: FC<ISubmitButton> = ({ title }) => {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled size="lg">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button type="submit" size="lg">
          {title || "Submit"}
        </Button>
      )}
    </>
  );
};

export default SubmitButton;
