import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const [errorMessage, setErrorMessage] = useState("");
  const error = useRouteError();
  const navigate = useNavigate();

  if (error.status === 404) setErrorMessage("This page doesn't exist");

  if (error.status === 503)
    setErrorMessage("Looks like the API is down, couldn't get data!");

  return (
    <div className=" text-white p-5">
      <IoArrowBack
        onClick={() => navigate(-1)}
        className="text-3xl cursor-pointer"
      />
      <div className="flex justify-center items-center h-[93vh] clear-start flex-col gap-2">
        <p className="text-4xl">👻</p>
        <p className="text-xl text-white">{errorMessage}</p>
      </div>
    </div>
  );
}

export default Error;
