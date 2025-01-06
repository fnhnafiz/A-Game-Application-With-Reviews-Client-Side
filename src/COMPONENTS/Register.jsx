import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import registerImg from "../../public/assets/Gaming-amico.png";

const Register = () => {
  const { handleCreateUser, manageProfile, setUser, handleLogOut } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const photo = formData.get("photo");
    const password = formData.get("password");
    // console.log({ name, email, photo, password });
    const newUsers = {
      name,
      email,
      photo,
    };
    const passwordRegex = /^(?=.*[A-Z]).*$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must: Uppercase");
      return;
    }
    const lowercase = /^(?=.*[a-z]).*$/;
    if (!lowercase.test(password)) {
      toast.error("Password must: lowercase");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be  6 characters");
      return;
    }

    handleCreateUser(email, password)
      .then((result) => {
        setUser(result.user);
        manageProfile(name, photo);
        fetch("https://a-game-review-application-server.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUsers),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            // console.log(data);
            if (data.insertedId) {
              toast.success("Registered complete");
              handleLogOut();
              navigate("/login");
            }
          });
      })
      .catch((error) => {
        console.log("error", error.message);
        toast.error("Register Failed");
      });
  };

  return (
    <div className="bg-loginBanner bg-cover bg-no-repeat min-h-screen flex items-center justify-center py-12">
      <div className="flex flex-col-reverse md:flex-row items-center px-8 md:px-20">
        <div className="flex-1 bg-gray-900 p-10 rounded-lg shadow-md w-full max-w-6xl">
          <h1 className="text-2xl md:text-5xl text-center font-bold text-orange-500 mb-4">
            Join the Gaming Community
          </h1>
          <p className="text-white text-center font-thin pb-6">
            Create an account to unlock exclusive features! Add reviews, build
            your personalized watchlist, and connect with fellow gamers to share
            your gaming experiences.
          </p>

          <form onSubmit={handleSubmit} className=" ">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col mb-4">
                <label className="text-white mb-2">Name</label>
                <div className="relative">
                  {/* <FaUser className="absolute left-3 top-2 text-gray-400" /> */}
                  <input
                    name="name"
                    type="text"
                    className="w-full border border-gray-700 text-white bg-transparent p-4 pl-10 rounded-md focus:outline-none focus:border-orange-500"
                    placeholder="Enter your Name"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <label className="text-white mb-2">Email</label>
                <div className="relative">
                  {/* <FaUser className="absolute left-3 top-2 text-gray-400" /> */}
                  <input
                    name="email"
                    type="email"
                    className="w-full border border-gray-700 text-white bg-transparent p-4 pl-10 rounded-md focus:outline-none focus:border-orange-500"
                    placeholder="Enter your Email"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col mb-4 ">
                <label className="text-white mb-2">Photo URL</label>
                <div className="relative">
                  {/* <FaUser className="absolute left-3 top-2 text-gray-400" /> */}
                  <input
                    name="photo"
                    type="text"
                    className="w-full border border-gray-700 text-white bg-transparent p-4 pl-10 rounded-md focus:outline-none focus:border-orange-500"
                    placeholder="Enter your Photo URL"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-4">
                <label className="text-white mb-2">Password</label>
                <div className="relative">
                  {/* <FaKey className="absolute left-3 top-2 text-gray-400" /> */}
                  <input
                    name="password"
                    type="password"
                    className="w-full border border-gray-700 text-white bg-transparent p-4 pl-10 rounded-md focus:outline-none focus:border-orange-500"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <p className="font-thin text-sm py-6 text-white">
                Already have an account? Please{" "}
                <Link to="/login" className="text-green-500 hover:underline ">
                  Login Here
                </Link>
              </p>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md w-full"
            >
              Register
            </button>
          </form>
        </div>
        <div className="flex-1">
          <img className="w-full" src={registerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Register;
