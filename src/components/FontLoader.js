import React from "react";
import GoogleFontLoader from "react-google-font-loader";

function FontLoader({ font }) {
  return (
    <GoogleFontLoader
      fonts={[
        {
          font: font,
          weights: [400, "400i"],
        },
      ]}
    />
  );
}

export default FontLoader;
