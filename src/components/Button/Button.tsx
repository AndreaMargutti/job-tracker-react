import type { ButtonProps } from "./ButtonProps";

export default function Button({ text }: ButtonProps) {
  return (
    <>
      <button className="font-bold uppercase hover:underline underline-offset-4 text-[#9be3dd]">
        {text}
      </button>
    </>
  );
}
