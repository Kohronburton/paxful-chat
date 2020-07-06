import React, { useEffect } from "react";
import { Route, Switch, useHistory, useParams } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import TradesPage from "./pages/TradesPage";

const App: React.FC = () => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      history.goBack();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={TradesPage} />

        <Route exact path="/trades/:id" component={TradesPage} />
      </Switch>
    </div>
  );
};

export default App;
