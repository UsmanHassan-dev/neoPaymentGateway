import "./assets/styles/global.css";
import { Routes,Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import { RegisterPage } from "./pages/auth/RegisterPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Welcome to NeoPay</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
