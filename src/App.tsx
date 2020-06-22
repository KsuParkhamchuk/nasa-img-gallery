import React from 'react';

import './App.css';
import Header from './components/Header';
import CurrentImg from './components/CurrentImg'
import Catalog from './components/Catalog'
import { Route, Switch} from 'react-router-dom'



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
            <Route  path='/nasa-img-gallery' component={CurrentImg} />
            <Route  path='/catalog' component={Catalog} />
          </Switch>  
    </div>
    )
  }
}

export default App;



