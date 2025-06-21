import { TextareaHTMLAttributes } from "react";

export default function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="w-full rounded-lg border border-gray-300 p-3 text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
