import Title from "../Title/Title";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center shadow-md px-8">
        <Title title="Job Tracker" />
        <div className="*:mx-2 uppercase grow flex justify-around max-w-1/2">
          <a href="#" className="hover:underline underline-offset-4">
            Sent
          </a>
          <a href="#" className="hover:underline underline-offset-4">
            On-Going
          </a>
          <a href="#" className="hover:underline underline-offset-4">
            Offers
          </a>
        </div>
      </nav>
    </>
  );
}
