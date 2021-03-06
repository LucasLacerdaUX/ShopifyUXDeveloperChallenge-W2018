import React from "react";
import { render } from "react-dom";

import "./styles/styles.scss";
import "./index.scss";

import ACMEPanel from "./components/ACMEPanel";
import LoginPanel from "./containers/LoginPanel";

const App = () => (
  <main className="Wrapper">
    <LoginPanel />
    <ACMEPanel />
  </main>
);

render(<App />, document.getElementById("app"));
