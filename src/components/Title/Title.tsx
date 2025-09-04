import type { TitleProps } from "./TitleProps";

export default function Title({ title }: TitleProps) {
  return (
    <>
      <h1 className="text-3xl font-bold text-shadow-lg p-2 text-[#A5C9CA]">
        <a href="/">{title}</a>
      </h1>
    </>
  );
}
