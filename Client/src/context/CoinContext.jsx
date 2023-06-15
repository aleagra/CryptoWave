import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const CoinContext = createContext();

function CoinContextProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const url =
    "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD&api_key=dcfdfec656ebe0c95f2f72a0aaa4e2d321e2f7e714606f80f98ad1b8a65d79d4";
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        setCoins(response.data.Data);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <CoinContext.Provider value={{ coins, setCoins }}>
      {children}
    </CoinContext.Provider>
  );
}

export default CoinContextProvider;
