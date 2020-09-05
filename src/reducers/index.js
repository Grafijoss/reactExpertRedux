// for convention we put first the name of the module SLASH and the name of the action
// action-types names
// are string that are going to describe the action that we will execute
// en mvc seria como el nombre del controlador
const INCREMENTAR = 'CONTADOR/INCREMENTAR'
const DECREMENTAR = 'CONTADOR/DECREMENTAR'
const SETEAR = 'CONTADOR/SETEAR'

// action-creators
// are functions that will create objects with the format that reducers accept to dispatch the actions
// by convention we should put the name in lowercase

export const incrementar = () => ({
	type: INCREMENTAR
})

export const decrementar = () => ({
	type: DECREMENTAR
})

// we can add data with the payload property
export const setear = payload => ({
	type: SETEAR,
	payload
})

const initialState = 0


// Reducer
// all of our reducers have to return immutable objects
// export default function (state = initialState, action-creators) {
export default function (state = initialState, action) {
	// console.log(action)
	// action types
	switch (action.type) {
		case INCREMENTAR:
			return state + 1
		case DECREMENTAR:
			return state - 1
		case SETEAR:
			return action.payload
		default:
			return state
	}
}