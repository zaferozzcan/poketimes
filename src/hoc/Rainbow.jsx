import React from "react";

function Rainbow(WrappedComponent) {
  const colors = ["yellow", "blue", "red"];
  const randomColor = colors[Math.floor(Math.random() * 2)];
  const className = randomColor + "-text";
  // console.log(className);

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default Rainbow;
