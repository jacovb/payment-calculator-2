import { ChangeEvent, MouseEvent } from "react";
import { LoanDataTypes } from "./model";

type LoanDataProps = {
  loanInfo: LoanDataTypes,
  handleLoanChange: (event: ChangeEvent<HTMLInputElement>) => void,
  handleRadio: (event: ChangeEvent<HTMLInputElement>) => void,
  loadPage1: (event: MouseEvent<HTMLButtonElement>) => void,
  loadPage3: (event: MouseEvent<HTMLButtonElement>) => void,
}



export default function Page2LoanDetails ({loanInfo, handleLoanChange, handleRadio, loadPage1, loadPage3} : LoanDataProps) {
  console.log(loanInfo)
  return (
    <div>
      <h1 className="font-bold text-xl text-white my-4">Enter Loan Details</h1>
      <form className="text-white grid grid-cols-2 gap-x-4 gap-y-2">
        <div className="col-span-2 flex justify-between">
          <div>
            <input
              type="radio"
              id="radioStandard"
              value="false"
              name="isFixedRate"
              checked={loanInfo.isFixedRate === false}
              onChange={handleRadio}
              />
            <label htmlFor="radioStandard" className="ml-3">
              Standard Variable Rate
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="radioFixed"
              value="true"
              name="isFixedRate"
              checked={loanInfo.isFixedRate === true}
              onChange={handleRadio}
              />
            <label htmlFor="radioFixed" className="ml-3">
              Initial Fixed Rate
            </label>
          </div>
        </div>
        
        <label className="flex items-center">Property Price:</label>
        <input
          className="w-full px-3 py-2 border-2 border-light-blue rounded text-black focus:outline-none focus:border-coral-red focus:bg-gray-100"
          type="number"
          name="price"
          value={loanInfo.price}
          onChange={handleLoanChange}
        />

        <label className="flex items-center">Street Number:</label>
        <input
          className="w-full px-3 py-2 border-2 border-light-blue rounded text-black focus:outline-none focus:border-coral-red focus:bg-gray-100"
          type="number"
          name="deposit"
          value={loanInfo.deposit}
          onChange={handleLoanChange}
        />

        {/* <label className="flex items-center">Street Name:</label>
        <input
          className="w-full px-3 py-2 border-2 border-light-blue rounded text-black focus:outline-none focus:border-coral-red focus:bg-gray-100"
          type="text"
          name="streetAddress"
          value={address.streetAddress}
          onChange={handleAddressChange}
        />

        <label className="flex items-center">City:</label>
        <input
          className="w-full px-3 py-2 border-2 border-light-blue rounded text-black focus:outline-none focus:border-coral-red focus:bg-gray-100"
          type="text"
          name="city"
          value={address.city}
          onChange={handleAddressChange}
        />

        <label className="flex items-center">Postal Code:</label>
        <input
          className="w-full px-3 py-2 border-2 border-light-blue rounded text-black focus:outline-none focus:border-coral-red focus:bg-gray-100"
          type="text"
          name="postalCode"
          value={address.postalCode}
          onChange={handleAddressChange}
        /> */}
      </form>
      <div className="flex">
        <button 
          onClick={loadPage1}
          className="px-4 py-2 my-4 bg-gray-300 rounded border border-black hover:bg-coral-red hover:text-white hover:shadow-button-strong transition ease-in-out">
            Back
        </button>
        <button 
          onClick={loadPage3}
          className="px-4 py-2 my-4 bg-gray-300 rounded border border-black hover:bg-coral-red hover:text-white hover:shadow-button-strong transition ease-in-out">
            Next
        </button>
      </div>
    </div>
  );
};