import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/landingpage/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import SignUp from "./pages/signUp/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <LoginPage path="/login" />
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
