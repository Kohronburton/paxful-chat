import React from "react";
import { Route, HashRouter, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import TradesPage from "./pages/TradesPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={TradesPage} />
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
