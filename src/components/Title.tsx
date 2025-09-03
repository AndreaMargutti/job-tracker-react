type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return (
    <>
      <h1 className="text-3xl font-bold text-shadow-lg">
        <a href="/">{title}</a>
      </h1>
    </>
  );
}
