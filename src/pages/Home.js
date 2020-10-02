import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'



const Home = () => {
  const history = useHistory();

  useEffect(() => {
    
    let token = localStorage.getItem('token');
    
     if (!token) {
      history.push('/user/login');
    } 
  }, [])

  return (
    <>
      <div className="home">
        <div id="conteudo-principal">
          <h1>Area Menus</h1>
        </div>
        <div id="conteudo-secundario">
          <h1>Area Principal </h1>
          <section>
            <ul>
              <li><a href="">link1</a></li>
              <li><a href="">link2</a></li>
              <li><a href="">link3</a></li>
              <li><a href="">link4</a></li>
            </ul>
          </section>
        </div>
        <div id="rodape">
          <h1>Area Rodapé</h1>
        </div>
      </div>
    </>




  )

}
export default Home;
