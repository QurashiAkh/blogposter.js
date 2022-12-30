import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <div className="row">
                <div className="one">
                    <h3>Salam!</h3>
                    <p>
                        Welcome to Blogposter.js! You have access to blog posts which you
                        can delete and edit, OR <Link href="/posts/new">create</Link> ones from your own.
                    </p>
                    <p>Are you interested?</p>
                    <p>
                        <Link href="/posts" className="button button-primary">
                            Go to the Posts Page &raquo;
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
