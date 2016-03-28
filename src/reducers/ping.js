const initialState = {
  message: 'ping'
};

const ping = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_MESSAGE':
      return {
        ...state,
        message: action.message
      }
    default:
      return state;
  }
};

export default ping;