import React from "react";

const Card = ({ name, category, image, sizes, type }) => {
  return (
    <div className="md:flex border m-10 w-1/3">
      <div className="p-2 md:flex-shrink-0">
        <img
          src={image}
          width="248"
          height="248"
          alt={name}
          className="rounded-lg"
        />
      </div>
      <div className="mt-4">
        <div className="uppercase text-xxl text-green-600 font-bold">
          {name}
        </div>

        {/*  <p className="mt-2 text-gray-900">
          {category} - {type} - {sizes?.join(", ").toUpperCase()}
        </p> */}
      </div>
    </div>
  );
};

export default Card;
