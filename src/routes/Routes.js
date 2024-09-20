import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage.jsx";
import App from '../App.jsx'


export default createBrowserRouter([
  {
    path: "/calorias/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
]);