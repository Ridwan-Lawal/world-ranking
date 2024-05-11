/* eslint-disable react/prop-types */
import { formatNumber } from "../../utils/formatNumber";

function CountryDetailsButton({ content, value, children }) {
  return (
    <section>
      <button className="text-lightGrays text-[10px] sm:text-[13px] bg-darkGrays py-1.5 sm:py-3 px-3 sm:px-6 rounded-lg  space-x-5">
        <span className="py-1">{children}</span>
        <span className="border-l border-veryDarkGrays py-1.5"></span>
        <span className="py-1 ">{formatNumber(value)}</span>
      </button>
    </section>
  );
}

export default CountryDetailsButton;
