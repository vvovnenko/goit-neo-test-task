import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar.jsx";
import Loader from "../Loader/Loader.jsx";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/loader/slice.js";

const AppLayout = ({ children }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      <AppBar />
      {children}
      <Toaster position="top-center" reverseOrder={false} />
      {isLoading && <Loader />}
    </div>
  );
};

export default AppLayout;
