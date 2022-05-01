import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/HomePage/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Signup from "./Pages/Authentication/SignUp/Signup";
import Login from "./Pages/Authentication/LogIn/Login";
import Reviews from "./Pages/Customer-review/Reviews";
import Item from "./Pages/Item/Item";
import Allitems from "./Pages/Allitems/Allitems";
import NotFound from "./Pages/Shared/404/NotFound";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/review" element={<Reviews></Reviews>}></Route>
        <Route path="/item" element={<Allitems></Allitems>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
