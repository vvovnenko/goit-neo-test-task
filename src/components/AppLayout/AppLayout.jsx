import { Toaster } from "react-hot-toast";
import AppBar from "../AppBar/AppBar.jsx";

const AppLayout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AppLayout;
