import Link from "next/link";
import { useRouter } from "next/router";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();

  const submitHandler = () => {
    console.log("Placing Order");
    router.push("/product");
  };
  return (
    <>
      <nav className="nav p-3 bg-slate-800 text-white ">
        <div className="container d-flex container mx-auto">
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
        </div>
      </nav>
      <div className="container mx-auto m-5">
        <p className="font-[900] text-3xl">Home Page</p>
      </div>
    </>
  );
};

export default index;
