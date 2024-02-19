import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  singleProduct: {},
  categories: [],
  chosenCategory: "All Products",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setSingleProducts: (state, action) => {
      state.singleProduct = action.payload;
    },
    setAllCategories: (state, action) => {
      state.categories = action.payload;
    },
    setChosenCategory: (state, action) => {
        console.log(action)
      state.chosenCategory = action.payload;
      if (action.payload === "All Products") {
        console.log("here")
        state.filteredProducts = state.products;
      } else {
        state.filteredProducts = state.products.filter(
          (product) => product.category === action.payload
        );
      }
    },
  },
});

export const {
  setAllProducts,
  setSingleProducts,
  setAllCategories,
  setChosenCategory,
} = productsSlice.actions;

export default productsSlice.reducer;
