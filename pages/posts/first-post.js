import Link from 'next/link';

export default () => {
    return (
        <>
            <h1>First post!</h1>
            <h2>
                <Link href='/'>Home page</Link>
            </h2>
        </>
    );
}