import actionTypes from "../../shared/constant/ActionTypes";
import * as apis from "../../api";

export const getHome = () => async (dispatch) => {
  try {
    const response = await apis.getHome();
    if (response.data.err === 0) {
      dispatch({
        type: actionTypes.GET_HOME,
        dataHome: response.data.data.items,
      });
    } else {
      dispatch({
        type: actionTypes.GET_HOME,
        dataHome: null,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_HOME,
      dataHome: null,
    });
  }
};
