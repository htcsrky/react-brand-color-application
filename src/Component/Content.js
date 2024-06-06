import Search from "./Search";
import Brand from "./Brand";
import { useContext } from "react";
import MainContext from "../MainContext";
import LazyLoad from "react-lazyload";
import Download from "./Download";
import Loader from "./Loader";

export default function Content() {
  const { brands, selectedBrands } = useContext(MainContext);

  return (
    <main className="content">
      <header className="header">
        <Search />
        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className="brands">
        {brands.map((brand, key) => (
          <LazyLoad
            key={key}
            once={true}
            overflow={true}
            placeholder={<Loader />}
          >
            <Brand brand={brand} />
          </LazyLoad>
        ))}
      </section>
    </main>
  );
}
