import { useState } from "react";
import Nav from "./components/Nav/Nav";
// import { products } from "./constants/data.js";
import ProductCard from "./components/ProductCard/ProductCard";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import { uniqueArrayMaker } from "./utils/uniqueArrayMaker";
// import Counter from "./components/Counter/Counter.jsx";
// import Todos from "./components/Todos/Todos.jsx";

function App() {
  // const [isTenTimes, setIsTenTimes] = useState(false);
  const [productsArr, setProductsArr] = useState([]);
  const [categories, setCategories] = useState([]);

  const {isLoading, error, data} = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      const allCategories = data.map(prd => prd.category);
      const uniqueCategories = uniqueArrayMaker(allCategories)
      setCategories(['All Products', ...uniqueCategories])
      setProductsArr(data);
      return data
    }
  })
  // const toggleTenTimesState = () => {
    // setIsTenTimes(!isTenTimes);
  // };

  // const handleAddProduct = () => {
  //   const newProduct = {
  //     src: "https://freepngimg.com/thumb/teddy_bear/1-2-teddy-bear-transparent.png",
  //     title: "Teddy Bear",
  //     price: 94,
  //   };
  //   const newArr = [...productsArr];
  //   newArr.unshift(newProduct);
  //   setProductsArr(newArr);
  //   setProductsArr([newProduct, ...productsArr]);
  // };
  const FilterProducts = (category) => {
    setProductsArr( category === "All Products" ? data : data.filter(product => product.category === category))
  }

  if(isLoading) {
    return <Loader />
  }
  if(error){
    return <Error/>
  }
  return (
    <>
      {/* <Counter isTenTimes={isTenTimes} /> */}
      <Nav filterArr={categories} onChange={FilterProducts} isFilter/>
      {/* <button onClick={toggleTenTimesState}>
        {isTenTimes ? "switch to single" : "switch to tens"}
      </button> */}
      {/* <button onClick={handleAddProduct}>add another product</button> */}
      <section className="products">
        {productsArr.map((product, index) => (
          <ProductCard
            key={index}
            src={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </section>
      {/* <Todos /> */}
    </>
  );
}

export default App;
