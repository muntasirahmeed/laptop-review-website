import React from 'react';

const ReviewDetails = ({ singleReview }) => {
    const { name, image, rating,review } = singleReview;
    return <div>
        <div className='flex flex-col items-center w-[350px] md:w-[400px] px-5 py-10 bg-white rounded-xl shadow-xl'>
            <img className='w-24 h-24 rounded-full ring-4 ring-pink-700' src={image} alt="" />
            <h1 className='mt-4 text-2xl '>{name}</h1>
            <p className='text-xl '>Rating: {rating}</p>
            <p className='mt-4 text-justify font-serif'>{ review}</p>
      </div>
  </div>;
};

export default ReviewDetails;