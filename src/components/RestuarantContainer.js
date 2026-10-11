import RestaurantCard from "./RestaurantCard";

const RestuarantContainer = ({ restaurantList }) => {
  return (
    <div className="restaurant-container">
      {restaurantList
        .filter((restaurant) => restaurant.availability === "open")
        .map((restaurant) => {
          return <RestaurantCard key={restaurant.id} restaurantData={restaurant} />;
        })}
    </div>
  );
};

export default RestuarantContainer;