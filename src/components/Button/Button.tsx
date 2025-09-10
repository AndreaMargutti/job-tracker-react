import type { ButtonProps } from "./ButtonProps";

export default function Button({ text, isSelected, onSelect }: ButtonProps) {
  const selectedStyle = () => {
    if (!isSelected) return "";

    return "bg-[#9be3dd] text-black";
  };

  return (
    <>
      <button
        onClick={onSelect}
        className={`border-2 rounded-lg py-2 px-4 font-bold uppercase hover:underline underline-offset-4 text-[#9be3dd] ${selectedStyle()}`}
      >
        {text}
      </button>
    </>
  );
}
