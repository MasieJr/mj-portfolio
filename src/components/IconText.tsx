import { ComponentType } from "react";

type IconTextProps = {
  label: string;
  list: string;
  icon: ComponentType;
};

export default function IconText({ label, list, icon: Icon }: IconTextProps) {
  return (
    <div className="flex space-x-3">
      <Icon />
      <div>
        <p className="text-l code-font">{label}</p>
        <p className="handwritten ">{list}</p>
      </div>
    </div>
  );
}
