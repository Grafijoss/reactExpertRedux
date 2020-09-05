import React, { Component } from 'react';
import { connect } from 'react-redux'
import { incrementar, decrementar, setear } from './reducers'
import './App.css';

class App extends Component {

	handleChange = e => {
		const { name, value } = e.target
		this.setState({
			[name]: value
		})
	}

	handleSetear = () => {
		const { setear } = this.props
		const { valor } = this.state
		setear(Number(valor))
	}

	render() {
		const { incrementar, decrementar, valor } = this.props
		console.log(this.state)
		return (
			<div className="App" >
				<p>{valor}</p>
				<button onClick={incrementar}>incrementar</button>
				<button onClick={decrementar}>decrementar</button>
				<button onClick={this.handleSetear}>setear</button>
				<input name='valor' onChange={this.handleChange} />
			</div>
		)
	}
}


// filters the data that is given to the component so that it works
const mapStateToProps = state => {
	console.log(state)
	return {
		valor: state,
	}
}

// it is a function that receives a dispatch it will be a charge of take the actions and become them in actions
const mapDispatchToProps = dispatch => ({
	incrementar: () => dispatch(incrementar()),
	decrementar: () => dispatch(decrementar()),
	setear: payload => dispatch(setear(payload))
})

// CURRYNG 
export default connect(mapStateToProps, mapDispatchToProps)(App);
