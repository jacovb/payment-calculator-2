import React, { useState, ChangeEvent } from "react"
import { AddressTypes, LoanDataTypes, PageTypes } from "./model"
import Page1Address from "./Page1Address"

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
  
  console.log(page)
  console.log(address)
  console.log(loanInfo)

  function handleAddressChange (e: ChangeEvent<HTMLInputElement>) {
    setAddress({ ...address, [e.target.name]: e.target.value })
  }

  return (
    <main className="container min-h-screen flex flex-col justify-center items-center mx-auto px-8 md:px-16 lg:px-24 w-[30rem] md:w-[40rem] lg:w-[50rem]">
      <Page1Address address={address} handleAddressChange={handleAddressChange}/>
      <button className="px-4 py-2 my-4 bg-gray-300 rounded border border-black hover:bg-coral-red hover:text-white hover:shadow-button-strong transition ease-in-out">Skip</button>
    </main>
  )
}

export default PaymentCalculator