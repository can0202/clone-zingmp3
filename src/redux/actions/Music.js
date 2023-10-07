import actionTypes from "../../shared/constant/ActionTypes";

export const setCurSongId = (sId) => ({
  type: actionTypes.SET_CUR_SONG_ID,
  sId: sId,
});
