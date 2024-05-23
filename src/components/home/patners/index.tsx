'use client'

import Link from "next/link";
import { FC } from "react";

type Leader = {
  id: string;
  name: string;
  title: string;
  company: string;
  imageUrl: string;
};

const leaders: Leader[] = [
  {
    name: "Albert Flores",
    title: "CEO",
    company: "Google Software",
    imageUrl: "https://via.placeholder.com/150",
    id: "1",
  },
  {
    name: "Guy Hawkins",
    title: "CEO",
    company: "Google Software",
    imageUrl: "https://via.placeholder.com/150",
    id: "2",
  },
  {
    name: "Ralph Edwards",
    title: "CEO",
    company: "Google Software",
    imageUrl: "https://via.placeholder.com/150",
    id: "3",
  },
  {
    name: "Eleanor Pena",
    title: "CEO",
    company: "Google Software",
    imageUrl: "https://via.placeholder.com/150",
    id: "4",
  },
];

const PartneredLeaders: FC = () => {

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Partnered TALLeaders</h2>
        <p className="mb-12 w-100">
          Discover the distinct advantages of using the trusted TALGiving
          platform to connect your impactful causes with diverse donors.
        </p>
        <div className="flex flex-wrap justify-center">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-lg overflow-hidden shadow-lg m-4 w-52"
            >
              <img
                src={leader.imageUrl}
                alt={leader.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-xl text-left">{leader.name}</h3>
                <p className="text-gray-700">
                  {leader.title}{" "}
                  <span className="font-semibold">{leader.company}</span>
                </p>
                <Link href={`/profile/${leader.id}`} passHref>
                  <div className="text-red-500 mt-4 inline-block">
                    Profile <span className="ml-1">🔗</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-white text-black py-2 px-6 rounded-lg shadow-lg">
            Get Started
          </button>
          <button className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default PartneredLeaders;
