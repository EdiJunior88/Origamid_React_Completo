import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import UseStorage from "./UserContext.jsx";
import ProtectedRoute from "./Components/Helper/ProtectedRoute";
import User from "./Components/User/User";

function App() {
  return (
    <div>
      <BrowserRouter>
        <UseStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='login/*' element={<Login />} />
            <Route
              path='conta/*'
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UseStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
