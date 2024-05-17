import React from "react";

const Card = ({ name, category, image, sizes, type }) => {
  return (
    <div className="hover:shadow-xl">
      <div className="p-2 md:flex-shrink-0">
        <img
          src={image}
          width="248"
          height="248"
          alt={name}
          className="rounded-lg"
        />
        <div className="bg-blue-400 uppercase text-xxl text-white font-bold">
          {name}
        </div>
      </div>
      <div className="mt-4">
        {/*  <p className="mt-2 text-gray-900">
          {category} - {type} - {sizes?.join(", ").toUpperCase()}
        </p> */}
      </div>
    </div>
  );
};

export default Card;
