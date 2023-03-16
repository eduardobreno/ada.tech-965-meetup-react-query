import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getProducts, ProductType } from "../api";
import ProductPod from "../components/ProductPod";

function Home() {
  const { data, isLoading } = useQuery("products", getProducts);


  // useEffect(() => {
  //   const abortController = new AbortController();

  //   getProducts({ signal: abortController.signal }).then((products) => {
  //     console.log(products);
  //     setProducts(products);
  //   });

  //   return () => abortController.abort();
  // }, []);

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <main>
      {data?.map((product) => {
        return (
          <ProductPod
            key={product.id}
            product={product}
            productInCart={{ qtd: undefined }}
          />
        );
      })}
    </main>
  );
}

export default Home;
