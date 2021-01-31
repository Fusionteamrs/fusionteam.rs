import Head from 'next/head'

function Error({ statusCode }) {
  return (
    <Head>
      <meta name="robots" content="noindex" />
      <title>{`Fusion Team - ${statusCode}`}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
