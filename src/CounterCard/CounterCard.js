// Imports
import "./CounterCard.css"

// Functions
const CounterCard = (props) => {
	const increase = () => {
		let test = document.getElementById("js--number")
		test.innerText = parseInt(test.innerText) + 1
	}

	const decrease = () => {
		let test = document.getElementById("js--number")
		test.innerText = parseInt(test.innerText) - 1
	}

	return (
		<>
			<article className='counter'>
				<section className='counter__number'>
					<h1 className='counter__value' id='js--number'>
						{props.number}
					</h1>
				</section>
				<section className='counter__buttons'>
					<button onClick={decrease} className='counter__button counter__button--decrease'>
						Decrease
					</button>
					<button onClick={increase} className='counter__button counter__button--increase'>
						Increase
					</button>
				</section>
			</article>
		</>
	)
}

// Exports
export default CounterCard
