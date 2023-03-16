import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProduct, ProductType } from "../api";
import ProductPod from "../components/ProductPod";

function ProductPage() {
  const { id } = useParams();

  if (id === undefined) return <>Produco não encontrado!</>;

  const { data: product, isLoading } = useQuery(`product-${id}`, () =>
    getProduct(id)
  );

  // useEffect(() => {
  //   const abortController = new AbortController();

  //   getProduct(id, { signal: abortController.signal }).then((product) => {
  //     setProduct(product);
  //     setLoading(false);
  //   });

  //   return () => abortController.abort();
  // }, []);

  if (isLoading) return <h1>Carregando...</h1>;

  return (
    <div>
      <img src={`${product?.thumbnail}`} alt={product?.description} />
      <p>${product?.title}</p>
      <p>${product?.price}</p>
    </div>
  );
}

export default ProductPage;
