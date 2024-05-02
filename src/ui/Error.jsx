import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.log(error.status);
  console.log(error.data);
  return (
    <div className=" text-white p-5">
      <IoArrowBack
        onClick={() => navigate(-1)}
        className="text-3xl cursor-pointer"
      />
      <div className="flex justify-center items-center h-[93vh] clear-start flex-col gap-2">
        <p className="text-4xl">👻</p>
        <p className="text-xl">Couldn't find the page you're looking for...</p>
        <p className="text-base">{error.data}</p>
      </div>
    </div>
  );
}

export default Error;
