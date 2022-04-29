import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes></Routes>
    </div>
  );
}

export default App;
