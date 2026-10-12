import { useState, useEffect } from "react";
import { API_URL } from "./constants";

const useRestaurantMenu = (id) => {
  const [restaurantData, setRestaurantData] = useState(null);
  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const response = await fetch(API_URL + "/" + id);

    const data = await response.json();
    setRestaurantData(data);
  };
  return restaurantData;
};

export default useRestaurantMenu;
