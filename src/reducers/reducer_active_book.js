// reducers always receive the state and an action
// state arguemnt isn't application state, onlt the state this reducer is
// responsible for.

// ES6 syntax below: if state arrives undefined, set it to null.
// CRITICAL: NEVER MUTATE STATE IN A REDUCER, ONLY RETURN A NEW STATE
export default function(state = null, action) {
// switch is used because lol
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;

  }
  return state;

}
