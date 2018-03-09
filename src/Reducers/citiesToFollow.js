const citiesToFollow = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CITY':
      return [
        ...state,
        {
          id: action.id,
          city: action.city,
        }
      ]
    default:
      return state
  }
}
 
export default citiesToFollow;