import Link from 'next/link'
import PocketBase from 'pocketbase'
import DeleteButton from './DeleteButton'

// Next.js Configation stuff for fetching

export const
    dynamic = 'force-dynamic',
    revalidate = 0,
    fetchCache = 'force-no-store',
    runtime = 'nodejs',
    preferredRegion = 'auto'

export default async function PostPage({ params }: any) {
    const pb = new PocketBase('http:127.0.0.1:8090')

    async function getPost(postId: string) {
        const data = await pb.collection('posts').getOne(postId)

        return data as any
    }
    
    const post = await getPost(params.id)

    return (
        <>
            <h3>{post.title}</h3>
            <small>Written By {post.author} on {post.created}</small>
            <hr />
            <p style={{ whiteSpace: 'pre-wrap' }}>{post.content}</p>
            <DeleteButton postId={post.id} />
            <Link href={`/posts/${post.id}/edit`} className="button">Edit</Link>
        </>
    )
}

