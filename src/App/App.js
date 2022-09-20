// Imports
import "./App.css"
import CounterCard from "../CounterCard/CounterCard"

// Functions
const App = () => {
	return (
		<>
			<CounterCard number={100} />
			<CounterCard number={200} />
		</>
	)
}

// Exports
export default App
