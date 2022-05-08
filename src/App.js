import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/HomePage/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Signup from "./Pages/Authentication/SignUp/Signup";
import Login from "./Pages/Authentication/LogIn/Login";
import Reviews from "./Pages/Customer-review/Reviews";
import Allitems from "./Pages/Allitems/Allitems";
import NotFound from "./Pages/Shared/404/NotFound";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import RequireAuth from "./Pages/Authentication/RequireAuth/RequireAuth";
import ManageItems from "./Pages/ManageItems/ManageItems";
import Additems from "./Pages/Additems/Additems";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyItems from "./Pages/MyItems/MyItems";
import MyBlog from "./Pages/MyBlog/MyBlog";
import About from "./Pages/AboutUs/About";
import ScrollUp from "./Pages/ScrollToTop/ScrollUp";
import Contact from "./Pages/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/review" element={<Reviews></Reviews>}></Route>
        <Route path="/item" element={<Allitems></Allitems>}></Route>
        <Route
          path="/item/:id"
          element={
            <RequireAuth>
              <ItemDetail></ItemDetail>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageitems"
          element={
            <RequireAuth>
              <ManageItems></ManageItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additems"
          element={
            <RequireAuth>
              <Additems></Additems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<MyBlog></MyBlog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>

      <ScrollUp></ScrollUp>
      <Footer></Footer>
    </div>
  );
}

export default App;
