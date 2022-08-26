export type AddressTypes = {
  buildingName: string,
  streetNumber: string,
  streetAddress: string,
  city: string,
  postalCode: string,
}

export type LoanDataTypes = {
  price: number,
  deposit: number,
  rate: number,
  fixedRate: number,
  isFixedRate: boolean,
  periodInYears: number,
  fixedPeriod: number,
  totalAnnualPayments: any,
  paymentSchedule: Array<any>,
}

export type PageTypes = {
  isPage1Visible: boolean,
  isPage2Visible: boolean,
  isPage3Visible: boolean,
}