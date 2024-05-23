// src/app/profile/[id]/page.tsx
import Header from "@/app/header";
import React from "react";

interface ProfileProps {
  params: {
    id: string;
  };
}

const ProfilePage: React.FC<ProfileProps> = async ({ params }) => {
  const { id } = params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-purple-100 to-white py-12 px-8 rounded-lg shadow-lg mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/150"
                alt={data.name}
                className="w-32 h-32 rounded-full mr-4"
              />
              <div>
                <h1 className="text-3xl font-bold mb-1">{data.name}</h1>
                <p className="text-gray-700 mb-1">{data.company.name}</p>
                <p className="text-gray-700 mb-1">
                  {data.address.city}, {data.address.street}
                </p>
                <p className="text-gray-700 mb-1">{data.email}</p>
                <a
                  href={`https://${data.website}`}
                  className="text-blue-500 hover:underline"
                >
                  {data.website}
                </a>
              </div>
            </div>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg">
              Edit
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-gray-700">
              Experienced executive with a demonstrated history of working in
              the information technology and services industry. Skilled in
              Storage systems, IT Strategy, Professional Services, Data Center,
              and Management. Large company and start up experience both
              domestically and internationally. Strong entrepreneurship
              professional with an MBA focused in Management from Santa Clara
              University - Leavey School of Business.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Public Profile & URL</h2>
            <p className="text-gray-700 mb-2">
              Personalize the URL for your profile
            </p>
            <p className="text-blue-500 hover:underline">
              www.logoipsum.com/johndoe
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
