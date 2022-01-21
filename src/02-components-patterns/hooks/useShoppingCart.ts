import { useState } from "react";

import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    // console.log({ count });
    setShoppingCart((oldShoppingCart) => {
      const productIncart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productIncart.count + count, 0) > 0) {
        productIncart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productIncart,
        };
      }

      //Borrar el producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   // console.log({ toDelete });
      //   return {
      //     ...rest,
      //   };
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
    // console.log("onProductCountChange", count, product);
  };
  return {
    shoppingCart,

    onProductCountChange,
  };
};
