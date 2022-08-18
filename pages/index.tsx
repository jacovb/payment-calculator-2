import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  const [start, setStart] = useState<boolean>(false)

  return (
    <div>
      <Head>
        <title>Loan Payment Calculator</title>
        <meta name="description" content="Calculate your Loan Payments" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Hero start={start} setStart={setStart} />
        {/*<Navigation /> Buttons on top of Page
        <LoanInformation />
        <PaymentSchedule /> */}
      </main>

      
    </div>
  )
}

export default Home
