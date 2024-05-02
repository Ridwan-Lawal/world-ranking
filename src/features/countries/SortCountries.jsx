import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, updateSortBy } from "./countriesSlice";

function SortCountries() {
  const [isSortTabOpen, setIsSortTabOpen] = useState(false);

  const { sortBy } = useSelector(getCountry);

  const dispatch = useDispatch();

  function handleSelectSort(sortType) {
    dispatch(updateSortBy(sortType));
    setIsSortTabOpen(false);
  }

  return (
    <div className="space-y-3.5 transition-all duration-500">
      <p className="text-grays sm:text-sm text-[13px] font-semibold">Sort by</p>
      <div className="border-2 border-darkGrays rounded-xl px-4">
        <div
          onClick={() => setIsSortTabOpen((curState) => !curState)}
          className="flex cursor-pointer items-center justify-between    py-2.5"
        >
          <p className="text-white font-semibold text-[15px] sm:text-base">
            {sortBy === "Area" ? `${sortBy} (km²)` : sortBy}
          </p>
          <p
            className={
              isSortTabOpen && "rotate-180 transition-transform duration-400"
            }
          >
            <IoIosArrowDown className="text-grays text-xl" />
          </p>
        </div>

        {isSortTabOpen && (
          <ul className="sort-countries  border-t py-1.5 border-darkGrays">
            <li onClick={() => handleSelectSort("Population")} className="">
              Population
            </li>
            <li
              onClick={() => handleSelectSort("Alphabetical order")}
              className="border-y border-darkGrays"
            >
              Alphabetical order
            </li>
            <li onClick={() => handleSelectSort("Area")} className="">
              Area (km²)
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default SortCountries;
