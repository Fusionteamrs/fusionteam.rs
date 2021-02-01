import Footer from '../components/Footer'
import GlobalHead from '../components/GlobalHead'
import Logo from '../components/Logo'

function Error({ statusCode }) {
  return (
    <>
      <GlobalHead title={`Fusion Team - ${statusCode}`} />

      <main>
        <Logo />

        <p className="label">{statusCode}</p>
      </main>

      <Footer />
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
