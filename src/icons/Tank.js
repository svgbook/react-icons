import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M17.37,13.58a1.92,1.92,0,0,1-.56,1.34,1.88,1.88,0,0,1-1.34.55H7.9A1.89,1.89,0,0,1,6,13.58a1.91,1.91,0,0,1,1.9-1.9h7.57A1.9,1.9,0,0,1,17.37,13.58Z"
    />
    <polygon
      fill="none"
      points="14.21 11.68 8.53 11.68 9.16 8.53 12.31 8.53 13.07 9.79 14.21 11.68"
    />
    <line x1="18" y1="9.79" x2="13.07" y2="9.79" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M17.37,13.58a1.92,1.92,0,0,1-.56,1.34,1.88,1.88,0,0,1-1.34.55H7.9A1.89,1.89,0,0,1,6,13.58a1.91,1.91,0,0,1,1.9-1.9h7.57A1.9,1.9,0,0,1,17.37,13.58Z" />
    <polygon points="14.21 11.68 8.53 11.68 9.16 8.53 12.31 8.53 13.07 9.79 14.21 11.68" />
    <line x1="18" y1="9.79" x2="13.07" y2="9.79" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M17.37,13.58a1.92,1.92,0,0,1-.56,1.34,1.88,1.88,0,0,1-1.34.55H7.9A1.89,1.89,0,0,1,6,13.58a1.91,1.91,0,0,1,1.9-1.9h7.57A1.9,1.9,0,0,1,17.37,13.58Z"
    />
    <polygon
      fillOpacity=".2"
      points="14.21 11.68 8.53 11.68 9.16 8.53 12.31 8.53 13.07 9.79 14.21 11.68"
    />
    <line x1="18" y1="9.79" x2="13.07" y2="9.79" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M17.37,13.58a1.92,1.92,0,0,1-.56,1.34,1.88,1.88,0,0,1-1.34.55H7.9A1.89,1.89,0,0,1,6,13.58a1.91,1.91,0,0,1,1.9-1.9h7.57A1.9,1.9,0,0,1,17.37,13.58Z"
    />
    <polygon
      fill={secondaryColor}
      points="14.21 11.68 8.53 11.68 9.16 8.53 12.31 8.53 13.07 9.79 14.21 11.68"
    />
    <line x1="18" y1="9.79" x2="13.07" y2="9.79" />
  </Fragment>
);

const Tank = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Tank;
