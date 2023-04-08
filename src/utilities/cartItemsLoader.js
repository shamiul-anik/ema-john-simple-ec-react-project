import { getShoppingCart } from "./fakedb";

export const cartItemsLoader = async() => {
  const loadedProducts = await fetch("productsData/products.json");
  const products = await loadedProducts.json();

  // Getting the cart from Local Storage
  const storedCart = getShoppingCart(); // getting stored product's id from local storage
  const savedCart = []; // empty array to push cart data
  
  for (const id in storedCart) {
    const cartItem = products.find((product) => product.id === id); // getting only the products added in the cart from local storage
    if(cartItem) {
      cartItem.quantity = storedCart[id]; // getting the quantity from the local storage for specific product and updating the quantity of cart items
      savedCart.push(cartItem); 
    }
  }

  return savedCart;
};