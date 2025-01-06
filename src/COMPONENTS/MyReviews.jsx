// import { useContext, useEffect, useState } from "react";
import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";
// import { AuthContext } from "../Provider/AuthProvider";

const MyReviews = () => {
  const loadedReviews = useLoaderData();
  const [reviews, setReviews] = useState(loadedReviews);
  const { theme } = useContext(AuthContext);

  //   console.log(reviews);
  const handleUserReviewDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(
            `https://a-game-review-application-server.vercel.app/add-reviews/${id}`,
            {
              method: "DELETE",
            }
          )
            .then((result) => result.json())
            .then((data) => {
              console.log("Ey j ami", data);
              if (data.deletedCount > 0) {
                // alert("Delete from client");
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                const deletedUser = reviews.filter(
                  (review) => review._id != id
                );
                setReviews(deletedUser);
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
    console.log("click id", id);
  };

  return (
    <div className={`p-4 ${theme}`}>
      <h1 className="text-2xl font-bold mb-4 text-center">My Reviews</h1>
      {reviews && reviews.length > 0 ? (
        <div className={`overflow-x-auto ${theme}`}>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className={`border border-gray-300 px-4 py-2 ${theme}`}>
                  Name
                </th>
                <th className={`border border-gray-300 px-4 py-2 ${theme}`}>
                  Description
                </th>
                <th className={`border border-gray-300 px-4 py-2 ${theme}`}>
                  Rating
                </th>
                <th className={`border border-gray-300 px-4 py-2 ${theme}`}>
                  Year
                </th>
                <th className={`border border-gray-300 px-4 py-2 ${theme}`}>
                  Genres
                </th>
                <th className={`border border-gray-300 px-4 py-2 ${theme}`}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review._id} className={` ${theme}`}>
                  <td className="border border-gray-300 px-4 py-2">
                    {review.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {review.description}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {review.rating}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {review.year}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {review.genres}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex gap-2">
                      <Link to={`/update/${review._id}`}>
                        <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
                          Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleUserReviewDelete(review._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No reviews found for this email.
        </p>
      )}
    </div>
  );
};

export default MyReviews;
