import { useState } from "react";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import Title from "../Title/Title";

export default function Navbar() {
  const [selectedButtonId, setSelectedButtonId] = useState<number | null>(null);

  const navButtons = [
    { id: 1, text: "Sent" },
    { id: 2, text: "On-Going" },
    { id: 3, text: "Offers" },
  ];

  const handleButtonSelect = (buttonId: number) => {
    setSelectedButtonId(buttonId);
  };

  return (
    <>
      <nav className="flex justify-between items-center shadow-lg shadow-cyan-500/50  px-8 min-h-20 relative bg-black">
        <div className="flex">
          <Title title="Trackly" />
          <SearchBar text="Search" />
        </div>
        <div className="*:mx-2 uppercase grow flex justify-around max-w-1/2">
          {navButtons.map((button) => (
            <Button
              key={button.id}
              text={button.text}
              type="button"
              isSelected={selectedButtonId === button.id}
              onSelect={() => handleButtonSelect(button.id)}
            />
          ))}
        </div>
      </nav>
    </>
  );
}
