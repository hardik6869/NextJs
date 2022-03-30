import Link from "next/link"
import { useRouter } from "next/router"

const index = () => {
    const router = useRouter()

    const submitHandler = () => {
        console.log('Placing Order');
        router.push('/product')
    }
    return (
        <div>
            <h1> Home Page </h1>
            <Link href="/blog">
                <a>
                    Blog
                </a>
            </Link>
            <Link href='/product'>
                <a>
                    Product
                </a>
            </Link>
            <Link href='/posts'>
                <a>
                    Users
                </a>
            </Link>
            <button onClick={submitHandler}>
                Place order
            </button>
        </div>
    )
}

export default index