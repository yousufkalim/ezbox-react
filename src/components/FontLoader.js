import React from "react";
import GoogleFontLoader from "react-google-font-loader";

function FontLoader({ fonts }) {
  return (
    <GoogleFontLoader
      fonts={fonts.map((font) => {
        return {
          font: font || "Urbanist",
          weights: [400, "400i"],
        };
      })}
    />
  );
}

export default FontLoader;
