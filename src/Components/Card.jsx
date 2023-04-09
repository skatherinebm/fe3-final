import React from "react";
import { useContextGlobal } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContextGlobal();

  const addFav = (e) => {
    e.preventDefault()
    dispatch({ type: "setFavoriteDentists", payload: id });
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <Link to={`/detail/${id}`}>
      <div className="card" style={{background: state.theme.background, color: state.theme.font}}>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <img src="./images/doctor.jpg" alt={name} />

        <h1>{name}</h1>
        <h2>@{username}</h2>
        <h3>Id: {id}</h3>

        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      </div>
    </Link>
  );
};

export default Card;
