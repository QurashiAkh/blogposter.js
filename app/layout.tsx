/* eslint-disable @next/next/no-head-element */

import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <meta name="description" content="Blogposter.js: A Demo Website" />
        <meta name="author" content="Husayn al-Qurashi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <link rel="stylesheet" href="/css/skeleton.css" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </head>
      <body>
        <br />
        <div className="container">
          <div className="row">
            <div className="nine columns">
              <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>
                Blogposter.js
              </Link>
            </div>
            <div className="one column">
              <Link href="/" style={{ textDecoration: 'none', color: 'black' }}>
                Home
              </Link>
            </div>
            <div className="one column">
              <Link href="/posts" style={{ textDecoration: 'none', color: 'black' }}>
                Posts
              </Link>
            </div>
            <div className="one column">
              <Link href="/about" style={{ textDecoration: 'none', color: 'black' }}>
                About
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <br />
          {children}
        </div>
      </body>
    </html>
  );
}
