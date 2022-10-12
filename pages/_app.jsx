import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="m-3 p-3 lg:min-h-screen bg-[#0a0e17] rounded-md">
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
