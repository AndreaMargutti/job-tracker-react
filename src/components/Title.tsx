type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return (
    <>
      <h1 className="text-3xl font-bold underline underline-offset-3">
        {title}
      </h1>
    </>
  );
}
