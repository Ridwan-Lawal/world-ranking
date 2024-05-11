import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { loader as countryLoader } from "./features/countryDetails/CountryDetails";
import { loader as countriesListLoader } from "./features/countries/Home";
import { Suspense, lazy } from "react";
import Error from "./ui/Error";
import Loader from "./ui/Loader";

const Home = lazy(() => import("./features/countries/Home"));
const AppLayout = lazy(() => import("./ui/AppLayout"));
const CountryDetails = lazy(() =>
  import("./features/countryDetails/CountryDetails")
);

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: countriesListLoader,
        },

        {
          path: "/country/:countryName",
          element: <CountryDetails />,
          loader: countryLoader,
        },
      ],
    },
  ]);

  return (
    <div className="min-h-screen relative oveflow-auto pb-10 bg-veryDarkGrays  font-vietnam">
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
