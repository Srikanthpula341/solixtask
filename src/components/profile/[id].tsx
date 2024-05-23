import React from 'react'

const IdPage = ({ params }: any) => {
  const id = params.id;

  return <div className="bg-[#0011ff]">IdPage{id}</div>;
};

export default IdPage;