export type ProductType = {
  id: string;
  price: string;
  description: string;
  thumbnail: string;
  title: string;
};

interface GetProductsResponse {
  products: ProductType[];
}

export async function getProducts(config?: RequestInit) {
  const response = await fetch("https://dummyjson.com/products", config);
  const data: GetProductsResponse = await response.json();
  return data.products;
}
export async function getProduct(id: string, config?: RequestInit) {
  const response = await fetch(`https://dummyjson.com/products/${id}`, config);
  const data: ProductType = await response.json();
  return data;
}

export async function saveProductInCart(product: ProductType) {
  const response = await fetch(`http://localhost:3000/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const data: ProductType = await response.json();
  return data;
}
