export type ButtonProps = {
  type: "button" | "link";
  variant: "primary" | "secondary";
  text: string;
  isSelected?: boolean;
  onSelect?: () => void;
};
