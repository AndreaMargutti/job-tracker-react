import Button from "../Button/Button";
import type { DetailsTabProps } from "./DetailsTabProps";

export default function DetailsTab({ isOpen, onClose }: DetailsTabProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10">
      <div className="border-4 rounded-lg p-4 min-w-xl absolute top-[50%] left-[50%] -translate-[50%] z-10 shadow-2xl">
        <h2 className="font-bold text-lg uppercase">Titolo Offerta</h2>
        <div className="flex justify-between">
          <h4>Nome Azienda</h4>
          <h5>Luogo Azienda</h5>
        </div>
        <div className="min-h-[20vh] border-2 rounded-md p-2 my-2">
          <p>Descrizione Offerta</p>
        </div>
        <div className="min-h-[10vh] border-2 rounded-md p-2 my-2">
          <p>Contatti Azienda</p>
        </div>
        <Button
          type="button"
          variant="secondary"
          text="Close"
          onSelect={onClose}
        />
      </div>
    </div>
  );
}
