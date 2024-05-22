
import { FC } from "react";
import { FaRegSmile, FaUsers, FaHandsHelping, FaPodcast } from "react-icons/fa";


type Feature = {
  icon: JSX.Element;
  title: string;
  description: string;
};
const features: Feature[] = [
  {
    icon: <FaRegSmile />,
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    icon: <FaUsers />,
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    icon: <FaHandsHelping />,
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
  {
    icon: <FaPodcast />,
    title: "Lorem Ipsum",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting",
  },
];

const Features: FC = () => {
  return (
    <div className="text-center py-16 bg-white">
      <h2 className="text-3xl font-bold mb-4">
        Empowering Change and Spreading Kindness
      </h2>
      <p className="mb-8">
        Join us and thousands of others in making a real difference in the lives
        of people across borders and cultures
      </p>
      <div className="flex flex-wrap justify-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-lg m-4 p-6 w-60 text-center"
          >
            <div className="text-4xl text-red-500 mb-4">{feature.icon}</div>
            <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="bg-white text-red-500 border border-red-500 py-2 px-6 rounded-lg shadow-lg hover:bg-red-500 hover:text-white transition duration-300">
          Become a TALLleader
        </button>
      </div>
    </div>
  );
};

export default Features;
