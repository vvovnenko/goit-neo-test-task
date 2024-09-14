import { useParams } from "react-router-dom";

const Truck = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Truck #{id} page</h1>
    </div>
  );
};

export default Truck;
