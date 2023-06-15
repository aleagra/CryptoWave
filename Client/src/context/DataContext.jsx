import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

function DataContextProvider({ children }) {
  const [myData, setMyData] = useState(null);
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
    <DataContext.Provider value={{ myData, setMyData }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
