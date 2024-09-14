import TruckCategory from "../TruckCategory/TruckCategory.jsx";
import DiagramIcon from "../../icons/DiagramIcon.jsx";
import WindIcon from "../../icons/WindIcon.jsx";
import FuelPumpIcon from "../../icons/FuelPumpIcon.jsx";
import CupHotIcon from "../../icons/CupHotIcon.jsx";
import RadiosIcon from "../../icons/RadiosIcon.jsx";
import DropletIcon from "../../icons/DropletIcon.jsx";
import TVIcon from "../../icons/TVIcon.jsx";

const resolveCategoriesList = (data) => {
  const categories = [];
  if (data.transmission === "automatic") {
    categories.push([DiagramIcon, "Automatic"]);
  }
  if (data.AC) {
    categories.push([WindIcon, "AC"]);
  }
  if (data.gas) {
    categories.push([FuelPumpIcon, "Petrol"]);
  }
  if (data.kitchen) {
    categories.push([CupHotIcon, "Kitchen"]);
  }
  if (data.radio) {
    categories.push([RadiosIcon, "Radio"]);
  }
  if (data.bathroom) {
    categories.push([DropletIcon, "Bathroom"]);
  }
  if (data.TV) {
    categories.push([TVIcon, "TV"]);
  }
  return categories;
};

const TruckCategories = ({ data }) => {
  const categories = resolveCategoriesList(data);
  return (
    <div>
      {categories.map(([Icon, name], key) => (
        <TruckCategory name={name} key={key}>
          <Icon />
        </TruckCategory>
      ))}
    </div>
  );
};

export default TruckCategories;
