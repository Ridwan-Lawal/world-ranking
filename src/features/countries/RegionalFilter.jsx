import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { getCountry, updateRegion } from "./countriesSlice";

function RegionalFilter() {
  const { region } = useSelector(getCountry);
  const dispatch = useDispatch();

  return (
    <div>
      <p className="text-grays sm:text-sm text-[13px] font-semibold">Region</p>
      <div className="flex gap-3 mt-3.5 flex-wrap">
        {["Americas", "Antarctic", "Africa", " Asia", "Europe", "Oceania"].map(
          (continent, id) => (
            <Button
              onClick={() => dispatch(updateRegion(continent))}
              clickStyle={
                region.includes(continent)
                  ? "text-lightGrays bg-darkGrays"
                  : "text-grays"
              }
              key={id}
              content={continent}
            />
          )
        )}
      </div>
    </div>
  );
}

export default RegionalFilter;
