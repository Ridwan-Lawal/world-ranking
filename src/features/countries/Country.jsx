import { formatNumber } from "../../utils/formatNumber";

/* eslint-disable react/prop-types */
function Country({ country }) {
  const style = {
    whiteSpace: "initial",
  };
  return (
    <>
      <section className="w-fit rounded-[4px] overflow-hidden">
        <img
          src={country?.flags?.svg ?? country?.flags?.png}
          alt=""
          className="w-16 h-10 rounded-[4px]"
        />
      </section>
      <div>
        <p className="w-16 bread-all  border">
          {country?.name?.common.slice(0, 6)}
        </p>
        <p>{country?.name?.common.slice(7)}</p>
      </div>
      <div>
        <p style={style} className="w-16  break-words  flex border">
          {formatNumber(country?.population).slice(0, 8)}
        </p>
        <p>{formatNumber(country?.population).slice(8)}</p>
      </div>

      <div>
        <p>{formatNumber(country?.area)}</p>
      </div>
    </>
  );
}

export default Country;
