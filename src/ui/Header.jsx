import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className=" h-[37vh] md:h-[50vh] bg-heroImage bg-cover bg-no-repeat bg-center flex items-center justify-center">
      <div className="cursor-pointer" onClick={() => navigate("/")}>
        <img src="/assets/Logo.svg" alt="" className="w-48" />
      </div>
    </header>
  );
}

export default Header;
