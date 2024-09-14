import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTrucks } from "../../redux/catalog/operations.js";
import TruckList from "../../components/TruckList/TruckList.jsx";
import { selectHasNextPage } from "../../redux/catalog/slice.js";

const Catalog = () => {
  const dispatch = useDispatch();
  const hasNextPage = useSelector(selectHasNextPage);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <div>
      <h1>Catalog page</h1>
      <TruckList />
      {hasNextPage && (
        <button type="button" onClick={() => dispatch(fetchTrucks(true))}>
          Load next
        </button>
      )}
    </div>
  );
};

export default Catalog;
