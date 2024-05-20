import React, { useContext } from "react";
import { getConstrastIQ } from "../helper";
import MainContext from "../MainContext";
import Clipboard from "react-clipboard.js";

export default function Brand({ brand }) {
  const { selectedBrands, setSelectedBrands, setCopied } =
    useContext(MainContext);

  const toogleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const setColor = (color) => {
    setCopied(color);
  };

  return (
    <>
      <div
        className={`brand ${
          selectedBrands.includes(brand.slug) ? "selected" : ""
        }`}
      >
        <h5 onClick={toogleSelected}>{brand.title}</h5>
        <div className="brand-colors">
          {brand.colors.map((color, key) => (
            <Clipboard
              component="span"
              style={{
                "--bgColor": `#${color}`,
                "--textColor": `${getConstrastIQ(color)}`,
              }}
              key={key}
              data-clipboard-text={color}
              onSuccess={() => setColor(color)}
            >
              {color}
            </Clipboard>
          ))}
        </div>
      </div>
    </>
  );
}
