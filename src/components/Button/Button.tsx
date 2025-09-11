import type { ButtonProps } from "./ButtonProps";

export default function Button({ text, isSelected, onSelect }: ButtonProps) {
  const selectedStyle = () => {
    if (!isSelected) return "";

    return "bg-accent-azure text-base";
  };

  return (
    <>
      <button
        onClick={onSelect}
        className={`border-2 rounded-lg py-2 px-4 font-bold uppercase hover:underline underline-offset-4 text-accent-azure ${selectedStyle()}`}
      >
        {text}
      </button>
    </>
  );
}
