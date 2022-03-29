import { useRouter } from "next/router"

const ProductDetails = () => {
    const router = useRouter();
    const ProductId = router.query.productId;
    return (
        <h1>Product Details {ProductId} </h1>
    )
}

export default ProductDetails 