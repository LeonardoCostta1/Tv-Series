const codeReducer = (state = 0, action) => {
  switch (action.type) {
    case "CODE_ID":
      return action.code;
    default:
      return state;
  }
};

export default codeReducer;
