import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./pages/landingpage/LandingPage";
import LoginPage from "./pages/login/LoginPage";
import SignUp from "./pages/signUp/SignUp";
import Product from "./pages/productList/Product";

import SubCategoryList from "./pages/subCategoryList/SubCatgoryList";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route exact path="/category/:slug">
            <SubCategoryList />
          </Route>
          <Route exact path="/product/:slug">
            <SubCategoryList />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
