import { useRouter } from "next/router"

const ProductDetails = () => {
    const router = useRouter();
    const ProductId = router.query.productId;
    return (
        <div>
            <h1>Product Details {ProductId} </h1>
        </div>
    )
}

export default ProductDetails 