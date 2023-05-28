/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import './style.css';

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
    // api.post("/users", usuario).then((response) => {
    //   console.log(response);
    // });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Cadastro de Usuário</h2>
        <div className="row">
          <span>Nome</span>
          <input type="text" name="name" required onChange={handleChange} />
        </div>
        <div className="row">
          <span>E-mail</span>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div className="row">
          <span>Endereço</span>
          <input type="text" name="username" required onChange={handleChange} />
        </div>
        <div className="row">
          <span>Telefone</span>
          <input type="text" name="phone" required onChange={handleChange} />
        </div>
        <div className="row">
          <button>Cadastrar</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
