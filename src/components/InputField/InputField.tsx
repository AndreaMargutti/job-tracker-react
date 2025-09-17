import type { InputFieldProps } from "./InputFieldProps";

export default function InputField({ type, placeholder }: InputFieldProps) {
  return <input type={type} placeholder={placeholder} />;
}
