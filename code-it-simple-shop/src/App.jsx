import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import SingleItem from "./pages/SingleItem/SingleItem";

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="cart" element={<Cart />} />
      <Route path="about" element={<About />} />
      <Route path="items/:itemID" element={<SingleItem />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
