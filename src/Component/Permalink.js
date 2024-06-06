import React, { useContext, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import MainContext from "../MainContext";
import Download from "./Download";
import LazyLoad from "react-lazyload";
import ClipboardButton from "react-clipboard.js";
import { GrFormPreviousLink } from "react-icons/gr";
import { getConstrastIQ } from "../helper";
import { GrCopy } from "react-icons/gr";
import Loader from "./Loader";

export default function Permalink() {
  const { slugs } = useParams();
  const navigate = useNavigate();
  const { selectedBrands, setSelectedBrands, brands, setCopied } =
    useContext(MainContext);

  useEffect(() => {
    setSelectedBrands(slugs.split(","));
  }, []);

  const clearSelectedBrans = () => {
    selectedBrands([]);
    navigate("/");
  };

  const setColor = (color) => {
    setCopied(color);
  };
  return (
    <main className="content">
      <header className="header">
        <Link to="/" onClick={clearSelectedBrans} className="back-btn">
          <GrFormPreviousLink />
          All Button
        </Link>
        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className="brands">
        {selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return (
            <LazyLoad
              key={brand.slug}
              once={true}
              overflow={true}
              placeholder={<Loader />}
            >
              <div
                className={`brand ${
                  selectedBrands.includes(brand.slug) ? "per" : ""
                }`}
              >
                <h5>{brand.title}</h5>
                <div className="brand-colors">
                  {brand.colors.map((color, key) => (
                    <ClipboardButton
                      component={"span"}
                      style={{
                        "--bgColor": `#${color}`,
                        "--textColor": `${getConstrastIQ(color)}`,
                      }}
                      key={key}
                      data-clipboard-text={color}
                      onSuccess={() => setColor(color)}
                    >
                      <GrCopy />
                      {color}
                    </ClipboardButton>
                  ))}
                </div>
              </div>
            </LazyLoad>
          );
        })}
      </section>
    </main>
  );
}
