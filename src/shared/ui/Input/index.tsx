import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ className, value, onChange, ...props }, ref) => {
  return (
    <input
      ref={ref} 
      className={cn(
        "w-full bg-transparent text-cream input-border rounded-xl py-3 px-4 caret-cream placeholder-cream placeholder:opacity-50 outline-none",
        className 
      )}
      value={value} 
      onChange={onChange} 
      {...props}
    />
  );
});

Input.displayName = "Input";
