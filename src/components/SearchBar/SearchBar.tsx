import type { SearchBarProps } from "./SearchBarProps";

export default function SearchBar({ text }: SearchBarProps) {
  return (
    <>
      <div>
        <label className="p-2">
          <i className="fa-solid fa-magnifying-glass fa-lg"></i>
        </label>
        <input
          type="text"
          placeholder={text}
          className="border-red-500 border-1 placeholder:pl-2"
        />
      </div>
    </>
  );
}
