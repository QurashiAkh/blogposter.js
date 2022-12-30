'use client'

import PocketBase from 'pocketbase'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CreatePost() {
    const pb = new PocketBase('http://127.0.0.1:8090')
    const router = useRouter()

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    const createPost = async () => {
        const data = {
            "title": title,
            "author": author,
            "content": content
        }

        const newPost = await pb.collection('posts').create(data)

        setTitle('')
        setAuthor('')
        setContent('')

        router.push(`/posts/${newPost.id}`)
    }

    return (
        <>
            <label>Title:</label>
            <input type="text" placeholder="Delightful..." value={title}
                onChange={e => setTitle(e.target.value)} />
            <br />
            <label>Author:</label>
            <input type="text" placeholder="Fulan..." value={author}
                onChange={e => setAuthor(e.target.value)} />
            <br />
            <label>Post:</label>
            <textarea className="u-full-width" placeholder="Take your Space!" value={content}
                onChange={e => setContent(e.target.value)}></textarea>
            <br />
            <button onClick={createPost} className="button-primary">Post</button>
            <Link href="/posts" className="button">Cancel</Link>
        </>
    )
}
