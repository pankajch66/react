import React from "react";
import ReactDOM from "react-dom/client";

const main = React.createElement("h1",{id:"heading"},"Hello i this is ");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(main);