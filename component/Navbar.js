import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const submitHandler = () => {
    console.log("Placing Order");
    router.push("/product");
  };
  return (
    <>
      <nav>
        <Link href="/blog">
          <a className="p-3">Blog</a>
        </Link>

        <Link href="/product">
          <a className="p-3">Product</a>
        </Link>

        <Link href="/posts">
          <a className="p-3">Users</a>
        </Link>

        <Link href="/comments">
          <a className="p-3">Comments</a>
        </Link>

        <button onClick={submitHandler} className="p-3">
          Place order
        </button>
      </nav>
    </>
  );
};

export default Navbar;
