import { LabelHTMLAttributes } from "react";

export default function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      {...props}
      className="block mb-1 text-sm font-medium text-gray-700"
    />
  );
}
