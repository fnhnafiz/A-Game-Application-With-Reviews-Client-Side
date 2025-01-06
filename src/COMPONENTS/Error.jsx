import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center">
      <h1 className="font-extrabold text-5xl text-red-500">Error 404</h1>
      <Link to="/">
        <button className="btn btn-warning " type="button">
          Back To Home
        </button>
      </Link>
    </div>
  );
};

export default Error;
