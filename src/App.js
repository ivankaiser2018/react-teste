import React, { Component } from 'react';
import Navegacao from './components/Navegacao';
import Routes from './constants/routes'
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import Blog from './pages/Blog';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import './css/Navegacao.css';
import Login from './pages/login';


class App extends Component {

  render() {
    return (
      <Router>
        <div>

      {/*     <Navegacao /> */}
          <Switch>


            <Route path={Routes.HOME} component={Home}/>

            <Route path={Routes.SERVICOS} component={Servicos}/>

            <Route path={Routes.CONTATO} component={Contato}/>

            <Route path={Routes.BLOG} component={Blog}/>

            <Route path={Routes.LOGIN} component={Login}/>

            <Redirect to={Routes.HOME} />
          </Switch>

        </div>
      </Router>
    );

  }
}



export default App;


