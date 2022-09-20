// Import React
import React from "react"

// Import ReactDOM
import ReactDOM from "react-dom/client"

// Import App
import App from "./App/App"

// Variable for root
const root = ReactDOM.createRoot(document.getElementById("root"))

// Render variable
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
