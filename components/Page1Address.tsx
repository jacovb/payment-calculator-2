import { AddressTypes } from "./model";

export default function Page1Address ({address, handleAddressChange}: {address: AddressTypes, handleAddressChange: any}) {
  return (
    <form>
      <label>Flat Number / Building Name:</label>
      <input
        className="input-address"
        type="text"
        name="buildingName"
        value={address.buildingName}
        onChange={handleAddressChange}
      />

      <label>Street Number:</label>
      <input
        className="input-address"
        type="text"
        name="streetNumber"
        value={address.streetNumber}
        onChange={handleAddressChange}
      />

      <label>Street Name:</label>
      <input
        className="input-address"
        type="text"
        name="streetAddress"
        value={address.streetAddress}
        onChange={handleAddressChange}
      />

      <label>City:</label>
      <input
        className="input-address"
        type="text"
        name="city"
        value={address.city}
        onChange={handleAddressChange}
      />

      <label>Postal Code:</label>
      <input
        className="input-address"
        type="text"
        name="postalCode"
        value={address.postalCode}
        onChange={handleAddressChange}
      />
    </form>
  );
};