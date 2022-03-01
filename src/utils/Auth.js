import { Route } from "react-router-dom";

export function getRoutes(routesArr){

  const routes = [];

  for( let i = 0; i < routesArr.length; i++ ){

    const Element = routesArr[i].element;

    routes.push(
      <Route
        exact
        path={routesArr[i].path}
        element={<Element />}
        key={i}
      />
    );

  }

  return routes;

}