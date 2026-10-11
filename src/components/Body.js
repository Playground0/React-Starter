import RestuarantContainer from "./RestuarantContainer";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterText, setFilterText] = useState([]);
  const [originalRestaurantList, setOriginalRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(API_URL);

    const data = await response.json();

    const mappedRestaurantList = data?.recipes?.map((restaurant) => {
      return {
        id: restaurant.id,
        name: restaurant.name + " Kitchen",
        image: restaurant.image,
        rating: restaurant.rating,
        availability: "open",
        deliveryTime: "25-35 min",
        priceForTwo: Math.floor(Math.random() * 500) + 250,
        cuisines: [restaurant.cuisine],
      };
    });
    setOriginalRestaurantList(mappedRestaurantList);
    setRestaurantList(mappedRestaurantList);
  };

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <SearchBar restaurantList={restaurants}/> */}
      <div className="filter">
        <input
          type="text"
          value={filterText}
          placeholder="Search restaurants"
          onChange={(e) => setFilterText(e.target.value)}
        />
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = originalRestaurantList.filter((restaurant) =>
              restaurant.name
                .toLowerCase()
                .includes(filterText.toLowerCase().trim()),
            );
            setRestaurantList(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            let filteredRestuarants = restaurantList.filter(
              (restaurant) => restaurant.rating > 4.5,
            );
            setRestaurantList(filteredRestuarants);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setFilterText("");
            setRestaurantList(originalRestaurantList);
          }}
        >
          Reset
        </button>
      </div>

      <RestuarantContainer restaurantList={restaurantList} />
    </div>
  );
};

export default Body;
