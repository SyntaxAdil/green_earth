import React from "react";

const PlantCard = ({plant,addToCart}) => {

  return (
    <div className="card bg-base-100  shadow-sm aspect-square  p-3 mx-auto w-full">
      <figure>
        <img
          src={plant.image}
          alt={plant.name}
          className="aspect-video"
        />
      </figure>
      <div className="py-4 px-2">
        <h2 className="card-title text-md ">{plant.name}</h2>
        <p className="text-sm">
          {plant.description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="badge bg-[#dcfce7] text-[#479f68] rounded-full font-medium badge-soft">
            {plant.category}
          </div>
          <span className="text-md  font-medium">৳{plant.price}</span>
        </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn bg-[#15803d] text-white rounded-full w-full" onClick={()=>addToCart(plant)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
