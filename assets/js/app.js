// import { log, backgroundRed } from "./tools";
import "../css/app.scss";

import _ from "lodash";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import $ from 'jquery';

const component = () => {
  const element = document.createElement("div");
  element.className = "hello";
  element.innerHTML = _.join(["Hellooooo", "webpack"], " ");
  return element;
};
document.body.appendChild(component());

const button = document.getElementById("lazy-loading-button");
button.onclick = () =>
  import(/* webpackChunkName: "log" */ "./tools").then((module) => {
    const { log, backgroundRed } = module;
    log("chicken");
    backgroundRed();
  });
