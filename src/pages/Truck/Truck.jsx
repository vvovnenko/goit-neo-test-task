import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCamper } from "../../api/campers.js";
import TruckInfo from "../../components/TruckInfo/TruckInfo.jsx";

const Truck = () => {
  const { id } = useParams();

  const [truck, setTruck] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchTruckById = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      setTruck(await fetchCamper(id));
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTruckById();
  }, [id]);

  return <div>{truck && <TruckInfo data={truck} />}</div>;
};

export default Truck;
