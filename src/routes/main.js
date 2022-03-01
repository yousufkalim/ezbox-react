
import { Routes } from "react-router-dom";

import RoutesArr from "../routes/routes";
import { getRoutes } from "../utils/Auth";

const Main = () => {
  return (
    <Routes>
      {getRoutes(RoutesArr)}
    </Routes>
  );
};

export default Main;
