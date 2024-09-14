import { Link } from "react-router-dom";
import RatingPressedIcon from "../../icons/RatingPressedIcon.jsx";
import HeartPressedIcon from "../../icons/HeartPressedIcon.jsx";
import LocationActiveIcon from "../../icons/LocationActiveIcon.jsx";
import TruckCategories from "../TruckCategories/TruckCategories.jsx";

const TruckListItem = ({ data }) => {
  return (
    <div>
      <img src={data.gallery[0].thumb} alt="truck photo" />
      <div>
        <div>
          <h2>{data.name}</h2>
          <div>
            <p>€{data.price}.00</p>
            <div>
              <HeartPressedIcon />
            </div>
          </div>
        </div>

        <div>
          <span>
            <div>
              <RatingPressedIcon />
            </div>
            {`${data.rating}(${data.reviews.length} Reviews)`}
          </span>
          <span>
            <LocationActiveIcon />
            {data.location}
          </span>
        </div>

        <p>{data.description}</p>
        <TruckCategories data={data} />
        <Link to={`/catalog/${data.id}`}>Show more</Link>
      </div>
    </div>
  );
};

export default TruckListItem;
