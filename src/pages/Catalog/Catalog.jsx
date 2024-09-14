import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTrucks } from "../../redux/catalog/operations.js";
import TruckList from "../../components/TruckList/TruckList.jsx";
import { selectHasNextPage } from "../../redux/catalog/slice.js";
import css from "./Catalog.module.css";
import Button from "../../components/Button/Button.jsx";

const Catalog = () => {
  const dispatch = useDispatch();
  const hasNextPage = useSelector(selectHasNextPage);

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  return (
    <div className={css.catalog}>
      <div>
        <TruckList />
        {hasNextPage && (
          <div className={css.loadMore}>
            <Button onClick={() => dispatch(fetchTrucks(true))} light={true}>
              Load next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Catalog;
