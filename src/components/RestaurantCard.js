const RestaurantCard = ({ restaurantData }) => {
  
  const { name, cuisines, rating, priceForTwo, image } = restaurantData;

  return (
    <div className="restaurant-card" onClick={() => console.log('Restaurant clicked:', name)}>
      <img
        className="restaurant-image"
        alt="restaurant-image"
        src={image}
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{rating} ⭐</p>
      {/* <p>₹{priceForTwo} for two</p> */}
    </div>
  );
};

export default RestaurantCard;