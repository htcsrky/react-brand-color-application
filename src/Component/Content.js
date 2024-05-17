import React, { useState } from "react";
import Search from "./Search";
import BrandsData from "../brands.json";
import Brand from "./Brand";

export default function Content() {
  const brandArray = [];
  Object.keys(BrandsData).map((key) => {
    brandArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandArray);
  return (
    <main className="content">
      <header className="header">
        <Search />
      </header>
      <section className="brands">
        {brands.map((brand, key) => (
          <Brand key={key} brand={brand} />
        ))}
      </section>
    </main>
  );
}
