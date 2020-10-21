import React from "react";

interface Props {
  imgCount: number;
  timePerImg: number; // sec
  folderUrl?: string;
  toRight?: boolean;
}
export default function SlideComponent({
  imgCount,
  timePerImg,
  folderUrl,
  toRight,
}: Props) {
  return (
    <div
      style={{
        height: `100%`,
        minHeight: "20vw",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          position: "absolute",
          animation: toRight
            ? "to-right linear infinite"
            : "to-left linear infinite",
          animationDuration: `${imgCount * timePerImg}s`,
        }}
      >
        {new Array(imgCount).fill("").map((_v, i) => {
          return (
            <img
              key={i}
              src={`${folderUrl}/${i + 1}.jpg`}
              alt={_v + i}
              style={{
                padding: 8,
                height: "100%",
                minWidth: "20vw",
                objectFit: "cover",
              }}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          height: "100%",

          position: "absolute",
          transform: `translateX(${100}%)`,
          animation: toRight
            ? "to-right-2 linear infinite"
            : "to-left-2 linear infinite",
          animationDuration: `${imgCount * timePerImg}s`,
        }}
      >
        {new Array(imgCount).fill("").map((_v, i) => {
          return (
            <img
              key={i}
              src={`${folderUrl}/${i + 1}.jpg`}
              alt={_v + i}
              style={{
                padding: 8,
                minWidth: "20vw",
                height: "100%",
                objectFit: "cover",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
