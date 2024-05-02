import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function CountryDetailsFooter({ countryBorders }) {
  const [neighbours, setNeighbours] = useState([]);
  const navigate = useNavigate();

  console.log(countryBorders);

  useEffect(
    function () {
      const abortController = new AbortController();
      const signal = abortController.signal;

      async function getNeigbouringCountries() {
        const res = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${countryBorders.join(
            ","
          )}`,
          { signal }
        );

        const data = await res.json();
        setNeighbours(data);
      }

      getNeigbouringCountries();

      return () => abortController.abort();
    },
    [countryBorders]
  );

  return (
    <footer className="px-8">
      <h3 className="text-grays text-[14px]">Neighbouring Countries</h3>

      <div className="flex gap-5 mt-5 flex-wrap">
        {neighbours.map((neighbour, id) => (
          <section
            onClick={() => navigate(`/country/${neighbour.name.common}`)}
            key={id}
            className="w-fit rounded-[4px] overflow-hidden cursor-pointer"
          >
            <img
              src={neighbour?.flags?.png}
              alt=""
              className="w-20 h-14 rounded-[4px]"
            />
          </section>
        ))}
      </div>
    </footer>
  );
}

export default CountryDetailsFooter;
