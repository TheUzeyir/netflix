import React, { useEffect, useMemo, useState } from "react";
import Header from "../../layout/header/Header";
import style from "./productPage.module.css";
import { FaPlay, FaPlus } from "react-icons/fa";
import data from "../../data.json";
import Footer from "../../layout/footer/Footer";

interface DataItem {
  id: number;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
}

const ProductPage: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [filteredInput, setFilteredInput] = useState<DataItem[]>([]);
  const [filteredData, setFilteredData] = useState<DataItem[]>(data);

  const randomIndex = Math.floor(Math.random() * data.length);
  const selectedItem = data[randomIndex];

  const filterZombie = () => {
    setFilteredData(data.filter((item) => item.category === "Zombie"));
  };
  const filterHorror = () => {
    setFilteredData(data.filter((item) => item.category === "Horror"));
  };
  const filterRomantic = () => {
    setFilteredData(data.filter((item) => item.category === "Romantic"));
  };
  const showAll = () => {
    setFilteredData(data);
  };

  useEffect(() => {
    if (input.trim() !== "") {
      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(input.trim().toLowerCase())
      );
      setFilteredInput(filtered);
    } else {
      setFilteredInput([]);
    }
  }, [input]);

  const clickFilm = () => {
    console.log("Film clicked");
  };

  const ProductPageProductsInfoCard=useMemo(()=>{
    return <div className={style.productPage_products_info}>
    <img
      src={selectedItem.thumbnail}
      alt={selectedItem.title}
      className={style.productPage_products_info_img}
    />
    <div className={style.productPage_products_info_descBox}>
      <h2 className={style.productPage_products_info_descBox_title}>
        {selectedItem.title}
      </h2>
      <p className={style.productPage_products_info_descBox_desc}>
        {selectedItem.description}
      </p>
      <div className={style.productPage_products_info_btnBox}>
        <button className={style.productPage_products_info_btnBox_btn}>
          <FaPlay /> Play
        </button>
        <button className={style.productPage_products_info_btnBox_btn}>
          <FaPlus /> My List
        </button>
      </div>
    </div>
  </div>
  },[])

  return (
    <div className={style.productPage}>
      <Header />
      <div className={style.productPage_container}>
        {ProductPageProductsInfoCard}
        <div className={style.productPage_header}>
          <input
            type="text"
            className={style.searchBar}
            placeholder="Search..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className={style.productPage_header_products}>
            <div className={style.productPage_header_products_btnContainer}>
              <button
                className={style.productPage_header_products_btnContainer_btn}
                onClick={showAll}
              >
                All
              </button>
            </div>
            <div className={style.productPage_header_products_btnContainer}>
              <button
                className={style.productPage_header_products_btnContainer_btn}
                onClick={filterHorror}
              >
                Horror
              </button>
            </div>
            <div className={style.productPage_header_products_btnContainer}>
              <button
                className={style.productPage_header_products_btnContainer_btn}
                onClick={filterRomantic}
              >
                Romantic
              </button>
            </div>
            <div className={style.productPage_header_products_btnContainer}>
              <button
                className={style.productPage_header_products_btnContainer_btn}
                onClick={filterZombie}
              >
                Zombie
              </button>
            </div>
          </div>
        </div>
        {input.trim() !== "" && filteredInput.length === 0 ? (
          <p className={style.inputNoDataFoundText}>No Data Found</p>
        ) : input.trim() !== "" ? (
          <div className={style.searchResults}>
            {filteredInput.map((item) => (
              <div key={item.id} className={style.searchResults_item}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className={style.searchResults_item_img}
                />
                <h2 className={style.searchResults_item_title}>{item.title}</h2>
              </div>
            ))}
          </div>
        ) : null}
        <div className={style.productPage_products}>
        <h2>Popular On Netflix</h2>
          <div className={style.productPage_products_box} onClick={clickFilm}>
            {filteredData.map((item) => (
              <div
                className={style.productPage_products_box_card}
                key={item.id}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className={style.productPage_products_box_card_img}
                />
                <p className={style.productPage_products_box_card_title}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductPage;