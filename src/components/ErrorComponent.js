import { useRouteError } from "react-router";

const ErrorComponent = () => {
  const error = useRouteError();

  return (
    <div className="error-body">
      <h1>Opps! Something went wrong!!</h1>
      <span>{error.data}</span><br/>
      <span>Status Code : {error.status}</span><br/>
      <span>Issue: {error.statusText}</span>
    </div>
  );
};

export default ErrorComponent;
