import { Bars } from "react-loader-spinner";

function Loader() {
  return (
    <div className=" absolute w-full h-full top-0 z-50 left-0 flex justify-center items-center backdrop-blur-sm ">
      <Bars
        height="50"
        width="50"
        color="white"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
