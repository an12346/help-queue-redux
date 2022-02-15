export default (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
    case 'ADD_TICKET':
      return Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          id: id
        }
      });
      case 'DELETE_TICKET':
        let newState = { ...state}; //make copy of state
        delete newState[id]; //remove the key-value pair that corresponds to the action
        return newState;
    default:
      return state;
  }
};

//A reducer takes two arguments: the current state, action to alter current state
//You must return a new state object every time
// (state = {}, action)
//reducers use switch cases ad pure functions

/*The first parameter accepts the current state as an argument. It's typical for that state to have a default value. (In the example above, it is {}, but it could be another type of object as well.)
The second parameter accepts an object as an argument. This object contains a type property that determines the action that should be taken. This object may contain other properties that are needed to update the current state.*/