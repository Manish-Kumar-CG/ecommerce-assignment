import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [categoryOnlyData, setCategoryOnlyData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await axios("/api/Products");
      const productsData = res.data;
      setData(productsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getUniqueCategory = (data, property) => {
      const newVal = data?.map((elem) => elem[property]);
      return ["ALL",...new Set(newVal)];
    };
    setCategoryOnlyData(getUniqueCategory(data, "category") || []);
  }, [data]);

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts, categoryOnlyData }}>
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('ERROR');
  }
  return context;
};
