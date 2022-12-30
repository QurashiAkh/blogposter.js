import Link from "next/link";
import PocketBase from "pocketbase";

// Next.js Configation stuff for fetching

export const
    dynamic = 'force-dynamic',
    revalidate = 0,
    fetchCache = 'force-no-store',
    runtime = 'nodejs',
    preferredRegion = 'auto'

async function getPosts() {
    const pb = new PocketBase('http://127.0.0.1:8090')
    const data = await pb.collection('posts').getFullList()

    return data as any[]
}

export default async function PostsPage() {
    const posts = await getPosts()

    if (posts.length === 0) {
        return (
            <>
                <h3>All Posts</h3>
                <Link href="/posts/new" className="button button-primary">+ New Post</Link>
                <hr />
    
                <p>There are no Posts at this Moment. Do you want to <Link href="/posts/new">create</Link> One?</p>
            </>
        )
    } else {
        return (
            <>
                <h3>All Posts</h3>
                <Link href="/posts/new" className="button button-primary">+ New Post</Link>
                <hr />
    
                {posts?.map(post => {
                    return <Post key={post.id} post={post} />
                })}
            </>
        )
    }
}

function Post({ post }: any) {
    const { id, title, author, created, content } = post || {}

    return (
        <>
            <h4>
                <Link href={`/posts/${post.id}`} style={{ textDecoration: 'none', color: 'black', fontSize: 'x-large' }}>
                    {post.title}
                </Link>
            </h4>
            <small style={{ opacity: 0.5 }}>Written By {post.author} on {post.created}</small>
            <hr />
        </>
    )
}
