import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './pages/login';
import Home from './pages/home';
import Headers from './pages/headers';
import Department_list from './pages/department_list';
function App() {
  return (
    <div>
    <Router>
      <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/headers">
          <Headers />
          </Route>
          <Route path="/department">
          <Department_list />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}
export default App;
