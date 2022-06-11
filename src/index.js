import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.js";
import Reset from "./generic/resetCSS.js";
import Base from "./styles/Base.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Reset />
		<Base />
		<App />
	</React.StrictMode>
);
