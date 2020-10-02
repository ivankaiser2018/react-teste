import React from 'react';


const Contato = () => {

  return (
    <div className="contato">
      <h1>Preencha o Formulário:</h1>
      <div>
        <form>
          <label>Nome:<input type="text" name="nome" /></label>
          <br />
          <label>Email:<input type="email" name="email" /></label>
          <br />
          <label>Senha:<input type="password" name="senha" /></label>
          <br />
          <label>Confirm:<input type="password" name="confirmar" /></label>
          <br />
          <input id="input-enviar" type="button" value="Enviar" />
        </form>
      </div>

    </div >

  )

}
export default Contato;