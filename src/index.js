import "bootstrap/dist/css/bootstrap.min.css";
import "mdbootstrap/css/bootstrap.css";
import "mdbootstrap/css/mdb.css";

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { App } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
