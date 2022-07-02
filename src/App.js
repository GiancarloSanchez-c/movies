import { Fragment } from 'react'
import { Route, Switch } from "react-router-dom";
import Detail from './components/Detail';
import Favorites from './components/Favorites';
import Home from "./components/Home";

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/detail/:id' component={Detail} />
        <Route path='/favorites' component={Favorites} />
      </Switch>
    </Fragment>
  );
}

export default App;
