import { Link } from "react-router";
import RestaurantCard from "./RestaurantCard";

const RestuarantContainer = ({ restaurantList }) => {
  return (
    <div className="restaurant-container">
      {restaurantList.map((restaurant) => {
        return (
          <Link key={restaurant.id} to={"/restaurant/" + restaurant.id}>
            <RestaurantCard  restaurantData={restaurant} />
          </Link>
        );
      })}
    </div>
  );
};

export default RestuarantContainer;
