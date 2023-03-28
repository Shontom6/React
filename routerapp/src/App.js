
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import './App.css';
import Details from './Components/Details';
import Home from './Components/Home';
import Login from './Components/Login';
import Error from './Components/Error';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/details/:name' element={<Details />}></Route>
          <Route path='/*' element={<Error />}></Route>
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
