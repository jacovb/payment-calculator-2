import { AddressTypes } from "./model";

const Page1Address: React.FC = ({address}) => {
  return (
    <form>
      <label>Flat Number / Building Name:</label>
      <input
        className="input-address"
        type="text"
        name="buildingName"
        value={address.buildingName}
        onChange={props.handleChange}
      />

      <label>Street Number:</label>
      <input
        className="input-address"
        type="text"
        name="streetNumber"
        value={address.streetNumber}
        onChange={props.handleChange}
      />

      <label>Street Name:</label>
      <input
        className="input-address"
        type="text"
        name="streetAddress"
        value={address.streetAddress}
        onChange={props.handleChange}
      />

      <label>City:</label>
      <input
        className="input-address"
        type="text"
        name="city"
        value={address.city}
        onChange={props.handleChange}
      />

      <label>Postal Code:</label>
      <input
        className="input-address"
        type="text"
        name="postalCode"
        value={address.postalCode}
        onChange={props.handleChange}
      />
    </form>
  );
};

export default Page1Address;