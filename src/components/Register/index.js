import React from "react";
import "./style.css";

function Register() {
  return (
    <div className="container">
      <form>
        <h2>Cadastro de Usuário</h2>
        <div className="row">
          <span>Nome</span>
          <input type="text" />
        </div>
        <div className="row">
          <span>E-mail</span>
          <input type="text" />
        </div>
        <div className="row">
          <span>Username</span>
          <input type="text" />
        </div>
        <div className="row">
          <span>Password</span>
          <input type="text" />
        </div>
        <div className="row">
          <span>Phone</span>
          <input type="text" />
        </div>
        <div className="row">
          <button>Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
