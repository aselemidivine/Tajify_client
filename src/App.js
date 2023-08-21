import { BrowserRouter, Routes, Route } from "react-router-dom";
import Writer from "./pages/writer";
import BlogHome from "./pages/blogHome";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import BlogDetails from "./pages/blogDetails";
import WritersProfile from "./pages/writersProfile";
import About from "./pages/about";
import Help from "./pages/help";
import Privacy from "./pages/privacy";
import Editor from "./pages/editor";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogHome />}></Route>
        <Route path="/details" element={<BlogDetails />}></Route>
        <Route path="/writers-profile" element={<WritersProfile />}></Route>
        <Route path="/writer" element={<Writer />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/editor" element={<Editor />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
