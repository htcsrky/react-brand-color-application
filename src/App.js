import "./App.css";
import Content from "./Component/Content";
import Copied from "./Component/Copied";
import Sidebar from "./Component/Sidebar";
import MainContext from "./MainContext";
import BrandsData from "./brands.json";
import { useEffect, useState } from "react";

function App() {
  const brandArray = [];
  Object.keys(BrandsData).map((key) => {
    brandArray.push(BrandsData[key]);
  });
  const [brands, setBrands] = useState(brandArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCopied(false);
    }, 500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [copied]);

  useEffect(() => {
    setBrands(brandArray.filter((brand) => brand.title.toLowerCase().includes(search)));
  }, [search]);

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  };

  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Content />
      </MainContext.Provider>
    </>
  );
}

export default App;
