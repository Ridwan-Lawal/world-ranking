import { Link } from "react-router-dom";
import Country from "./Country";
import { useSelector } from "react-redux";
import { getCountry } from "./countriesSlice";

/* eslint-disable react/prop-types */
function ListCountries({ countriesList }) {
  const { searchedCountry, sortBy, region } = useSelector(getCountry);

  // default sorting by population
  const defaultSortBypopulation = countriesList.sort((a, b) => {
    if (sortBy === "Population") return b.population - a.population;
    if (sortBy === "Alphabetical order")
      return a.name.common.localeCompare(b.name.common);
    if (sortBy === "Area") return b.area - a.area;
  });

  // for searching countries
  const searchedCountriesResults = searchedCountry
    ? defaultSortBypopulation?.filter(
        (country) =>
          country.name.common.toLowerCase() === searchedCountry.toLowerCase()
      )
    : defaultSortBypopulation;
  console.log(searchedCountriesResults);

  // for regional filtering
  const filterByRegion = region.length
    ? searchedCountriesResults.filter((country) =>
        region.includes(country.region)
      )
    : searchedCountriesResults;

  // for status filtering

  return (
    <div className="mt-10">
      <div className="list-header grid grid-cols-4 justify-between border-b-2 pb-4 border-darkGrays">
        <p>Flag</p>
        <p>Name</p>
        <p>Population</p>
        <p>Area (km²)</p>
      </div>

      <div className="country flex flex-col  py-5 gap-y-7">
        {filterByRegion.map((country, id) => (
          <Link key={id} to={`/country/${country.name.common}`}>
            <div className="grid grid-cols-4">
              <Country country={country} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ListCountries;
