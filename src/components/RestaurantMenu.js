import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurantData = useRestaurantMenu(id);

  if (restaurantData === null) return <Shimmer />;

  let i = 0;
  return (
    <div className="restaurant-menu">
      <div className="restaurant-card">
        <img src={restaurantData.image} />
        <h2>{restaurantData.name}</h2>
        <h3>{restaurantData.cuisine}</h3>
        <ul>
          {restaurantData.ingredients.map((ingredient) => {
            return <li key={i++}>{ingredient}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
