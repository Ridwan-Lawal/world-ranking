import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CountryDetails, {
  loader as countryLoader,
} from "./features/countryDetails/CountryDetails";
import Home, { loader as countriesListLoader } from "./features/countries/Home";

import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

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
          errorElement: <Error />,
        },

        {
          path: "/country/:countryName",
          element: <CountryDetails />,
          errorElement: <Error />,
          loader: countryLoader,
        },
      ],
    },
  ]);

  return (
    <div className="min-h-screen relative oveflow-auto pb-10 bg-veryDarkGrays  font-vietnam">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
