import React from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import TradesPage from "./pages/TradesPage";

const App: React.FC = () => {
  // console.log(history);

  const history = useHistory();
  console.log(history);

  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <Redirect exact to="/trades/1" />
        </Route>
        <Route exact path="/trades/:id" component={TradesPage} />
      </Switch>
    </div>
  );
};

export default App;
