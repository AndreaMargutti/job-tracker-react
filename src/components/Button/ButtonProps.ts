export type ButtonProps = {
  type: "button" | "link";
  text: string;
  isSelected?: boolean;
  onSelect?: () => void;
};
