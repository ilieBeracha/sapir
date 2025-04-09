import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Cart from "./views/Cart";
import Shop from "./views/Shop";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
