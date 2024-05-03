/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { getCountryByName } from "../../services/getCountryByName";
import CountryDetailsHeader from "./CountryDetailsHeader";
import CountryDetailsMain from "./CountryDetailsMain";
import CountryDetailsFooter from "./CountryDetailsFooter";
import Loader from "../../ui/Loader";
import { IoArrowBack } from "react-icons/io5";

function CountryDetails() {
  const [countryData] = useLoaderData();

  const navigate = useNavigate();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="md:border border-darkGrays  bg-veryDarkGrays md:rounded-xl pb-14">
      <IoArrowBack
        onClick={() => navigate(-1)}
        className="text-3xl absolute cursor-pointer text-white top-5 left-5"
      />
      <CountryDetailsHeader countryData={countryData} />
      <CountryDetailsMain countryData={countryData} />
      <CountryDetailsFooter countryBorders={countryData.borders} />
      {isLoading && <Loader />}
    </div>
  );
}

export async function loader({ params }) {
  const country = await getCountryByName(params.countryName);
  return country;
}

export default CountryDetails;
