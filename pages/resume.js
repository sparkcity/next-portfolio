import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Resume Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Resume" />
        <p className="description">
          This is the resume page.
        </p>
      </main>

      <Footer />
    </div>
  )
}
