const initialState = {
  message: 'pong'
};

const pong = (state = initialState, action) => {
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

export default pong;