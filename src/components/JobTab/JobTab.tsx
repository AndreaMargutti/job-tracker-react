import { useState } from "react";
import Button from "../Button/Button";
import DetailsTab from "../DetailsTab/DetailsTab";

export default function JobTab() {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const toggleDetails = () => {
    setIsDetailsOpen((prev) => !prev);
  };

  return (
    <section className="p-4 pt-0">
      <div className="bg-accent-gray rounded-md p-2 mb-4 shadow-md/45 shadow-accent-azure">
        <h2 className="font-bold text-lg uppercase">TITOLO OFFERTA</h2>
        <div className="flex gap-2 mb-2">
          <h4>Nome Azienda</h4>
          <p>Luogo</p>
        </div>
        <Button
          type="button"
          text="View Details"
          variant="secondary"
          isSelected={false}
          onSelect={toggleDetails}
        />
      </div>
      {/*TODO: Insert Job Details Component Here */}
      <DetailsTab isOpen={isDetailsOpen} onClose={toggleDetails} />
    </section>
  );
}
