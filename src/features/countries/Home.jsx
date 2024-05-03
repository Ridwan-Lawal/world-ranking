import { useLoaderData } from "react-router-dom";
import { getCountries } from "../../services/getCountries";
import SearchCountry from "./SearchCountry";
import ListCountries from "./ListCountries";
import FilterCountries from "./FilterCountries";

function Home() {
  const countriesList = useLoaderData();

  return (
    <div className="px-6 bg-veryDarkGrays md:rounded-2xl  py-8 md:px-8 md:pt-10 md:pb-6 md:border md:border-darkGrays">
      <SearchCountry />
      <div className="md:flex gap-10 md:mt-2">
        <FilterCountries />
        <ListCountries countriesList={countriesList} />
      </div>
    </div>
  );
}

export async function loader() {
  const countriesList = await getCountries();
  return countriesList;
}

export default Home;
