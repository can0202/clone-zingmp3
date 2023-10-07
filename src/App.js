import logo from "./logo.svg";
import { Home, Login, Public } from "./pages/public";

// Cấu hình Router dom
import { Routes, Route } from "react-router-dom";
import routerConfig from "./ultis/RouterConfig";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./redux/actions";
import Album from "./pages/public/Album";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getHome());
    dispatch(actions.toggleListMusic());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path={routerConfig.PUBLIC} element={<Public />}>
          <Route path={routerConfig.HOME} element={<Home />} />
          <Route path={routerConfig.LOGIN} element={<Login />} />
          <Route path={routerConfig.ALBUM_TITLE_PID} element={<Album />} />
          <Route path={routerConfig.PLAYLIST_TITLE_PID} element={<Album />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
