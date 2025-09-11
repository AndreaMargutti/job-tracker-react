import { useState } from "react";
import type { SearchBarProps } from "./SearchBarProps";

type SearchInputProps = {
  isActive: boolean;
  placeholder: string;
};

const SearchInput = ({ isActive, placeholder }: SearchInputProps) => {
  return (
    <div
      className={
        `transition-all duration-300 ease-out origin-right inline-block overflow-hidden ` +
        (isActive
          ? `opacity-100 scale-100 translate-x-0 w-64`
          : `opacity-0 scale-95 translate-x-2 w-0`)
      }
    >
      <input
        type="text"
        placeholder={placeholder}
        className="border-accent-azure border-3 p-1 w-64 focus:outline-accent-azure text-white placeholder:text-accent-azure"
        aria-hidden={!isActive}
        tabIndex={isActive ? 0 : -1}
      />
    </div>
  );
};

export default function SearchBar({ text }: SearchBarProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="flex items-center">
        <button onClick={() => setIsActive((prev) => !prev)}>
          <label className="p-2" style={{ color: "#9be3dd" }}>
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          </label>
        </button>
        <SearchInput isActive={isActive} placeholder={text} />
      </div>
    </>
  );
}
