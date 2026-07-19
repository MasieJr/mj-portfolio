import { ComponentType } from "react";

type PaperButtonProps = {
  label: string;
  onClick: () => void;
  icon: ComponentType;
};

export default function PaperButton({
  label,
  onClick,
  icon: Icon,
}: PaperButtonProps) {
  return (
    <button
      className="handwritten text-gray-800 font-semibold py-3 px-6 rounded-lg  shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none transition-all"
      onClick={onClick}
    >
      <div className="flex space-x-3">
        {label} <Icon />
      </div>
    </button>
  );
}
