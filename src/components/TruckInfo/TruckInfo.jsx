import LocationActiveIcon from "../../icons/LocationActiveIcon.jsx";
import RatingPressedIcon from "../../icons/RatingPressedIcon.jsx";
import { useState } from "react";

const TruckInfo = ({ data }) => {
  const [isLinkActive, setIsLinkActive] = useState("features");
  return (
    <div>
      <div>
        <h2>{data.name}</h2>
        <div>
          <span>
            <div>
              <RatingPressedIcon />
            </div>
            <span>{`${data.rating}(${
              data.reviews ? data.reviews.length : null
            } Reviews)`}</span>
          </span>
          <span>
            <LocationActiveIcon />
            {data.location}
          </span>
        </div>
        <p>€{data.price}.00</p>
      </div>
      <div>
        {data.gallery.map((item, index) => (
          <img src={item.original} alt="truck photo" key={index} />
        ))}
      </div>
      <div>
        <p>{data.description}</p>
        <div>
          <div>
            <span onClick={() => setIsLinkActive("features")}>Features</span>
            <span onClick={() => setIsLinkActive("reviews")}>Reviews</span>
          </div>
        </div>
        <div>
          <div>{isLinkActive === "features" ? "Main info" : "Reviews"}</div>
          {/*<Form/>*/}
        </div>
      </div>
    </div>
  );
};

export default TruckInfo;
