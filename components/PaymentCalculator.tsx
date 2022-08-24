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
    <main>
      <h1>Enter Address</h1>
      <Page1Address address={address} handleAddressChange={handleAddressChange}/>
      <button>Skip</button>
    </main>
  )
}

export default PaymentCalculator