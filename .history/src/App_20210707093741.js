import "./global.css";
import { BrowserRouter as Router, Route, Switch,  } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Result from "./pages/Result";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
        <ToastContainer autoClose={8000} position="bottom-left"/>
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/result">
            <Result />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
