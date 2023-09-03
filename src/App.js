import { BrowserRouter, Routes, Route } from "react-router-dom";
import Writer from "./pages/writer";
import BlogHome from "./pages/blogHome";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import BlogDetails from "./pages/blogDetails";
import WritersProfile from "./pages/writersProfile";
import About from "./pages/about";
import ProtectedRoute, {
  UnProtectedRoute,
} from "./components/authentication/ProtectedRoute";
import Help from "./pages/help";
import Privacy from "./pages/privacy";
import Editor from "./pages/editor";
import Profile from "./pages/profile";
import ComingSoon from "./pages/comingSoon/ComingSoon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<ProtectedRoute />}> */}
          <Route path="/writers-profile" element={<WritersProfile />}></Route>
          <Route path="/writer" element={<Writer />}></Route>
          <Route path="/editor" element={<Editor />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        {/* </Route> */}
        <Route element={<UnProtectedRoute />}>
          <Route path="/details" element={<BlogDetails />}></Route>
          <Route path="/coming-soon" element={<ComingSoon />}></Route>
          <Route path="/" element={<BlogHome />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Register />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
