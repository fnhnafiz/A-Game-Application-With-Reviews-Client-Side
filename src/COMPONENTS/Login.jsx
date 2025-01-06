import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { setUser, handleSignIn, handleRegisterGoggle } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    console.log({ email, password });
    handleSignIn(email, password)
      .then((result) => {
        setUser(result.user);
        // const loginInfo = { email };
        toast.success("login successfully");
        navigate("/");
      })
      .catch((error) => {
        // console.log("Login Failed", error.message);
        // toast.error("Loging failed");
        toast.error("incorrect pass or email", error);
      });
  };
  const handleGoggleSignIn = () => {
    handleRegisterGoggle()
      .then((result) => {
        setUser(result.user);
        toast.success("Goggle Sign Complete");
        navigate("/");
      })
      .catch((error) => {
        console.log("Login Failed", error.message);
        toast.error("Loging failed");
      });
  };

  return (
    <div className=" bg-loginBanner bg-cover bg-no-repeat min-h-screen flex items-center justify-center">
      <div className=" bg-gray-900  p-10 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl text-center font-bold text-orange-500 mb-4">
          Welcome to Gauge
        </h1>

        <form onSubmit={handleLoginSubmit}>
          <div className="flex flex-col mb-4">
            <label className="text-white mb-2">Email</label>
            <div className="relative">
              <input
                name="email"
                type="text"
                className="w-full border text-white border-gray-700 bg-transparent p-4 pl-10 rounded-md focus:outline-none focus:border-orange-500"
                placeholder="Enter your Email"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-white mb-2">Password</label>
            <div className="relative">
              <input
                name="password"
                type="password"
                className="w-full border text-white border-gray-700 bg-transparent p-4 pl-10 rounded-md focus:outline-none focus:border-orange-500"
                placeholder="Enter your password"
              />
            </div>
            <p className="font-thin text-sm py-6 text-white">
              You do not have an account? Please{" "}
              <Link to="/register" className="text-green-500 hover:underline ">
                Register Here
              </Link>
            </p>
          </div>

          <div className="space-y-5">
            <button
              type="submit"
              className="bg-transparent border hover:bg-orange-500 transition duration-300 border-orange-700 text-white font-bold py-2 px-4 rounded-md w-full"
            >
              Login
            </button>
          </div>
        </form>
        <button
          onClick={handleGoggleSignIn}
          type="submit"
          className="mt-3 bg-transparent border flex items-center gap-3 justify-center border-orange-700 text-white font-bold py-2 px-4 rounded-md w-full"
        >
          Register with Google
          <FcGoogle className="text-3xl" />
        </button>
      </div>
    </div>
  );
};

export default Login;
