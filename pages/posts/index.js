import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <div>
      <h1 className="text"> List of Posts</h1>
      <div className="flex flex-wrap bg-slate-100">
        {posts.map((post) => {
          return (
            <div
              className="w-full max-w-sm py-6 px-4 mb-4 mx-auto transition duration-500 transform md:w-6/12 xl:4/12 lg:w-4/12 lg:mb-0 "
              key={post.id}
            >
              <div className="max-w-md py-2 my-2 bg-gray-800 shadow-xl shadow-slate-600 rounded-xl">
                <h1 className="text-4xl text-center shadow-xl shadow-slate-400 font-bold text-gray-400">
                  {post.id}
                </h1>
                <div className="pt-6 text-center">
                  <h5 className="text-xl font-bold text-gray-400">
                    {post.title}
                  </h5>
                  <div className="mt-6">
                    <Link href={`/posts/${post.id}`} passHref>
                      <button className="bg-slate-700 text-white px-4 py-2 my-3 rounded">
                        Click me
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default PostList;

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
};
