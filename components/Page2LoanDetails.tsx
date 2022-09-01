import { ChangeEvent, MouseEvent } from "react";
import { LoanDataTypes } from "./model";
import { calculateMonthlyPayment } from "./utils/formula"

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
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl text-white my-4">Enter Loan Details</h1>
      <form className="text-white grid grid-cols-2 gap-x-4 gap-y-2">
        <div className="col-span-2 flex justify-center my-2">
          <div>
            <input
              type="radio"
              className="hidden peer"
              id="radioStandard"
              value="false"
              name="isFixedRate"
              checked={loanInfo.isFixedRate === false}
              onChange={handleRadio}
              />
            <label htmlFor="radioStandard" className="mx-1 px-4 py-2 my-4 bg-gray-300 text-black rounded border border-black hover:bg-coral-red hover:text-white hover:shadow-button-strong transition ease-in-out cursor-pointer peer-checked:bg-coral-red">
              Standard Variable Rate
            </label>
          </div>
          <div>
            <input
              type="radio"
              className="hidden peer"
              id="radioFixed"
              value="true"
              name="isFixedRate"
              checked={loanInfo.isFixedRate === true}
              onChange={handleRadio}
              />
            <label htmlFor="radioFixed" className="mx-1 px-4 py-2 my-4 bg-gray-300 text-black rounded border border-black hover:bg-coral-red hover:text-white hover:shadow-button-strong transition ease-in-out cursor-pointer peer-checked:bg-coral-red">
              Initial Fixed Rate
            </label>
          </div>
        </div>

        <div className="col-span-2 h-px border-b-[5px] border-mustard my-3"></div>
        
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

        <label className="flex items-center">Initial Fixed Rate:</label>
        <div className="flex w-full border-2 border-light-blue rounded text-black focus-within:border-coral-red">
          <input
            className="w-full px-3 py-2 focus:outline-none focus:bg-gray-100"
            type="number"
            name="fixedRate"
            value={loanInfo.fixedRate}
            onChange={handleLoanChange}
            disabled={loanInfo.isFixedRate ? false : true}
          />
          <p className="px-3 py-2 bg-white">%</p>
        </div>

        <div className="flex col-start-2 w-full border-2 border-light-blue rounded text-black focus-within:border-coral-red">
          <input
            className="w-full px-3 py-2 focus:outline-none focus:bg-gray-100"
            type="number"
            name="fixedRate"
            value={loanInfo.fixedPeriod}
            onChange={handleLoanChange}
            disabled={loanInfo.isFixedRate ? false : true}
          />
          <p className="px-3 py-2 bg-white">Years</p>
        </div>

        <label className="flex items-center">Standard Variable Rate:</label>
        <div className="flex w-full border-2 border-light-blue rounded text-black focus-within:border-coral-red">
          <input
            className="w-full px-3 py-2 focus:outline-none focus:bg-gray-100"
            type="number"
            name="rate"
            value={loanInfo.rate}
            onChange={handleLoanChange}
          />
          <p className="px-3 py-2 bg-white">%</p>
        </div>

        <label className="flex items-center">Payment Period (in years):</label>
        <div className="flex w-full border-2 border-light-blue rounded text-black focus-within:border-coral-red">
          <input
            className="w-full px-3 py-2 focus:outline-none focus:bg-gray-100"
            type="number"
            name="periodInYears"
            value={loanInfo.periodInYears}
            onChange={handleLoanChange}
          />
          <p className="px-3 py-2 bg-white">Years</p>
        </div>

        <div className="col-span-2 h-px border-b-[5px] border-mustard my-3"></div>

        <label className="font-bold">Monthly Amount Paid:</label>
        <div className="font-bold flex justify-end">
          £{" "}
          {calculateMonthlyPayment(
            loanInfo.price - loanInfo.deposit,
            loanInfo.isFixedRate ? loanInfo.fixedRate : loanInfo.rate, //rate depends of whether fixed rate is chose or not
            loanInfo.periodInYears
          )}
        </div>

      </form>
      <div className="flex">
        <button 
          onClick={loadPage1}
          className="mx-1 px-4 py-2 my-4 bg-gray-300 rounded border border-black hover:bg-coral-red hover:text-white hover:shadow-button-strong transition ease-in-out">
            Back
        </button>
        <button 
          onClick={loadPage3}
          className="mx-1 px-4 py-2 my-4 bg-gray-300 rounded border border-black hover:bg-coral-red hover:text-white hover:shadow-button-strong transition ease-in-out">
            Payment Schedule
        </button>
      </div>
    </div>
  );
};