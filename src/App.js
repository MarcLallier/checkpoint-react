import React from 'react';
import {Route,Switch} from 'react-router-dom'

import GameList from "./components/GameList"
import Home from './screen/Home'
import GameDetails from './screen/GameDetails'

function App() {
  return (
    <div>
      <Switch >
       <Route exact path='/' component={Home} />
       <Route exact path='/gamelist' component={GameList} />
       <Route exact path='/gamelist/:id' component={GameDetails} />
      </Switch>

    </div>
  );
}

export default App;
