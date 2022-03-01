import React, { useState, useEffect } from "react";

import { Routes } from "react-router-dom";
import RoutesObj from "./routes";
import { getRoutes } from "../utils/Auth";

import Home from "../containers/Home.js";
import Layout1 from "../containers/Layout1";
import Layout2 from "../containers/Layout2";
import Layout3 from "../containers/Layout3";
import ProductLine from "../containers/ProductLine";
import Contact from "../containers/Contact";

import Api from "../api/index";

const Main = () => {

  const [appRoutes, setAppRoutes] = useState([]);

  useEffect(() => {
    getPages();
  }, []);

  // func to get patient assigned therapists
  const getPages = async () => {
    let response;
    try {
      response = await Api("get", `/pages/`);
      const data = response.data.data;
      parsePagesData(data);
    } catch (e) {
      console.trace(e);
    }
  };

  const parsePagesData = (data) => {
    const arr = [];

    // Static routes
    arr.push({
      path: "*",
      name: "Home",
      element: Home
    });
    arr.push({
      path: "/",
      name: "Home",
      element: Home
    });

    for( let i = 0; i < data.length; i++ ){
      const currentObj = data[i];
      const obj = {
        path: `${currentObj.path}/:layout_id`,
        name: currentObj.name,
        element: resolvePageToJSX(currentObj)
      }
      arr.push(obj);
    }

    // Static routes
    arr.push({
      path: "ProductLine",
      name: "ProductLine",
      element: ProductLine
    });
    arr.push({
      path: "Contact",
      name: "Contact",
      element: Contact
    });

    setAppRoutes(arr);
  }

  const resolvePageToJSX = (obj) => {
    if(obj.layout_type == "type1"){
      return Layout1;
    } else if(obj.layout_type == "type2"){
      return Layout2;
    } else if(obj.layout_type == "type3"){
      return Layout3;
    } else {
      return null;
    }
  }

  return (
    <Routes>
      {
        appRoutes.length == 0
        ? <>
            {
              getRoutes(RoutesObj.SplashRoutes)
            }
          </> 
        : <>
            {
              getRoutes(appRoutes)
            }
          </> 
      }
    </Routes>
  );
}

export default Main;
