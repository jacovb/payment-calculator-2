import React, { useState } from "react"



const PaymentCalculator:React.FC = () => {

  const [isPage1Visible, setIsPage1Visible] = useState<boolean>(true)
  const [isPage2Visible, setIsPage2Visible] = useState<boolean>(false)
  const [isPage3Visible, setIsPage3Visible] = useState<boolean>(false)
  
  console.log("Page 1 :", isPage1Visible)
  console.log("Page 2 :", isPage2Visible)
  console.log("Page 3 :", isPage3Visible)

  return (
    <main>
      <h1>Enter Address</h1>
    </main>
  )
}

export default PaymentCalculator