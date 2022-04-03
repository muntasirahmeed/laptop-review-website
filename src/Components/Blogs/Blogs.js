import React from 'react';

const Blogs = () => {
    return (
      <div className="bg-slate-100 h-screen">
        <h1 className="text-3xl md:text-5xl text-center py-10 text-gray-600">
          Question Answers
        </h1>
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-4 px-10 py-16">
          <div className="px-8 py-4 rounded-xl shadow-xl ">
            <h1 className="text-2xl md:text-4xl text-center mb-8">
              What is Context API ?
            </h1>
            <p className="text-normal md:text-xl text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              veniam illum maxime, fugit quia, adipisci dolor dolorem
              consequuntur non reprehenderit corporis accusantium blanditiis
              quasi nesciunt debitis. Iusto illo error in voluptates esse non
              veritatis et cumque ipsa quibusdam? Quos, consectetur.
            </p>
          </div>
          <div className="px-4 py-2 rounded-xl shadow-xl ">
            <h1 className="text-2xl md:text-4xl text-center mb-8">
              Hello form bd
            </h1>
            <p className="text-normal md:text-xl text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              veniam illum maxime, fugit quia, adipisci dolor dolorem
              consequuntur non reprehenderit corporis accusantium blanditiis
              quasi nesciunt debitis. Iusto illo error in voluptates esse non
              veritatis et cumque ipsa quibusdam? Quos, consectetur.
            </p>
          </div>
        </div>
        <div className="px-4 py-2 rounded-xl shadow-xl w-1/2 mx-auto">
          <h1 className="text-2xl md:text-4xl text-center mb-8">
            What is Semantic Tag ?
          </h1>
          <p className="text-normal md:text-xl text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            veniam illum maxime, fugit quia, adipisci dolor dolorem consequuntur
            non reprehenderit corporis accusantium blanditiis quasi nesciunt
            debitis. Iusto illo error in voluptates esse non veritatis et cumque
            ipsa quibusdam? Quos, consectetur.
          </p>
        </div>
      </div>
    );
};

export default Blogs;