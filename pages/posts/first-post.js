import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`Script loaded correctly, window.fb has been populated!`)
        }
      />
      <h1>First post!</h1>
      <h2>
        <Link href="/">Home page</Link>
      </h2>
    </>
  );
};
