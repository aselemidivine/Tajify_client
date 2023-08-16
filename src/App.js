import { BrowserRouter, Routes, Route } from "react-router-dom";
import Writer from "./pages/writer";
import BlogHome from "./pages/blogHome";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";
import BlogDetails from "./pages/blogDetails";
import EditorsPage from "./pages/editorPage";
import WritersProfile from "./pages/writersProfile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogHome />}></Route>
        <Route path="/details" element={<BlogDetails />}></Route>
        <Route path="/writers-profile" element={<WritersProfile />}></Route>
        <Route path="/editor" element={<EditorsPage />}></Route>
        <Route path="/writer" element={<Writer />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
