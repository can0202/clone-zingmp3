import actionTypes from "../../shared/constant/ActionTypes";

export const toggleListMusic = (isToggleMucis) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.SETTINGS, payload: isToggleMucis });
  };
};

export const play = (flag) => ({
  type: actionTypes.PLAY,
  flag,
});
