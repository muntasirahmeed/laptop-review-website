import React from "react";
import useReview from "../../hooks/useReview";
import ReviewDetails from "../ReviewDetails/ReviewDetails";
import Spinner from "../Spinner/Spinner";

const Review = () => {
  const [reviews, setReviews, loading] = useReview();
  return (
    <div className="bg-gray-100 pb-12">
      <h1 className="text-2xl md:text-3xl xl:text-5xl text-center py-10 text-gray-600">
        Welcome To Reviews Page
      </h1>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 justify-items-center py-5">
          {reviews.map((singleReview) => (
            <ReviewDetails
              key={singleReview.id}
              singleReview={singleReview}
            ></ReviewDetails>
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
