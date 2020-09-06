import React, { Component } from 'react';
import { connect } from 'react-redux'
// import { incrementar, decrementar, setear } from './reducers'
import UserForm from './components/UserForm'
import './App.css';

class App extends Component {

	// handleChange = e => {
	// 	const { name, value } = e.target
	// 	this.setState({
	// 		[name]: value
	// 	})
	// }

	// handleSetear = () => {
	// 	const { setear } = this.props
	// 	const { valor } = this.state
	// 	setear(Number(valor))
	// }

	handleSubmit = payload => {
		// preventDefault(e) is triggered by default by reduxform
		console.log('success form')
		console.log(payload)
	}

	render() {
		// const { incrementar, decrementar, valor } = this.props
		// console.log(this.state)

		return (
			<div className="App" >
				<UserForm onSubmit={this.handleSubmit} />
			</div>
		)
	}
}


// filters the data that is given to the component so that it works
const mapStateToProps = state => {
	// console.log(state)
	return {
		valor: state.contador,
	}
}

// it is a function that receives a dispatch it will be a charge of take the actions and become them in actions
const mapDispatchToProps = dispatch => ({
	// incrementar: () => dispatch(incrementar()),
	// decrementar: () => dispatch(decrementar()),
	// setear: payload => dispatch(setear(payload))
})

// CURRYNG 
export default connect(mapStateToProps, mapDispatchToProps)(App);
