import React from "react";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        borderRadius: "50%",
        display: "grid",
        justifyItems: "center",
        alignItems: "center",
        background: "white",
      }}
      onClick={onClick}
    />
  );
};

export default NextArrow;
