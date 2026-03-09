import React from "react";

const PlantCard = ({plant,addToCart}) => {

  return (
    <div className="card bg-base-100  shadow-sm aspect-square  p-3 mx-auto w-full transition-all duration-200 border border-white hover:border-[#479f68] group">
      <figure>
        <img
          src={plant.image}
          alt={plant.name}
          className="aspect-video group-hover:scale-120 transition-all duration-300"
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
          <button className="btn bg-[#15803d] hover:bg-[#0a9a3f] text-white rounded-full w-full" onClick={()=>addToCart(plant)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
