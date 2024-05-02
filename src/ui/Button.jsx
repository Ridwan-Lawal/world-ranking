/* eslint-disable react/prop-types */
function Button({ content = "Button", clickStyle, onClick }) {
  //style for click text-lightGrays bg-darkGrays
  return (
    <button
      onClick={onClick}
      className={`text-[13px] px-3.5 py-[5px] rounded-lg ${clickStyle}  font-bold`}
    >
      {content}
    </button>
  );
}

export default Button;
