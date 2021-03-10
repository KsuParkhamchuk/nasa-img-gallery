import React from 'react';

import './App.css';
import Header from './components/Header';
import CurrentImg from './components/CurrentImg'
import Catalog from './components/Catalog'
import WelcomePage from './components/WelcomePage'
import Authentication from './components/Authentification'
import Registration from './components/Registration'
import { Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      parentName: 'App'
    }
  }

 
  render() {
    return (
    <div>
      <Header />
          <Switch>
          <Route exact path='/' component={WelcomePage}/>
            <Route  path='/nasa-img-gallery' component={CurrentImg} />
            <Route  path='/catalog' component={Catalog} />
            <Route  path='/auth' component={Authentication} />
            <Route  path='/registration' component={Registration} />
          </Switch>  
    </div>
    )
  }
}

export default App;



