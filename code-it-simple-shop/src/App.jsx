import { useState } from "react";
import Nav from "./components/Nav/Nav";
import { products } from "./constants/data.js";
import ProductCard from "./components/ProductCard/ProductCard";
import "./App.css";
import Counter from "./components/Counter/Counter.jsx";
import Todos from "./components/Todos/Todos.jsx";

function App() {
  const [isTenTimes, setIsTenTimes] = useState(false);
  const [productsArr, setProductsArr] = useState(products);

  const toggleTenTimesState = () => {
    setIsTenTimes(!isTenTimes);
  };

  const handleAddProduct = () => {
    const newProduct = {
      src: "https://freepngimg.com/thumb/teddy_bear/1-2-teddy-bear-transparent.png",
      title: "Teddy Bear",
      price: 94,
    };
    const newArr = [...productsArr];
    newArr.unshift(newProduct);
    setProductsArr(newArr);
  };

  return (
    <>
      <Counter isTenTimes={isTenTimes} />
      <Nav />
      <button onClick={toggleTenTimesState}>
        {isTenTimes ? "switch to single" : "switch to tens"}
      </button>
      <button onClick={handleAddProduct}>add another product</button>
      <section className="products">
        {productsArr.map((product, index) => (
          <ProductCard
            key={index}
            src={product.src}
            title={product.title}
            price={product.price}
          />
        ))}
      </section>
      <Todos />
    </>
  );
}

export default App;
