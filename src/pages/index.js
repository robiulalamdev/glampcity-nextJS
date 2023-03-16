import Head from 'next/head'
import HomePage from './home/index.js'

export default function Home() {
  return (
    <>
      <Head>
        <title>Glampcity App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomePage />
      </main>
    </>
  )
}
