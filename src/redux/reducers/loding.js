const LoadingReducer = (state = false, action) => {
    switch (action.type) {
      case "LOADING_SET_LOAD":
        return state = action.payload;
      default:
        return state;
    }
  };
  
  export default LoadingReducer;