import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css"
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register/>} />
        <Route path="signin" element={<SignIn/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
