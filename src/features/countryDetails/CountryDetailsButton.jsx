/* eslint-disable react/prop-types */
import { formatNumber } from "../../utils/formatNumber";

function CountryDetailsButton({ content, value }) {
  return (
    <button className="text-lightGrays text-[13px] bg-darkGrays py-3 px-6 rounded-lg  space-x-5">
      <span className="py-1">{content}</span>
      <span className="border-l border-veryDarkGrays py-1.5"></span>
      <span className="py-1 ">{formatNumber(value)}</span>
    </button>
  );
}

export default CountryDetailsButton;
