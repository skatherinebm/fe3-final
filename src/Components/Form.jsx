import React, { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const handleChangeName = (event) => {
    setNombre(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre.length <= 5 ) {
      alert("Por favor verifique su información nuevamente");
      return;
    }
    if (!email.trim().includes("@") || !email.trim().includes(".")) {
      alert("Por favor verifique su información nuevamente");
      return;
    }
    return alert(
      `Gracias ${nombre} , te contactaremos cuanto antes via mail`
    );
  };

  return (
    <div>
      <form className="formulario" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChangeName} value={nombre} placeholder="Ingresa tu nombre"/>
        <input type="email" onChange={handleChangeEmail} value={email} placeholder="Ingresa tu email"/>
        <input className="submit" type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Form;
