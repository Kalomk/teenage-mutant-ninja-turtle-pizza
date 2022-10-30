import ReactStars from 'react-rating-stars-component';

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  const ratingChanged = (newRating: number) => {
    console.log(newRating);
  };
  return (
    <ReactStars
      count={10}
      onChange={ratingChanged}
      size={24}
      value={rating}
      isHalf={true}
      emptyIcon={<i className="far fa-star"></i>}
      halfIcon={<i className="fa fa-star-half-alt"></i>}
      fullIcon={<i className="fa fa-star"></i>}
      activeColor="#ffd700"
    />
  );
};

export default Rating;
