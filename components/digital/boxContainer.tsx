import React from "react";

type Props = {
  clicked: boolean;
  className?:string;
  style?: React.CSSProperties;
  unMount: () => void;
  handleSelect: () => void;
};
export default function BoxContainer({
  style,
  className,
  clicked,
  unMount,
  handleSelect,
}: Props) {
  return (
    <div
      className={className}
      style={{
        ...style,
        animation: clicked ? "move-center 1s" : "",
      }}
      onClick={() => {
        unMount();
        setTimeout(() => {
          handleSelect();
        }, 800);
      }}
    ></div>
  );
}
