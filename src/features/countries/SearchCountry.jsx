import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, updateSearchedCountry } from "./countriesSlice";

function SearchCountry() {
  const [searchCountry, setSearchCountry] = useState();
  const { totalCountries } = useSelector(getCountry);

  const dispatch = useDispatch();

  function handleSearchCountry(e) {
    e.preventDefault();
    dispatch(updateSearchedCountry(searchCountry));
  }

  return (
    <div className="flex justify-between items-center gap-5 ">
      <p className="text-grays font-semibold sm:text-[17.5px] text-[16px] w-[40%]">
        Found {totalCountries} countries
      </p>

      <form
        onSubmit={handleSearchCountry}
        action=""
        className="bg-darkGrays flex gap-4 py-2.5 rounded-xl px-3 w-[400px] items-center"
      >
        <section>
          <img src="/assets/Search.svg" alt="search" className="w-[30px]" />
        </section>
        <input
          type="text"
          name="search"
          value={searchCountry}
          onChange={(e) => setSearchCountry(e.target.value)}
          id="search"
          placeholder="Search by Name, Region, Subregion"
          className="bg-inherit placeholder:text-grays placeholder:font-semibold placeholder:text-[13px] text-[14px] w-full font-medium focus:outline-none text-lightGrays"
        />
      </form>
    </div>
  );
}

export default SearchCountry;
