import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function CountryDetailsFooter({ countryBorders }) {
  const [neighbours, setNeighbours] = useState([]);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  useEffect(
    function () {
      const abortController = new AbortController();
      const signal = abortController.signal;

      async function getNeigbouringCountries() {
        try {
          const res = await fetch(
            `https://restcountries.com/v3.1/alpha?codes=${countryBorders?.join(
              ","
            )}`,
            { signal }
          );

          if (!res.ok) throw new Error("No neighboring countries");

          const data = await res.json();
          setNeighbours(data);
        } catch (err) {
          if (err.name === "AbortError") return;
          setErrors(err.message);
        }
      }

      getNeigbouringCountries();

      return () => abortController.abort();
    },
    [countryBorders]
  );

  return (
    <footer className="px-8">
      <h3 className="text-grays text-[14px]">Neighbouring Countries:</h3>

      <div className="flex  justify-start items-center flex-wrap gap-y-5  mt-5">
        <p className="text-grays text-[13px]">{errors}</p>
        {neighbours?.map((neighbour, id) => (
          <div className=" mr-4" key={id}>
            <section
              onClick={() => navigate(`/country/${neighbour.name.common}`)}
              className="w-fit rounded-[4px] overflow-hidden cursor-pointer"
            >
              <img
                src={neighbour?.flags?.png}
                alt=""
                className="w-20 h-14 rounded-[4px]"
              />
            </section>
            <p className="mt-2 text-[13px] text-lightGrays  max-w-[80px]">
              {}
              {neighbour.name.common}
            </p>
          </div>
        )) ?? <p>No neighbouring countries</p>}
      </div>
    </footer>
  );
}

export default CountryDetailsFooter;
