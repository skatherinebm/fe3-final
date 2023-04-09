import { useContext, useEffect, useReducer} from "react";
import { createContext } from "react";

const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "black",
  },
}

const getFavoriteDentistsFromLocalStorage = () => {
  const localData = localStorage.getItem("favoriteDentists");
  return localData ? JSON.parse(localData) : [];
}
const initialState = { theme: themes.light, data: [], favoriteDentists: getFavoriteDentistsFromLocalStorage() };

const ContextGlobal = createContext();
export const useContextGlobal = ()=> useContext(ContextGlobal)


const reducerFunction= (state, action) =>{
  switch(action.type) {
    case "changeTheme":
      return {...state, theme: JSON.stringify(state.theme) === JSON.stringify(themes.light) ? themes.dark : themes.light };
    case "setData":
    return {...state, data: action.payload};
    case "setFavoriteDentists":
      if (state.favoriteDentists.some(dentist=> dentist === action.payload)) {
        return {...state};
      }
      localStorage.setItem("favoriteDentists", JSON.stringify([...state.favoriteDentists, action.payload]));
      return {...state, favoriteDentists: [...state.favoriteDentists, action.payload] };
    default:
    return state
  }
}

export const ContextGlobalProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducerFunction, {
    data: initialState.data,
    theme: initialState.theme,
    favoriteDentists: initialState.favoriteDentists
  })

  useEffect(() => {
   const traerData = async () => {
      const data = await fetch(`https://jsonplaceholder.typicode.com/users`);
      const json = await data.json();
      dispatch({type: "setData", payload: json})
    };
    traerData();
  }, []
  );

  return (
    <ContextGlobal.Provider value={{ state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobalProvider;
