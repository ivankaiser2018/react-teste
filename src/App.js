import React, { Component } from 'react';
import Navegacao from './pages/Navegacao';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import Blog from './pages/Blog';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/Navegacao.css';
class App extends Component {

  render() {
    return (
      <Router>
        <div>

          <Navegacao />
          <Switch>


            <Route exact path="/"><Home />
            </Route>
            <Route path="/servicos"> <Servicos />
            </Route>
            <Route path="/contato"> <Contato />
            </Route>
            <Route path="/contato"> <Contato />
            </Route>
            <Route path="/blog"> <Blog />
            </Route>

          </Switch>

        </div>
      </Router>
    );

  }
}



export default App;


