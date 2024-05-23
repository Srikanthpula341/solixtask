
import { FC } from 'react';

const PromotionalSection: FC = () => {
  return (
    <div className='m-4'>
      <div className="bg-gradient-to-r from-purple-100 to-white py-12 px-8 rounded-lg shadow-lg">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              Lorem Ipsum is simply dummy text of the
            </h2>
            <p className="text-gray-700 mb-4">
              Make a career match where the people, perks and values align with
              your needs.
            </p>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
              Get Started &rarr;
            </button>
            <p className="mt-6 text-gray-500">
              Trusted by over 100+ Executives who worked previously with,
            </p>
            <div className="flex flex-wrap mt-4 space-x-4">
              <img
                src="https://via.placeholder.com/50x30"
                alt="Company 1"
                className="h-8"
              />
              <img
                src="https://via.placeholder.com/50x30"
                alt="Company 2"
                className="h-8"
              />
              <img
                src="https://via.placeholder.com/100x30"
                alt="Company 3"
                className="h-8"
              />
              <img
                src="https://via.placeholder.com/100x30"
                alt="Company 4"
                className="h-8"
              />
              <img
                src="https://via.placeholder.com/100x30"
                alt="Company 5"
                className="h-8"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://via.placeholder.com/150x200"
              alt="Promotional 1"
              className="w-1/2 h-auto mx-2"
            />
            <img
              src="https://via.placeholder.com/150x200"
              alt="Promotional 2"
              className="w-1/2 h-auto mx-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalSection;
