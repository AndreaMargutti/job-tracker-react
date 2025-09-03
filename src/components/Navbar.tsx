import Title from "./Title";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center">
        <Title title="Job Tracker" />
        <div className="*:mx-2">
          <a href="#">Sent</a>
          <a href="#">On-Going</a>
          <a href="#">Offers</a>
        </div>
      </nav>
    </>
  );
}
