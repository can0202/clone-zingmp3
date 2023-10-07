import actionTypes from "../../shared/constant/ActionTypes";

const initState = {
  banners: [],
  newRelease: [],
  albums: [],
  loveLife: [],
  remixDancer: [],
  mood: [],
  artists: [],
  newReleaseChart: [],
  top100: [],
  weekChartBanner: [],
  albumHot: [],
  liveRadio: [],
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME:
      return {
        ...state,
        banners:
          action.dataHome.find((item) => item.sectionType === "banner") || null,
        newRelease:
          action.dataHome.find((item) => item.sectionType === "new-release") ||
          null,
        albums:
          action.dataHome.find((item) => item.sectionId === "hEditorTheme") ||
          null,
        loveLife:
          action.dataHome.find((item) => item.sectionId === "hEditorTheme2") ||
          null,
        remixDancer:
          action.dataHome.find((item) => item.sectionId === "hEditorTheme3") ||
          null,
        mood:
          action.dataHome.find((item) => item.sectionId === "hEditorTheme4") ||
          null,
        artists:
          action.dataHome.find((item) => item.sectionId === "hArtistTheme") ||
          null,
        newReleaseChart:
          action.dataHome.find((item) => item.sectionId === "hNewrelease") ||
          null,
        top100:
          action.dataHome.find((item) => item.sectionId === "h100") || null,
        weekChartBanner:
          action.dataHome.find((item) => item.sectionType === "weekChart") ||
          null,
        albumHot:
          action.dataHome.find((item) => item.sectionId === "hAlbum") || null,
        liveRadio:
          action.dataHome.find((item) => item.sectionId === "hLiveRadio") ||
          null,
      };

    default:
      return state;
  }
};

export default appReducer;
