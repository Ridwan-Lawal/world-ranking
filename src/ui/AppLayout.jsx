import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className=" ">
      <Header />
      <main className=" md:px-8 md:-mt-10">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
