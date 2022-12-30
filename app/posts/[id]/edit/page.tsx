import PocketBase from 'pocketbase'
import EditPost from './EditPost'

// Next.js Configation stuff for fetching

export const
    dynamic = 'force-dynamic',
    revalidate = 0,
    fetchCache = 'force-no-store',
    runtime = 'nodejs',
    preferredRegion = 'auto'

export default async function EditPostPage({ params }: any) {
    const pb = new PocketBase('http://127.0.0.1:8090')
    const post = await pb.collection('posts').getOne(params.id)

    return (
        <>
            <h3>Editing Post</h3>
            <hr />
            <EditPost postId={post.id} postTitle={post.title} postAuthor={post.author} postContent={post.content} />
            <hr />
        </>
    )
}
