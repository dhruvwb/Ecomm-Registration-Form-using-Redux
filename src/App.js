import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Search from "./Pages/Search";
// import Login from "./Pages/Login";
import Navigation from "./Components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/LoginForm/Login";
import { Provider, useSelector } from "react-redux";

import LoginRedux from "./Components/LoginForm/LoginRedux";
import UserInfo from "./Components/LoginForm/userInfo";

function App() {
  const { isLoggedIn, user } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/LoginRedux" element={<LoginRedux />} />
        {isLoggedIn ? (
          <Route path="/UserInfo" element={<UserInfo user={user} />} />
        ) : (
          <Route
            path="/UserInfo"
            element={<Navigate to="/LoginRedux" replace />}
          />
        )}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
