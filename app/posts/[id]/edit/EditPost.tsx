'use client'

import PocketBase from 'pocketbase'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EditPost({ postId, postTitle, postAuthor, postContent }: any) {
    const pb = new PocketBase('http://127.0.0.1:8090')
    const router = useRouter()

    // Cringe State Management
    
    const [title, setTitle] = useState(postTitle);
    const [author, setAuthor] = useState(postAuthor);
    const [content, setContent] = useState(postContent);

    const editPost = async () => {
        const data = {
            "title": title,
            "author": author,
            "content": content
        }

        const editedPost = await pb.collection('posts').update(postId, data)

        // Refresh the Data
        
        setTitle(title)
        setAuthor(author)
        setContent(content)

        // Redirect

        router.push(`/posts/${editedPost.id}`)
    }

    return (
        <>
            <label>Title:</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <br />
            <label>Author:</label>
            <input type="text" value={author} onChange={e => setAuthor(e.target.value)} />
            <br />
            <label>Post:</label>
            <textarea className="u-full-width" id="content" value={content} onChange={e => setContent(e.target.value)} ></textarea>
            <br />
            <button onClick={editPost} className="button button-primary">Save</button>
            <Link href={`/posts/${postId}`} className="button">Cancel</Link>
        </>
    )
}
