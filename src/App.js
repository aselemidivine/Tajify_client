import { BrowserRouter, Routes, Route } from "react-router-dom";
import Writer from "./pages/writer";
import BlogHome from "./pages/blogHome";
import Register from "./components/authentication/Register";
import Login from "./components/authentication/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogHome />}></Route>
        <Route path="/writer" element={<Writer />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
