import React, { useState } from "react";

const Card = ({ name, image, sizes, type }) => {
  const [showSizes, setShowSizes] = useState(false);

  const handleMouseEnter = () => {
    setShowSizes(true);
  };

  const handleMouseLeave = () => {
    setShowSizes(false);
  };

  const toggleShowSizesMobile = () => {
    setShowSizes(!showSizes);
  };

  return (
    <div
      className="relative hover:shadow-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      /*  onClick={isMobile ? toggleShowSizesMobile : undefined} */
    >
      <div className="p-2 md:flex-shrink-0">
        <img
          src={image}
          width="248"
          height="248"
          alt={name}
          className="rounded-lg w-[248px] h-[248px] object-fill mx-auto"
        />
        <div className="bg-blue-400 text-center uppercase text-xxl text-white font-bold">
          {name}
        </div>
      </div>
      {showSizes && (
        <div className="z-50 absolute top-full left-0 w-full mt-2 bg-white shadow-lg">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Tabla de tamaños</th>
              </tr>
            </thead>
            <tbody>
              {sizes.map((size, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Card;
