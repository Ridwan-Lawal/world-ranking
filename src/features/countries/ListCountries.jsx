import { Link } from "react-router-dom";
import Country from "./Country";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, updateTotalCountries } from "./countriesSlice";
import { useEffect } from "react";

/* eslint-disable react/prop-types */
function ListCountries({ countriesList }) {
  const { searchedCountry, sortBy, region, status } = useSelector(getCountry);
  const dispatch = useDispatch();

  // default sorting by population
  const defaultSortBypopulation = countriesList.sort((a, b) => {
    if (sortBy === "Population") return b.population - a.population;
    if (sortBy === "Alphabetical order")
      return a.name.common.localeCompare(b.name.common);
    if (sortBy === "Area") return b.area - a.area;
  });

  // for searching countries
  const searchedCountriesResults = searchedCountry
    ? defaultSortBypopulation?.filter((country) => {
        if (country.name.common.toLowerCase() === searchedCountry.toLowerCase())
          return country;
        else if (country.region.toLowerCase() === searchedCountry.toLowerCase())
          return country;
        else if (
          country?.subregion?.toLowerCase() === searchedCountry.toLowerCase()
        )
          return country;
      })
    : defaultSortBypopulation;

  // for regional filtering
  const filterByRegion = region.length
    ? searchedCountriesResults.filter((country) =>
        region.includes(country.region)
      )
    : searchedCountriesResults;

  // for status filtering

  const statusFiltering = status
    ? filterByRegion.filter((country) =>
        status === "independent" ? country.independent : country.unMember
      )
    : filterByRegion;

  // lists of countries based on searching, filtering and sortings
  const countries = statusFiltering;

  useEffect(
    function () {
      dispatch(updateTotalCountries(countries.length));
    },
    [countries, dispatch]
  );

  return (
    <div className="mt-10">
      <div className="list-header grid grid-cols-4 justify-between border-b-2 pb-4 border-darkGrays gap-2">
        <p>Flag</p>
        <p>Name</p>
        <p>Population</p>
        <p>Area (km²)</p>
      </div>

      <div className="country flex flex-col  py-5 gap-y-7">
        {countries.map((country, id) => (
          <Link key={id} to={`/country/${country.name.common}`}>
            <div className="grid grid-cols-4 gap-4 ">
              <Country country={country} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ListCountries;
