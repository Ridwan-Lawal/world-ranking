/* eslint-disable react/prop-types */
function CountryDetailsMain({ countryData }) {
  return (
    <main className=" border-t border-darkGrays mt-10 mb-8">
      <section className="text-[14px] border-b py-5 px-8 border-darkGrays flex justify-between items-center">
        <p className="text-grays">Capital</p>
        <p className="text-lightGrays">{countryData?.capital.at(0)}</p>
      </section>

      <section className="text-[14px] border-b py-5 px-8 border-darkGrays flex justify-between items-center">
        <p className="text-grays">SubRegion</p>
        <p className="text-lightGrays">{countryData?.subregion}</p>
      </section>

      <section className="text-[14px] border-b py-5 px-8 border-darkGrays flex justify-between items-center">
        <p className="text-grays">Language</p>
        <p className="text-lightGrays">
          {Object.values(countryData?.languages).join(", ")}
        </p>
      </section>

      <section className="text-[14px] border-b py-5 px-8 border-darkGrays flex justify-between items-center">
        <p className="text-grays">Currencies</p>
        <p className="text-lightGrays">
          {Object.values(countryData?.currencies).at(0).name}
        </p>
      </section>

      <section className="text-[14px] border-b py-5 px-8 border-darkGrays flex justify-between items-center">
        <p className="text-grays">Continents</p>
        <p className="text-lightGrays">{countryData?.continents.at(0)}</p>
      </section>
    </main>
  );
}

export default CountryDetailsMain;
