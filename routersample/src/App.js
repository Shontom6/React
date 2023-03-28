import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/Detail";
import Error from "./components/Error";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/details/:movieName" element={<Detail />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
