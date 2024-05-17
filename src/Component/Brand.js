import React from "react";
import { getConstrastIQ } from "../helper";

export default function Brand({ brand }) {
  console.log(brand);
  return (
    <>
      <div className="brand">
        <h5>{brand.title}</h5>
        <div className="brand-colors">
          {brand.colors.map((color, key) => (
            <span
              style={{
                "--bgColor": `#${color}`,
                "--textColor": `${getConstrastIQ(color)}`,
              }}
              key={key}
            >
              {color}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
