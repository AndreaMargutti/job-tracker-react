import Title from "../Title/Title";
import type { ModalProps } from "./ModalProps";

export default function Modal({ isOpen }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10">
      <div className="border-4 border-accent-azure rounded-lg p-4 min-w-xl absolute top-[50%] left-[50%] -translate-[50%]">
        <Title title="Insert New Offer" />
        <form action="" method="POST">
          <div className="p-4 border-2 border-accent-azure rounded-lg flex justify-around items-center gap-4">
            <label htmlFor="" className="text-accent-azure uppercase font-bold">
              State
            </label>
            <select
              name=""
              id=""
              className="text-accent-azure grow border-1 p-2"
            >
              <option value="Sent">Sent</option>
              <option value="On-Going">On-Going</option>
              <option value="Offer">Offers</option>
            </select>
          </div>
          <div className="border-2 border-accent-azure text-accent-azure rounded-lg p-4 my-4 flex justify-around items-center gap-4">
            <label htmlFor="" className="font-bold uppercase">
              Job Title
            </label>
            <input type="text" className="grow border-1 p-2" />
          </div>
          <div className="flex gap-4 text-accent-azure">
            <div className="border-2 border-accent-azure rounded-lg p-4 my-4 flex gap-2 justify-around items-center">
              <label htmlFor="" className="font-bold uppercase">
                Company
              </label>
              <input type="text" className="border-1 p-2" />
            </div>
            <div className="text-accent-azure border-2 border-accent-azure rounded-lg p-4 my-4 flex gap-2 justify-around items-center">
              <label htmlFor="" className="font-bold uppercase">
                Place
              </label>
              <input type="text" name="" id="" className="border-1 p-2" />
            </div>
          </div>
          <div className="border-2 border-accent-azure rounded-lg p-4 my-4 min-h-50 flex flex-col gap-4 text-accent-azure">
            <label htmlFor="">Job Description</label>
            <input type="text" className="border-1 p-2 grow" />
          </div>
        </form>
      </div>
    </div>
  );
}
