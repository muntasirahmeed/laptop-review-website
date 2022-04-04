import React from 'react';

const Blogs = () => {
    return (
      <div className="bg-slate-100 h-full">
        <h1 className="text-3xl md:text-5xl text-center py-10 text-gray-600">
          Question Answers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 px-10 py-16">
          <div className="px-8 py-4 rounded-xl shadow-xl ">
            <h1 className="text-2xl md:text-4xl text-center mb-8">
              What is Context API ?
            </h1>
            <p className="text-normal md:text-xl text-gray-600">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux. Context API is a
              (kind of) new feature added in version 16.3 of React that allows
              one to share state across the entire app (or part of it) lightly
              and with ease.
            </p>
          </div>
          <div className="px-4 py-2 rounded-xl shadow-xl ">
            <h1 className="text-2xl md:text-4xl text-center mb-8">
              Inline vs Inline-block vs Block
            </h1>
            <p className="text-normal md:text-xl text-gray-600">
              <p className="mb-2">
                <b>01. inline :</b> The element doesn’t start on a new line and
                only occupy just the width it requires.You can’t set the width
                or height.
              </p>
              <p className="mb-2">
                <b>02. inline-block :</b> It’s formatted just like the inline
                element, where it doesn’t start on a new line. BUT, you can set
                width and height values.
              </p>
              <p className="mb-2">
                <b>03. block :</b> The element will start on a new line and
                occupy the full width available. And you can set width and
                height values.
              </p>
            </p>
          </div>
        </div>
        <div className='px-10 pb-10'>
          <div className="w-full md:w-1/2 mx-auto gap-4  px-4  rounded-xl shadow-xl  py-8">
            <h1 className="text-2xl md:text-4xl text-center mb-8">
              What is Semantic Tag ?
            </h1>
            <p className="text-normal md:text-xl text-gray-600">
              A semantic element is an element of code that uses words to
              clearly represent what that element contains, in human language.
              For practical purposes, many of those researching semantic
              elements are looking at English language words used for the
              purposes of semantic labeling.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blogs;