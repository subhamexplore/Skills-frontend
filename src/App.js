import { Router,Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css"
import SignIn from "./components/SignIn";
import Register from "./components/Register";
import Profile from "./pages/Profile";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path="" element={<Home/>} />
          <Route path="register" element={<Register/>} />
          <Route path="signin" element={<SignIn/>} />
          <Route path="profile" element={<Profile/>} />
        </Route>
      </Routes>
  );
}

export default App;
