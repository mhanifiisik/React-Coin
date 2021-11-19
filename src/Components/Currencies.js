import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function Currencies() {
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filterText = coin.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  useEffect(() => {
    axios(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((res) => {
        setCoin(res.data);
        console.log(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <section>
      <div className="flex left-2 justify-center max-w-full items-center text-center p-5">
        <input
          type="text"
          onChange={handleChange}
          className="focus:outline-none focus:ring font-bold text-xl p-1   rounded w-2xl h-7 items-screcth w-xl focus:border-blue-500 text-black placeholder-black"
          placeholder="Search Coins"
        />
      </div>
      <div className="grid grid-cols-1 gap-5  p-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:container 2xl:mx-auto z-0">
        {filterText.map((item) => {
          return (
            <div
              key={item.id}
              className="w-full h-80 border-2 bg-regal-whitee border-black rounded-lg sahdow-lg overflow-hidden flex flex-col justify-between p-5  transform hover:scale-110 motion-reduce:transform-none"
            >
              <div className="flex flex-row-reverse items-center justify-between gap-1">
                <img src={item.image} className="max-h-12 max-w-12" />
                <div className="flex flex-row uppercase">
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <h1 className="text-xs font-thin">{item.symbol}</h1>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="text-xl font-bold">${item.current_price}</div>
              </div>
              <div className="w-full bg-regal-segreen text-white dark:bg-regal-bluee">
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col uppercase">
                    <div className="flex flex-col ">
                      <p>24h High</p>
                      <p>${item.high_24h}</p>
                    </div>
                    <div className="flex flex-col">
                      <p>24h Low</p>
                      <p>${item.low_24h}</p>
                    </div>
                  </div>
                  <div className="flex flex-col uppercase">
                    <div className="flex flex-col">
                      <p>Market Cap</p>
                      <p>${item.market_cap}</p>
                    </div>
                    <div className="flex flex-col ">
                      <p>Volume 24h</p>
                      <p>${item.total_volume}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                {item.price_change_percentage_24h < 0 ? (
                  <div className="flex flex-row justify-center items-center bg-red-500">
                    <FaChevronDown size={40} color={"white"} />
                    <p className="text-white font-bold">
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-row justify-center items-center pr-1 bg-green-500">
                    <FaChevronUp size={40} color={"white"} />
                    <p className="text-white font-bold">
                      {item.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Currencies;
