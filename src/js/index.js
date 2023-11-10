//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";
import Simplecounter from "./component/simpleCounter";




let counter = 0;

setInterval(function(){
   
    ReactDOM.render(<Simplecounter seconds={counter}/>, document.querySelector("#app"));
    counter ++;
},1000);
