import Link from "next/link";

const Product = ({ productId = 100 }) => {
    return (
        <div>
            <h1>Product Page</h1>
            <h1> <Link href="/">
                <a>
                    Home
                </a>
            </Link>
            </h1>
            <h1>
                <Link href="/product/1">
                    <a>
                        Product 1
                    </a>
                </Link>
            </h1>
            <h1>
                <Link href="/product/2">
                    <a>
                        Product 2
                    </a>
                </Link>
            </h1>
            <h1>
                <Link href="/product/3" replace>
                    <a>
                        Product 3
                    </a>
                </Link>
            </h1>
            <h1>
                <Link href={`/product/${productId}`} replace>
                    <a> Product {productId}
                    </a>
                </Link>
            </h1>
        </div>
    )
}

export default Product 