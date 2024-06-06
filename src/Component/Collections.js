import React, { useContext, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import MainContext from "../MainContext";
import Download from "./Download";
import LazyLoad from "react-lazyload";
import Brand from "./Brand";
import { GrFormPreviousLink } from "react-icons/gr";

export default function Collections() {
  const { slugs } = useParams();
  const navigate = useNavigate();
  const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext);
  console.log(slugs);

  useEffect(() => {
    setSelectedBrands(slugs.split(","));
  }, []);

  const clearSelectedBrans = () => {
    selectedBrands([]);
    navigate('/');
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
              placeholder="Yükleniyor...."
            >
              <Brand brand={brand} />
            </LazyLoad>
          );
        })}
      </section>
    </main>
  );
}
