const Post = (post) => {
    return (
        <div className="p-5 flex justify-center ">
            <div className="text-center top-50 bg-slate-600 text-white p-5
            rounded-lg">
                <h1 className="text-4xl text-slate-400 shadow-lg border">Product Id {post.posts.id}</h1>
                <h2 className="text-2xl py-10"> Title {post.posts.title}</h2>
                <h3 className="py-6"> Body {post.posts.body} </h3>
            </div>
        </div>
    )
}

export default Post

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json();
    const paths = data.map((post) => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    });

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const { params } = context;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await res.json();
    return {
        props: {
            posts: data
        }
    }

}