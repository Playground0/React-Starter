const SearchBar = ({restaurantList}) => {
  return (
    <div className="search-bar">
      <span>Search for restaurants</span>
      <input type="text" placeholder="Search..." onChange={(e) => search(restaurantList, e.target.value)} />
    </div>
  );
};

const search = (restaurantList, query) => {
  const filteredRestaurants = restaurantList.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(query.toLowerCase())
  );
  console.log("Filtered Restaurants:", filteredRestaurants);
}


export default SearchBar;