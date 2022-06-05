import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Hulu project created using Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Let's Build a Hulu App!</h1>

      {/* Header */}
        <Header />    
      {/* Nav */}

      {/* Results */}
    </div>
  )
}
