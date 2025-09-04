import type { TitleProps } from "./TitleProps";

export default function Title({ title }: TitleProps) {
  return (
    <>
      <h1 className="text-3xl font-bold text-shadow-lg p-2 text-[#9be3dd]">
        <a href="/">{title}</a>
      </h1>
    </>
  );
}
