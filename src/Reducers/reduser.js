const reduser = (state = 0, action) => {
  switch (action.type) {
    case 'ACTION':
      return action.id
    default:
      return state
  }
}

export default reduser;