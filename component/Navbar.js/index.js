import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
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
    </>
  );
};

export default Navbar;
