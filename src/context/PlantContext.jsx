/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
const PlantsContext = createContext();
export const usePlant = () => useContext(PlantsContext);

let ITEM_PER_PAGE = 4;
const PlantContext = ({ children }) => {
  const [plants, setPlants] = useState({
    all_categoires: [],
    all_plant: [],
  });
  const [isLoading, setIsloading] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [cartData, setCartData] = useState([]);

  const addToCart = (newPlant) => {
    if (!newPlant) return;

    setCartData((prev) => {
      if (prev.find((i) => i.id === newPlant.id))
        return prev.map((i) =>
          i.id === newPlant.id ? { ...i, qty: i.qty + 1 } : i,
        );
      else {
        return [...prev, { ...newPlant, qty: 1 }];
      }
    });
  };

  const deleteToCart = (plant) => {
    if (!plant) return;
    setCartData((p) => p.filter((i) => i.id !== plant.id));
  };

  const fetchPlantCategories = useCallback(async () => {
    setIsloading(true);
    try {
      const plant = await fetch(
        "https://openapi.programming-hero.com/api/categories",
      );
      const res = await plant.json();
      const categories = res.categories;
      setTimeout(
        () => setPlants((prev) => ({ ...prev, all_categoires: categories })),
        0,
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }, []);
  const fetchAllPlant = useCallback(async () => {
    setIsloading(true);
    try {
      const data = await fetch(
        "https://openapi.programming-hero.com/api/plants",
      );
      const res = await data.json();
      const plants = res.plants;
      setTimeout(
        () => setPlants((prev) => ({ ...prev, all_plant: plants })),
        0,
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }, []);
  const fetchAllPlantByCategory = useCallback(async (id) => {
    setIsloading(true);
    try {
      const data = await fetch(
        `https://openapi.programming-hero.com/api/category/${id}`,
      );
      const res = await data.json();
      const plants = res.plants;
      setTimeout(
        () => setPlants((prev) => ({ ...prev, all_plant: plants })),
        0,
      );
      setCurrentPage(1);
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  }, []);

  const pagination = useMemo(() => {
    const start = (currentPage - 1) * ITEM_PER_PAGE;
    return plants.all_plant.slice(start, start + ITEM_PER_PAGE);
  }, [currentPage, plants.all_plant]);

  const totalPages = Math.ceil(plants.all_plant.length / ITEM_PER_PAGE);

  const totalAmount= cartData.reduce((acc,val)=>acc+val.price*val.qty,0)

  const value = {
    fetchPlantCategories,
    fetchAllPlant,
    plants,
    isLoading,
    fetchAllPlantByCategory,
    pagination,
    totalPages,
    currentPage,
    setCurrentPage,
    cartData,
    addToCart,
    deleteToCart,
    totalAmount
  };
  return (
    <PlantsContext.Provider value={value}>{children}</PlantsContext.Provider>
  );
};

export default PlantContext;
