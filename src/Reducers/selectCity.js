const selectCity = (state = '', action) => {
  switch (action.type) {
    case 'SWITCH_CITY':
      return action.city
    default:
      return state
  }
}

export default selectCity;