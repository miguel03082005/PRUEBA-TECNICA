import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/home/Dashboard";
import { Toaster } from "react-hot-toast";
import Navbar from "./pages/layaout/Navbar";
import Listar from "./pages/home/ListTransactions";
import Graficas from "./pages/home/graficas";


function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/listar" element={<Listar/>} />
          <Route path="/graficas" element={<Graficas/>} />
        </Routes>
      </Navbar>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
