import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import TradesPage from "./pages/TradesPage";

const App: React.FC = () => {
  let previousRoute = localStorage.getItem("currentRoute");

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={TradesPage}>
          {previousRoute ? (
            <Redirect exact to={`/trades/${previousRoute}`} />
          ) : (
            <TradesPage />
          )}
        </Route>
        <Route exact path="/trades/:id" component={TradesPage} />
      </Switch>
    </div>
  );
};

export default App;
