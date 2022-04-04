import React from 'react';
import { useNavigate } from 'react-router-dom';
import headerImg2 from '../../Assets/headerImg2.png'
import useReview from '../../hooks/useReview';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
const Home = () => {
    const [reviews, setReviews] = useReview();
    const navigate =useNavigate()
    return (
      <div>
        <div className="flex flex-col-reverse md:flex-row h-full md:h-[90vh] items-center px-10 py-10 bg-pink-50 	 mx-auto">
          <div className="space-y-5 w-full md:w-1/2">
            <h1 className="text-2xl md:text-5xl font-semibold text-pink-700 ">
              Welcome to{" "}
              <span className="font-mono text-green-700">Tech Info</span>
            </h1>
            <p className="text-xl text-gray-600">
              Wanna Buy a Laptop? Then must be know the information about your
              Favourite model . we are help you too know the information click
              the button to explore
            </p>
            <button
              onClick={() => navigate("/reviews")}
              className="bg-pink-700 text-white px-6 py-2 text-normal rounded-full "
            >
              Expart Says
            </button>
          </div>
          <div className="	">
            <img
              className=" mb-5 md:m-0 h-auto   md:w-[600px] xl:w-full p-4 rounded-xl "
              src={headerImg2}
              alt=""
            />
          </div>
        </div>
        {/* review section  */}
        <div className="py-16 bg-gray-100">
          <h1 className="text-center text-3xl mb-10">
            Customar Reviews : {reviews.length}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 justify-items-center ">
            {reviews.slice(0, 3).map((singleReview) => (
              <ReviewDetails
                key={singleReview.id}
                singleReview={singleReview}
              ></ReviewDetails>
            ))}
          </div>
          <button
            onClick={() => navigate("/reviews")}
            className="bg-pink-700 text-white px-6 py-2 text-normal rounded-full block mx-auto mt-10"
          >
            See All Reviews
          </button>
        </div>
      </div>
    );
};

export default Home;