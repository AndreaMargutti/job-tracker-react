import Title from "../Title/Title";
import type { ModalProps } from "./ModalProps";

export default function Modal({ isOpen }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10">
      <div className="border-4 border-accent-azure rounded-lg p-4 min-w-xl absolute top-[50%] left-[50%] -translate-[50%]">
        <Title title="Insert New Offer" />
        <form action="" method="POST">
          <div>
            <label htmlFor="">State</label>
            <select name="" id="">
              <option value="Sent">Sent</option>
              <option value="On-Going">On-Going</option>
              <option value="Offer">Offers</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Job Title</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">Company</label>
            <input type="text" />
            <label htmlFor="">Place</label>
            <input type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Job Description</label>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
}
