import Footer from '../components/Footer'
import GlobalHead from '../components/GlobalHead'
import Logo from '../components/Logo'

export default function Home() {
  return (
    <>
      <GlobalHead title='Fusion Team - Hardware Solutions' />

      <main>
        <Logo />

        <p className="label">Uskoro</p>
      </main>

      <Footer />
    </>
  )
}
