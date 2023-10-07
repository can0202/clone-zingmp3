import actionTypes from "../../shared/constant/ActionTypes";

const initState = {
  toggleMusic: false,
  isPlaying: false,
};

const settingsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SETTINGS:
      return {
        ...state,
        toggleMusic: action.payload,
      };
    case actionTypes.PLAY:
      return {
        ...state,
        isPlaying: action.flag,
      };

    default:
      return state;
  }
};

export default settingsReducer;
