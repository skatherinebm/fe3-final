import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {state, dispatch} = useContextGlobal()
  const myFavoriteDentists = state.data.filter((dentist)=>state.favoriteDentists.includes(dentist.id))
  //console.log(myFavoriteDentists)
  

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      {myFavoriteDentists.map((dentist)=>{
        return(<Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id}></Card>)
      }
      )}
      </div>
    </>
  );
};

export default Favs;
