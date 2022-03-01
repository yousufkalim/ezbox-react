
import Home from "../containers/Home.js";
import Advertising from "../containers/Advertising";
import ProductDevelopment from "../containers/ProductDevelopment";
import ProductLine from "../containers/ProductLine";
import Consulting from "../containers/Consulting";
import Contact from "../containers/Contact";

const RoutesArr = [
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
    element: Advertising,
  },
  {
    path: "/ProductDevelopment",
    name: "ProductDevelopment",
    element: ProductDevelopment,
  },
  {
    path: "/ProductLine",
    name: "ProductLine",
    element: ProductLine,
  },
  {
    path: "/Consulting",
    name: "Consulting",
    element: Consulting,
  },
  {
    path: "/Contact",
    name: "Contact",
    element: Contact,
  }
];

export default RoutesArr;
