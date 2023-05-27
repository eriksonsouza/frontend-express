import React, { useState } from "react";
import api from "../service/api";
import "./style.css";

function Register() {
  const [usuario, setUsuario] = useState({});

  function handleChange(e) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(usuario);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Cadastro de Usuário</h2>
        <div className="row">
          <span>Nome</span>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className="row">
          <span>E-mail</span>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div className="row">
          <span>Username</span>
          <input type="text" name="username" onChange={handleChange} />
        </div>
        <div className="row">
          <span>Password</span>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div className="row">
          <span>Phone</span>
          <input type="text" name="phone" onChange={handleChange} />
        </div>
        <div className="row">
          <button>Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
