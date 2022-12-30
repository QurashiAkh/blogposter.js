import Link from "next/link"

export default function AboutPage() {
    return (
        <>
            <h3>About Blogposter</h3>
            <p>
                A Small Web Application made to demonstrate how HTTP and Internet Protocols generally work. <br />
                Developed by <a href="https://github.com/QurashiAkh">Husayn al-Qurashi</a>.
            </p>
            <hr />
            <p>
                I originally developed this Web App using the Python Programming Language, by the Help of the <a
                    href="https://flask.palletsprojects.com/">Flask Framework</a> and the SQLAlchemy API.
                However I decided to rebuild the Site using JavaScript in Next.js & by using PocketBase as my Backend.
                <br />
                <br />
                Concerning the UI (i.e. User Interface), I've used <a href="http://getskeleton.com/">Skeleton</a>, which is a
                light-weight CSS Library. Skeleton did help me improve the UI of the Web App via its simple class-based CSS styling.
                <br />
                <br />
                As of the Favicon, I've used <a href="https://pixlr.com/x">Pixlr</a> to design it.
            </p>
            <Link href="/" className="button button-primary">
                Return to the Home Page &raquo;
            </Link>
        </>
    )
}
