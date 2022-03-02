
// Splash Routes
import Splash from "./Splash";

const SplashRoutes = [
  {
    path: "*",
    name: "Splash",
    element: Splash,
  },
  {
    path: "/",
    name: "Splash",
    element: Splash,
  }
];

// Getting all routes
const RoutesObj = {
  SplashRoutes
};

export default RoutesObj;
