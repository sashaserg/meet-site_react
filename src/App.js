import React, { Component } from 'react';
import './App.css';
import './App_sass.sass';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Users from './pages/Users/Users'
import Login from './pages/Login/Login'
import UserProfile from './pages/UserProfile/UserProfile'
import Photo from './pages/Photo/Photo'
import NotFound from './pages/NotFound/NotFound'
import DefPage from './pages/DefPage/DefPage'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'

// Fontawesome import
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faBolt, faCogs, faSearch, faHome, faUser, faEnvelope, faGift, faPlus, faPlusSquare} from '@fortawesome/free-solid-svg-icons'
library.add(faCoffee, faBolt, faCogs, faSearch, faHome, faUser, faEnvelope, faGift, faPlus, faPlusSquare);
// END Fontawesome import

class App extends Component {
  render() {
    return (
        <Router>
          <div id={'app'}>
            <Header/>
              <div className={'contentWrap'}>
                  <div className={'routerWrap'}>
                      <Switch>
                          <Route exact path='/' component={(props) => <Home {...props} />}/>
                          <Route path='/login' component={(props) => <Login {...props} />}/>
                          <Route exact path="/users" component={() => <DefPage component = {Users} />} />
                          <Route path="/users/:id" component={() => <DefPage component = {UserProfile}/>} />
                          <Route path="/photo/:id" component={() => <DefPage component = {Photo}/>} />
                          <Route component={NotFound} />
                      </Switch>
                  </div>
              </div>
          </div>
        </Router>
    );
  }
}

export default App;
