// Imports
import "./CounterCard.css"

// Functions
const CounterCard = () => {
	return (
		<>
			<article className='counter'>
				<section className='counter__number'>
					<h1 className='counter__value'>0</h1>
				</section>
				<section className='counter__buttons'>
					<button className='counter__button'>Decrease</button>
					<button className='counter__button'>Increase</button>
				</section>
			</article>
		</>
	)
}

// Exports
export default CounterCard
