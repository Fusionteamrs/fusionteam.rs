import GlobalHead from './GlobalHead'

function Error({ statusCode }) {
  return (
    <GlobalHead title={`Fusion Team - ${statusCode}`} />
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
