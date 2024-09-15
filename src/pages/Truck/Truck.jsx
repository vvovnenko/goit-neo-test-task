import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCamper } from "../../api/campers.js";
import TruckInfo from "../../components/TruckInfo/TruckInfo.jsx";
import css from "./Truck.module.css";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loader/slice.js";
import { toast } from "react-hot-toast";

const Truck = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [truck, setTruck] = useState(null);

  const fetchTruckById = async () => {
    dispatch(showLoader());

    try {
      setTruck(await fetchCamper(id));
    } catch (error) {
      toast.error("Failed to load vehicles!");
    } finally {
      dispatch(hideLoader());
    }
  };

  useEffect(() => {
    fetchTruckById();
  }, [id]);

  return (
    <div className={css.container}>{truck && <TruckInfo data={truck} />}</div>
  );
};

export default Truck;
