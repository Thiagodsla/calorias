import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const err = useRouteError();
  console.error(err);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i></i>
      </p>
    </div>
  );
}