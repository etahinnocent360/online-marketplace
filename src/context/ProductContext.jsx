import { createContext, useState, useEffect } from "react";
import { databases } from "../appwrite/appConfig";
import { config } from "./config";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [edit, setEdit] = useState(false);

  const addedToCart = (id) => {
    const updatedProduct = products?.map((product) => {
      if (product.$id === id) {
        return { ...product, addedToCart: true };
      }

      return product;
    });

    setProducts(updatedProduct);
  };

  const removeFromCart = (id) => {
    const updatedProduct = products.map((product) => {
      if (product.$id === id) {
        return { ...product, addedToCart: false };
      }

      return product;
    });

    setProducts(updatedProduct);
  };

  const itemSold = (id) => {
    const updatedProduct = products.map((product) => {
      if (product.$id === id) {
        return { ...product, sold: true };
      }

      return product;
    });

    setProducts(updatedProduct);
  };

  useEffect(() => {
    const getProducts = databases.listDocuments(
      config.dbID,
      config.collectionID
    );

    getProducts.then(
      function (response) {
        const responseProducts = response.documents.map((product) => ({
          ...product,
          addedToCart: false,
          sold: false,
        }));

        setProducts(responseProducts);
      },
      function (error) {
        console.log(error);
      }
    );

    //get all orders from order database
    const getOrders = databases.listDocuments(
     config.dbID,
      config.orderCollection
    );

    getOrders.then(
      function (response) {
        setOrders(response.documents);
      },
      function (error) {
        console.log(error);
      }
    );
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        edit,
        orders,
        setEdit,
        addedToCart,
        removeFromCart,
        itemSold,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
