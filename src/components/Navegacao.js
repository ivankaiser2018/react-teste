import React from 'react';
import { Link } from 'react-router-dom';


const Navegacao = () => {

  return (
    <div className="navegation">
      <Link className="link1" to="/">Home</Link>
      <Link className="link2" to="/servicos">Serviços</Link>
      <Link className="link3" to="/contato">Contato</Link>
      <Link className="link4" to="/blog">Blog</Link>

    </div>


  )

}
export default Navegacao;