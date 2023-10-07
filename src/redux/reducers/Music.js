import actionTypes from "../../shared/constant/ActionTypes";

const initState = {
  curSongId: null,
};

const musicReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_CUR_SONG_ID:
      return {
        ...state,
        curSongId: action.sId || null,
      };
    default:
      return state;
  }
};

export default musicReducer;
