import React from 'react';

const Home = () => {
  return (
    <main className="flex-1 dark:bg-gray-700 grid place-items-center bg-wave dark:bg-wave-dark bg-no-repeat bg-scroll bg-cover bg-center">
      <div className="mx-auto max-w-max px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Book Finder</h2>

          <p className="mt-4 text-base font-semibold tracking-wide text-blue-600 dark:text-blue-300 uppercase">
            Storing books made easier
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
