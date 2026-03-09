import React, { useEffect, useState } from "react";
import Wrapper from "./../Wrapper";
import Heading from "./../Heading";
import PlantCard from "./../PlantCard";
import { ShoppingCart, X } from "lucide-react";
import { usePlant } from "../../context/PlantContext";
import SkeletonLoader from "./../SkeletonLoader";
import Pagination from "./../Pagination";

import NO_CART_IMAGE from "../../assets/no-shopping-cart.png";

const ChoiceSection = () => {
  const {
    fetchPlantCategories,
    plants,
    isLoading,
    fetchAllPlant,
    pagination,
    fetchAllPlantByCategory,
    cartData,
    addToCart,
    deleteToCart,
    totalAmount,
  } = usePlant();

  const [selectBtn, setSelectBtn] = useState("all");

  useEffect(() => {
    fetchPlantCategories();
  }, [fetchPlantCategories]);

  useEffect(() => {
    if (selectBtn === "all") {
      fetchAllPlant();
      return;
    }
    fetchAllPlantByCategory(selectBtn);
  }, [selectBtn, fetchAllPlantByCategory, fetchAllPlant]);

  return (
    <section className="py-18 ">
      <Wrapper>
        <Heading content={"Choose Your Trees"} />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-8">
          {/* categories */}

          <div>
            <h3 className="text-xl font-semibold mb-3 md:mb-6">Categories</h3>
            <div className="space-y-2 hidden md:block">
              <button
                className={`px-4 py-2 rounded-sm capitalize font-medium  transition-colors cursor-pointer hover:bg-[#15803d] text-left hover:text-white w-full ${selectBtn === "all" ? "bg-[#15803d] text-white" : ""}`}
                onClick={() => setSelectBtn("all")}
              >
                All Trees
              </button>
              {plants.all_categoires.map((btn) => (
                <button
                  className={`px-4 py-2 rounded-sm capitalize font-medium  transition-colors cursor-pointer hover:bg-[#15803d] text-left hover:text-white w-full ${selectBtn === btn.id ? "bg-[#15803d] text-white" : ""}`}
                  key={btn.id}
                  onClick={() => setSelectBtn(btn.id)}
                >
                  {btn.category_name}
                </button>
              ))}
            </div>

            <div className="flex md:hidden items-center gap-4 overflow-x-auto py-3 scrollbar-none">
              <button
                className={`btn  rounded-full   capitalize font-medium  transition-colors cursor-pointer hover:bg-[#15803d] text-left hover:text-white ${selectBtn === "all" ? "bg-[#15803d] text-white" : ""}`}
                onClick={() => setSelectBtn("all")}
              >
                All Trees
              </button>
              {plants.all_categoires.map((btn) => (
                <button
                  className={`btn  rounded-full  capitalize font-medium  transition-colors cursor-pointer hover:bg-[#15803d] text-left hover:text-white  ${selectBtn === btn.id ? "bg-[#15803d] text-white" : ""}`}
                  key={btn.id}
                  onClick={() => setSelectBtn(btn.id)}
                >
                  {btn.category_name}
                </button>
              ))}
            </div>
          </div>

          {/* plants  */}
          <section className="col-span-3 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {isLoading ? (
                <SkeletonLoader count={4} />
              ) : (
                pagination.map((plant) => (
                  <PlantCard
                    plant={plant}
                    key={plant.id}
                    addToCart={addToCart}
                  />
                ))
              )}
            </div>
            <Pagination />
          </section>
          

          {/* carts */}
          <div className="bg-white rounded-md p-4 h-fit md:min-h-170">
            <div className="flex items-center justify-between mb-6 ">
                <h3 className="text-xl font-semibold">Your Carts</h3>
                <span className="relative "><ShoppingCart size={18}/>
                {cartData.length !==0 && <span className="w-3.5 h-3.5 -top-1 -right-1 rounded-full bg-red-600 absolute text-[10px] text-white flex items-center justify-center">
                    {cartData.length}
                </span>}
                </span>
            </div>

            <div className="space-y-3">
              {cartData.map((plant) => (
                <div className="bg-[#f0fdf4] rounded-md p-2 flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-sm">{plant.name}</h3>
                    <div className="text-[#1f293797] ">
                      ৳{plant.price} x {plant.qty}
                    </div>
                  </div>

                  <span
                    onClick={() => deleteToCart(plant)}
                    className="cursor-pointer hover:text-red-700"
                  >
                    <X size={18} />
                  </span>
                </div>
              ))}
              

              {/* amount */}
              <div className="divider"></div>

              {totalAmount <= 0 ? (
                <div className="text-sm text-center text-neutral-400 my-25">
                  <img
                    src={NO_CART_IMAGE}
                    className="w-9 mx-auto mb-2 opacity-20"
                  />
                  Nothing add to cart yet!
                </div>
              ) : (
                <div className="flex items-center justify-between">
                  <span>Total: </span>
                  <span>৳{totalAmount}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ChoiceSection;
