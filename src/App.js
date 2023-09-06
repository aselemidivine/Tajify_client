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
import EditorPage from "./pages/editor";
import Profile from "./pages/profile";
import ComingSoon from "./pages/comingSoon/ComingSoon";
import PremiumContent from "./pages/premium/premiumContent";
import BlogsCategoryPage from "./components/blogsCategoryPage/BlogsCategoryPage";
import Wallet from "./pages/wallet/Wallet";
// import ThankYou from "./pages/thankyou/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/editor" element={<EditorPage />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/writer" element={<Writer />}></Route>
          <Route path="/premium" element={<PremiumContent />}></Route>

          {/* wallet */}
          <Route path="/wallet" element={<Wallet />} />

          {/* thank you */}
          {/* <Route path="/thank-you/:ref" element={<ThankYou />} /> */}
        </Route>
        <Route element={<UnProtectedRoute />}>
          <Route path="/writers-profile/:id" element={<WritersProfile />}></Route>
          <Route path="/details/:id" element={<BlogDetails />}></Route>
          {/* <Route path="/category/category/:category" element={<BlogsCategoryPage />}></Route> */}
          <Route path="/category/:category" element={<BlogsCategoryPage />}></Route>
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
