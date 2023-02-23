import { ButtonProps } from "../types/componetsTypes";

export function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      className={`p-2 rounded-md hover:ring-2 hover:ring-gray-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
