import React, { useState, ChangeEvent } from "react"
import { AddressTypes, LoanDataTypes, PageTypes } from "./model"
import Page1Address from "./Page1Address"
import Page2LoanDetails from "./Page2LoanDetails"
import Page3Schedule from "./Page3Schedule"

const addressData = {
  buildingName: "", 
  streetNumber: "",
  streetAddress: "",
  city: "",
  postalCode: ""
}

const loanData = {
  price: 100000,
  deposit: 10000,
  rate: 3.6,
  fixedRate: 2,
  isFixedRate: false,
  periodInYears: 25,
  fixedPeriod: 2,
  totalAnnualPayments: null,
  paymentSchedule: [],
};

const pageData = {
  isPage1Visible: true,
  isPage2Visible: false,
  isPage3Visible: false,
}

const PaymentCalculator:React.FC = () => {
  const [page, setPage] = useState<PageTypes>(pageData)
  const [address, setAddress] = useState<AddressTypes>(addressData)
  const [loanInfo, setLoanInfo] = useState<LoanDataTypes>(loanData)
  
  // console.log(page)
  // console.log(address)
  // console.log(loanInfo)

  function handleAddressChange (e: ChangeEvent<HTMLInputElement>) {
    setAddress({ ...address, [e.target.name]: e.target.value })
  }

  function loadPage1 () {
    setPage({ 
      isPage1Visible: true,
      isPage2Visible: false,
      isPage3Visible: false,
    })
  }

  function loadPage2 () {
    setPage({ 
      isPage1Visible: false,
      isPage2Visible: true,
      isPage3Visible: false,
    })
  }

  function loadPage3 () {
    setPage({ 
      isPage1Visible: false,
      isPage2Visible: false,
      isPage3Visible: true,
    })
  }

  return (
    <main className="container min-h-screen flex flex-col justify-center items-center mx-auto px-8 md:px-16 lg:px-24 w-[30rem] md:w-[40rem] lg:w-[50rem]">
      {page.isPage1Visible && <Page1Address address={address} handleAddressChange={handleAddressChange} loadPage2={loadPage2} />}
      {page.isPage2Visible && <Page2LoanDetails loadPage1={loadPage1} loadPage3={loadPage3} />}
      {page.isPage3Visible && <Page3Schedule loadPage2={loadPage2} />}
    </main>
  )
}

export default PaymentCalculator