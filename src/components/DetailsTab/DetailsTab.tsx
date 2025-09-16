import type { DetailsTabProps } from "./DetailsTabProps";

export default function DetailsTab({ isOpen }: DetailsTabProps) {
  if (!isOpen) return null;
  return (
    <div className="border-4 rounded-lg p-4">
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
    </div>
  );
}
