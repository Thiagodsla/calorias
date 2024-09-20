import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.jsx";
import App from '../App.jsx';


export default createBrowserRouter([
  {
    path: "/calorias/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

