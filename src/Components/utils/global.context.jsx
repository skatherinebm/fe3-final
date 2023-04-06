import { useEffect, useState } from "react";
import { useMemo } from "react";
import { createContext } from "react";

export const initialState = { theme: "light", data: [] };

export const ContextGlobal = createContext(initialState);

export const ContextGlobalProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [theme, setTheme] = useState(initialState.theme);
  const [globalData, setGlobalData] = useState(initialState.data);

  const handleChangeTheme = () => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };

  useEffect(() => {
   const traerData = async () => {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const json = await data.json();
      setGlobalData(json);
    };
    traerData();
  }, []
  );



  return (
    <ContextGlobal.Provider value={{ theme, globalData, handleChangeTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobalProvider;
