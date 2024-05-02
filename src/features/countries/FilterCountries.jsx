import RegionalFilter from "./RegionalFilter";
import SortCountries from "./SortCountries";
import StatusFilter from "./StatusFilter";

function FilterCountries() {
  return (
    <div className="space-y-8 mt-10">
      <SortCountries />
      <RegionalFilter />
      <StatusFilter />
    </div>
  );
}

export default FilterCountries;
