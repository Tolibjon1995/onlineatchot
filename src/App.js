import Menu from "./components/Menu";

import { Route, Switch } from 'react-router-dom';
import Admin from "./components/Admin";

function App() {
  return (
    <div>
      
        <Switch>
          <Route path='/' exact component={Menu}/>
          <Route path='/admin' exact component={Admin}/>
        </Switch>
      
    </div>
  );
}

export default App;
