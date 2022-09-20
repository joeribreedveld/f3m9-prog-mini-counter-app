// Imports
import "./CounterCard.css"

// Functions
const CounterCard = () => {
	return (
		<>
			<article className='counter'>
				<section className='counter__number'>0</section>
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
