import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { ProductType, saveProductInCart } from "../../api";

interface ProductPodProps {
  product: ProductType;
  productInCart?: {
    qtd?: number;
  };
}

export default function ProductPod({
  product,
  productInCart,
}: ProductPodProps) {
  const mutation = useMutation(saveProductInCart);

  return (
    <div className="productPod">
      <Link to={`/product/${product.id}`}>
        <img
          className="productThumb"
          src={`${product.thumbnail}`}
          alt={product.description}
        />
      </Link>
      <p className="productTitle">{product.title}</p>
      <p>${product.price}</p>
      <p>{productInCart?.qtd}</p>

      <button
        disabled={mutation.isLoading}
        onClick={() => mutation.mutate(product)}
      >
        {mutation.isLoading ? "Carregando..." : "Add"}
      </button>
    </div>
  );
}
