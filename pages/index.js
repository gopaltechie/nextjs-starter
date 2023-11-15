import Link from 'next/link'

function HomePage() {
    return ( <>
    <h1>Welcome to home page</h1>
    <Link href="post/first">First Post</Link>
    </>
    );
}

export default HomePage;