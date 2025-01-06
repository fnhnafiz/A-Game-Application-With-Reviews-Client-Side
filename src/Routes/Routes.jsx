import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../COMPONENTS/MainLayout";
import Home from "../COMPONENTS/Home";
import AllReviews from "../Pages/AllReviews";
import AddReviews from "../Pages/AddReviews";

import GameWatchList from "../Pages/GameWatchList";
import Login from "../COMPONENTS/Login";
import Register from "../COMPONENTS/Register";
import MyReviews from "../COMPONENTS/MyReviews";
import UpdateReviews from "../COMPONENTS/UpdateReviews";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import ReviewDetails from "../COMPONENTS/ReviewDetails";
import Error from "../COMPONENTS/Error";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://a-game-review-application-server.vercel.app/top-reviews/"
          ),
      },
      {
        path: "/all-reviews",
        element: <AllReviews></AllReviews>,
        loader: () =>
          fetch(
            "https://a-game-review-application-server.vercel.app/add-reviews"
          ),
      },
      {
        path: "/add-reviews",
        element: <AddReviews></AddReviews>,
      },
      {
        path: `/my-reviews/:email`,
        element: <MyReviews></MyReviews>,
        loader: ({ params }) =>
          fetch(
            `https://a-game-review-application-server.vercel.app/add-reviews/${params.email}`
          ),
      },
      {
        path: "/watchlist/:email",
        element: <GameWatchList></GameWatchList>,
        loader: ({ params }) =>
          fetch(
            `https://a-game-review-application-server.vercel.app/watchlist/${params.email}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update/:id",
        element: <UpdateReviews></UpdateReviews>,
        loader: ({ params }) =>
          fetch(
            `https://a-game-review-application-server.vercel.app/update/${params.id}`
          ),
      },
      {
        path: "/review-details/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) =>
          fetch(
            `https://a-game-review-application-server.vercel.app/review-details/${params.id}`
          ),
      },
    ],
  },
]);

export default Routes;
