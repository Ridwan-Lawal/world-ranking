import CountryDetailsButton from "./CountryDetailsButton";

/* eslint-disable react/prop-types */
function CountryDetailsHeader({ countryData }) {
  return (
    <header className="flex  flex-col items-center gap-9 ">
      <section className="rounded-lg overflow-hidden w-fit -mt-10">
        <img
          src={countryData?.flags?.png}
          alt="flag"
          className=" h-[130px] w-[180px] "
        />
      </section>

      <section className="text-lightGrays text-center space-y-1 ">
        <p className="text-[20px] font-semibold">{countryData?.name?.common}</p>
        <p className="text-[14px] ">{countryData?.name?.official}</p>
      </section>

      <section className="flex gap-8">
        <CountryDetailsButton
          content="Population"
          value={countryData?.population}
        />
        <CountryDetailsButton content="Area (km²)" value={countryData?.area} />
      </section>
    </header>
  );
}

export default CountryDetailsHeader;
