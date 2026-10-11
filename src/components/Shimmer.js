const Shimmer = () => {
  return (
    <div>
      <button className="shimmer-btn">Top Rated Restaurants</button>
      <div className="shimmer-container">
        {Array.from({ length: 12 }, (_, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
