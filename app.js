import React from "react";
import ReactDOM from "react-dom/client";

// const main = React.createElement("h1",{id:"heading"},"Hello i this is ");

/*react element
const jsxmain = <h1 className="pankaj">hello thi is jsx</h1>
*/
// const jsxmain = <h1 className="pankaj">hello thi is jsx</h1> 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxmain);

const hear = (
    <h2>how are you
    </h2>
);


const Heading = () => (
    <div id="container">
    {hear}
    <h1>Namaste react</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
