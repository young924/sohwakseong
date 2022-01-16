import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useUserInfo } from "./hooks/useUserInfo";
import AchieveCheck from "./pages/AchieveCheck";
import FriendPlanet from "./pages/FriendPlanet";
import FriendSearch from "./pages/FriendSearch";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Market from "./pages/Market";
import MyPage from "./pages/MyPage";
import SelectPosition from "./pages/SelectPosition";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";

function Router() {
  const isLogin = useUserInfo();

  if (!isLogin) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route component={Welcome} />
        </Switch>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/market" component={Market} />
        <Route path="/select/:item/:target_number" component={SelectPosition} />
        <Route path="/achievecheck" component={AchieveCheck} />
        <Route path="/friendplanet/:id" component={FriendPlanet} />
        <Route path="/friendsearch" component={FriendSearch} />
        <Route component={Welcome} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
