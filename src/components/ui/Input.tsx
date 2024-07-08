import { cn } from "@/utils/cn";
import React, { forwardRef } from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password" | "email" | "number";
  className?: string;
}

const Input = ({ className, type, ...props }: InputProps) => {
  return (
    <input
      type={type}
      className={cn(
        "w-full rounded-md border-1 border-subText px-4 py-2",
        className,
      )}
      {...props}
    />
  );
};

Input.displayName = "Input";

export default Input;
