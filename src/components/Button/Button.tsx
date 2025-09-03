import type { ButtonProps } from "./ButtonProps";

export default function Button({ text }: ButtonProps) {
  return (
    <>
      <button className="uppercase hover:underline underline-offset-4">
        {text}
      </button>
    </>
  );
}
