import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import MainPage from "./pages/MainPage";
import 'bootstrap/dist/css/bootstrap.css';
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sepet" element={<Checkout />} />
      </Routes>
      <ToastContainer autoClose={2000}/>
    </BrowserRouter>
  );
}

export default App
