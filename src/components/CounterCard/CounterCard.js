// Imports
import "./CounterCard.css"
import React from "react"

// Functions
class CounterCard extends React.Component {
	constructor() {
		super()
		this.state = { number: 0 }
	}

	increase = () => {
		this.setState({ number: (this.state.number += 1) })
	}

	decrease = () => {
		this.setState({ number: (this.state.number -= 1) })
	}

	render() {
		return (
			<>
				<article className='counter'>
					<section className='counter__number'>
						<h1 className='counter__value'>{this.state.number}</h1>
					</section>
					<section className='counter__buttons'>
						<button onClick={this.decrease} className='counter__button counter__button--decrease'>
							Decrease
						</button>
						<button onClick={this.increase} className='counter__button counter__button--increase'>
							Increase
						</button>
					</section>
				</article>
			</>
		)
	}
}

// Exports
export default CounterCard
