import { IoCheckmarkSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getCountry, updateStatus } from "./countriesSlice";

function StatusFilter() {
  const { status } = useSelector(getCountry);
  const dispatch = useDispatch();

  return (
    <div>
      <p className="text-grays sm:text-sm text-[13px] font-semibold">Status</p>

      <div className="space-y-4 mt-3.5">
        <section
          onClick={() => dispatch(updateStatus("united nations"))}
          className="flex items-center gap-3.5 w-fit cursor-pointer"
        >
          <div
            className={` rounded-[4px] w-fit  ${
              status === "united nations"
                ? "bg-blue-600 py-[2.5px] px-[3.5px]"
                : "border-grays p-[2.5px] border-2 "
            } `}
          >
            <IoCheckmarkSharp
              className={`text-white  text-xl ${
                status === "united nations" ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <p className="text-lightGrays text-[14px] md:text-[16px]">
            Member of the United Nations
          </p>
        </section>

        <section
          onClick={() => dispatch(updateStatus("independent"))}
          className="flex w-fit  items-center gap-3.5 cursor-pointer"
        >
          <div
            className={` rounded-[4px] w-fit ${
              status === "independent"
                ? "bg-blue-600 py-[2.5px] px-[3.5px]"
                : "border-grays p-[2.5px] border-2"
            }`}
          >
            <IoCheckmarkSharp
              className={`text-white  text-xl ${
                status === "independent" ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
          <p className="text-lightGrays text-[14px] md:text-[16px]">
            Independent
          </p>
        </section>
      </div>
    </div>
  );
}

export default StatusFilter;
