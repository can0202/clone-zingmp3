import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";
import appReducer from "./App";
import settingsReducer from "./Settings";
import musicReducer from "./Music";

const commonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
};

const musicConfig = {
  ...commonConfig,
  key: "music",
  whilelist: ["curSongId"],
};

const rootReducer = combineReducers({
  app: appReducer,
  settings: settingsReducer,
  music: persistReducer(musicConfig, musicReducer),
});
export default rootReducer;
