import type { TitleProps } from "./TitleProps";

export default function Title({ title }: TitleProps) {
  return (
    <>
      <h1 className="text-shadow-lg p-2 text-accent-azure">
        <a href="/">{title}</a>
      </h1>
    </>
  );
}
