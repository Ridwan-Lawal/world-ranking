import { formatNumber } from "../../utils/formatNumber";

/* eslint-disable react/prop-types */
function Country({ country }) {
  return (
    <>
      <section className="w-fit rounded-[4px] overflow-hidden">
        <img
          src={country?.flags?.svg ?? country?.flags?.png}
          alt=""
          className="w-16 h-10 rounded-[4px]"
        />
      </section>
      <p>{country?.name?.common}</p>
      <p>{formatNumber(country?.population)}</p>
      <p>{formatNumber(country?.area)}</p>
    </>
  );
}

export default Country;
