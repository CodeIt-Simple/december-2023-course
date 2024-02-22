import React from 'react'
import Nav from '../../components/Nav/Nav'
import { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { uniqueArrayMaker } from "../../utils/uniqueArrayMaker";
import "./HomePage.css"
import { useSelector, useDispatch } from 'react-redux';
import { setAllCategories, setAllProducts } from '../../store/slices/productSlice';
// import Counter from "./components/Counter/Counter.jsx";
// import Todos from "./components/Todos/Todos.jsx";

const HomePage = () => {
     // const [isTenTimes, setIsTenTimes] = useState(false);
//   const [productsArr, setProductsArr] = useState([]);
//   const [categories, setCategories] = useState([]);
const productsArr = useSelector(state => state.products.filteredProducts)
const categories = useSelector(state => state.products.categories)
const dispatch = useDispatch();

  const {isLoading, error, data} = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      console.log(data)
      const allCategories = data.map(prd => prd.category);
      const uniqueCategories = uniqueArrayMaker(allCategories)
      uniqueCategories.unshift("All Products")
      dispatch(setAllProducts(data));
      dispatch(setAllCategories(uniqueCategories));
    //   setCategories(['All Products', ...uniqueCategories])
    //   setProductsArr(data);
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
//   const FilterProducts = (category) => {
//     setProductsArr( category === "All Products" ? data : data.filter(product => product.category === category))
//   }

  if(isLoading) {
    return <Loader />
  }
  if(error){
    return <Error/>
  }
  return (
   <>
      {/* <Counter isTenTimes={isTenTimes} /> */}
      <Nav isFilter/>
      {/* <button onClick={toggleTenTimesState}>
        {isTenTimes ? "switch to single" : "switch to tens"}
      </button> */}
      {/* <button onClick={handleAddProduct}>add another product</button> */}
      <section className="products">
        {productsArr.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id}
            src={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </section>
      {/* <Todos /> */}
    </>  )
}

export default HomePage