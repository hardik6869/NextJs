import Link from "next/link";

const PostList = ({ posts }) => {

    return (
        <div className="bg-slate-700">
            <div className="container bg-slate-700 mx-auto">
                <h1 className="text"> List of Posts</h1>
                <div className="grid grid-cols-3 justify-items-stretch">
                    {posts.map((post) => {
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <div className="w-45 min-w-full md:min-w-0 " key={post.id}>
                                <div className="h-45 min-h-0 md:min-h-full">
                                    <div className="max-w-sm mx-auto text-center text-white bg-slate-400 rounded-lg shadow-lg m-3">
                                        <h1>{post.id} </h1> <h2>{post.title} </h2>
                                        <Link href={`/posts/${post.id}`} passHref>
                                            <button className="bg-slate-700 text-white px-4 py-2 my-3 rounded"> Click me
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )

}
export default PostList

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    return {
        props: {
            posts: data,
        },
    }
}

