'use client'

import PocketBase from 'pocketbase'
import { useRouter } from 'next/navigation'

export default function DeleteButton({ postId }: any) {
    const pb = new PocketBase('http://127.0.0.1:8090')
    const router = useRouter()

    async function deletePost() {
        await pb.collection('posts').delete(postId)
        router.push('/posts')
    }

    return <button onClick={deletePost} className="button">Delete</button>
}
