import React, { useState, ChangeEvent } from "react"
import { AddressTypes } from "./model"
import Page1Address from "./Page1Address"

const addressData = {
  buildingName: "", 
  streetNumber: "",
  streetAddress: "",
  city: "",
  postalCode: ""
}

const PaymentCalculator:React.FC = () => {

  const [isPage1Visible, setIsPage1Visible] = useState<boolean>(true)
  const [isPage2Visible, setIsPage2Visible] = useState<boolean>(false)
  const [isPage3Visible, setIsPage3Visible] = useState<boolean>(false)
  const [address, setAddress] = useState<AddressTypes>(addressData)
  
  console.log("Page 1 :", isPage1Visible)
  console.log("Page 2 :", isPage2Visible)
  console.log("Page 3 :", isPage3Visible)
  console.log(address)

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