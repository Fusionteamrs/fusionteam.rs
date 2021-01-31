import Head from 'next/head'

export default function GlobalHead({ title }) {
  return (
    <Head>
      <meta name="robots" content="noindex" />
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}
