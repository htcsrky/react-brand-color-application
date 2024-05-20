import Search from "./Search";
import Brand from "./Brand";
import { useContext } from "react";
import MainContext from "../MainContext";
import LazyLoad from "react-lazyload";

export default function Content() {
  const { brands } = useContext(MainContext);

  return (
    <main className="content">
      <header className="header">
        <Search />
      </header>
      <section className="brands">
        {brands.map((brand, key) => (
          <LazyLoad
            key={key}
            once={true}
            overflow={true}
            placeholder="Yükleniyor...."
          >
            <Brand brand={brand} />
          </LazyLoad>
        ))}
      </section>
    </main>
  );
}
