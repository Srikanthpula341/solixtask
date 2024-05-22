
import { FC } from "react";

const HowItWorks: FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 py-16 px-32">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
        <img
          src="https://via.placeholder.com/400x300" // Replace with actual image URL
          alt="How it works"
          className="rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-2xl font-bold mb-4">How it Works</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <strong>Register Yourself</strong>
            <p>
              <a href="#" className="text-blue-500 hover:underline">
                Login/Sign up
              </a>{" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </li>
          <li>
            <strong>Start Accepting Donations</strong>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </li>
          <li>
            <strong>Achieve Your Goals</strong>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default HowItWorks;
