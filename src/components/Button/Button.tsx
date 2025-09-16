import type { ButtonProps } from "./ButtonProps";

export default function Button({
  text,
  isSelected,
  onSelect,
  variant,
}: ButtonProps) {
  let primaryStyle;
  if (variant === "primary") {
    primaryStyle =
      "border-2 rounded-lg py-2 px-4 font-bold uppercase hover:underline underline-offset-4 text-accent-azure";
  } else if (variant === "secondary") {
    primaryStyle =
      "font-bold hover:underline underline-offset-4 text-accent-azure";
  }
  const selectedStyle = () => {
    if (!isSelected) return "";
    return "bg-accent-azure text-base";
  };

  return (
    <>
      <button
        onClick={onSelect}
        className={`${primaryStyle} ${selectedStyle()}`}
      >
        {text}
      </button>
    </>
  );
}
