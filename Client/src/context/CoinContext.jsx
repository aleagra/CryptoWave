import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CoinContext = createContext();

function CoinContextProvider({ children }) {
  const [coins, setCoins] = useState([]);
  const apiKey = import.meta.env.VITE_CRYPTO_API_KEY;
  const url =
    `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD&api_key=${apiKey}`;

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
