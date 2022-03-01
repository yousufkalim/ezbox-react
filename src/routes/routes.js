
// Splash Routes
import Splash from "./Splash";

// App Routes
import Home from "../containers/Home.js";
import Layout1 from "../containers/Layout1";
import Layout2 from "../containers/Layout2";
import Layout3 from "../containers/Layout3";
import ProductLine from "../containers/ProductLine";
import Contact from "../containers/Contact";

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

const AppRoutes = [
  {
    path: "*",
    name: "Home",
    element: Home,
  },
  {
    path: "/",
    name: "Home",
    element: Home,
  },
  {
    path: "/Advertising",
    name: "Advertising",
    element: Layout1,
  },
  {
    path: "/ProductDevelopment",
    name: "ProductDevelopment",
    element: Layout2,
  },
  {
    path: "/Consulting",
    name: "Consulting",
    element: Layout3,
  },
  {
    path: "/ProductLine",
    name: "ProductLine",
    element: ProductLine,
  },
  {
    path: "/Contact",
    name: "Contact",
    element: Contact,
  }
];

// Getting all routes
const RoutesObj = {
  SplashRoutes,
  AppRoutes
};

export default RoutesObj;
