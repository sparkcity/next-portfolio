import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Projects Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Projects" />
        <p className="description">
          This is the projects page.
        </p>
      </main>

      <Footer />
    </div>
  )
}
