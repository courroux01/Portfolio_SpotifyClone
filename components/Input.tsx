import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, disabled, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          `
            flex
            gap-y-2
            w-full
            rounded-md
            bg-neutral-700
            border
            border-transparent
            p-3
            text-sm
            file:border-0
            file:bg-green-500
            file:rounded-md
            file:text-black
            file:text-sm
            file:hover:bg-green-500/75
            cursor-pointer
            placeholder:text-white
            disabled:cursor-not-allowed
            disabled:opacity-50
            focus:outline-none
        `,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
export default Input;
