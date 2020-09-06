import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import CustomInput from './CustomInput'

// only if all the validations are met will the handleSubmit be activated
const validate = values => {
	const errors = {}

	if (!values.name) {
		errors.name = 'Mandatory field'
	}

	if (!values.lastname) {
		errors.lastname = 'Mandatory field'
	}

	return errors
}

class UserForm extends Component {
	render() {
		const { handleSubmit } = this.props
		return (
			<form onSubmit={handleSubmit}>
				<Field name="name" component={CustomInput} placeholder="name" title="Name" />
				<Field name="lastname" component={CustomInput} placeholder="last name" />
				<input type="submit" value="send" />
			</form>
		)
	}
}

export default reduxForm({
	form: 'user',
	validate
})(UserForm)