//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import CreateLogoForm from "./component/CreateLogoForm.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home />);

