import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/NavBar";
import AllPost from "./pages/AllPost.js/AllPost";
import HomePage from "./pages/homePage/HomePage";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Intro from "./pages/introduction/Intro";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/Profile" element={<Profile />}></Route>
        <Route path="/AllPost" element={<AllPost />}></Route>
        <Route path="/introduction" element={<Intro />}></Route>
      </Routes>
    </div>
  );
}

export default App;
