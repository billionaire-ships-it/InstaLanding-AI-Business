// components/ui/button.tsx
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type ButtonVariant = "default" | "primary" | "secondary" | "ghost" | "danger" |"premium";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  default:
    "bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-gray-400",
  primary:
    "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300",
  secondary:
    "bg-gray-700 text-white hover:bg-gray-800 focus:ring-4 focus:ring-gray-600",
  ghost:
    "bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-2 focus:ring-gray-300",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-4 focus:ring-red-300",
    premium:
     "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "default",
      size = "md",
      loading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={clsx(
          "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-5 w-5 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
