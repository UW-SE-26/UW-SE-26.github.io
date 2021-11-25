import React from "react";

function mobile() {
  return (
    <div
      style={{
        height: "10em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p
        style={{
          margin: "0",
					fontSize: "2em",
					fontWeight: "bold",
					backgroundColor: "yellow",
        }}
      >
        SORRY THIS SITE CANNOT BE ACCESSED ON MOBILE DEVICES
      </p>
    </div>
  );
}

export default mobile;
