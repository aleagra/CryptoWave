import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [myData, setMyData] = useState(null);
  const [amount, setAmount] = useState(1000);
  useEffect(() => {
    const storedData = localStorage.getItem("myData");
    if (storedData) {
      setMyData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    if (myData !== null) {
      localStorage.setItem("myData", JSON.stringify(myData));
    }
  }, [myData]);

  return (
    <DataContext.Provider value={{ myData, setMyData, amount, setAmount }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
