import Button from "../Button/Button";
import Title from "../Title/Title";

export default function Navbar() {
  const navButtons = [
    { id: 1, text: "Sent" },
    { id: 2, text: "On-Going" },
    { id: 3, text: "Offers" },
  ];

  return (
    <>
      <nav className="flex justify-between items-center shadow-md px-8">
        <Title title="Job Tracker" />
        <div className="*:mx-2 uppercase grow flex justify-around max-w-1/2">
          {navButtons.map((button) => (
            <Button key={button.id} text={button.text} type="button" />
          ))}
        </div>
      </nav>
    </>
  );
}
