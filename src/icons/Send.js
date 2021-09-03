import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,6l-7.2,7.21-4.59-2.3A.36.36,0,0,1,6,10.43a.33.33,0,0,1,.18-.17Z"
    />
    <path
      fill="none"
      d="M18,6,13.74,17.79a.36.36,0,0,1-.47.18.39.39,0,0,1-.18-.18L10.8,13.21Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M18,6l-7.2,7.21-4.59-2.3A.36.36,0,0,1,6,10.43a.33.33,0,0,1,.18-.17Z"
    />
    <path d="M18,6,13.74,17.79a.36.36,0,0,1-.47.18.39.39,0,0,1-.18-.18L10.8,13.21Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,6l-7.2,7.21-4.59-2.3A.36.36,0,0,1,6,10.43a.33.33,0,0,1,.18-.17Z"
    />
    <path
      fillOpacity=".2"
      d="M18,6,13.74,17.79a.36.36,0,0,1-.47.18.39.39,0,0,1-.18-.18L10.8,13.21Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,6l-7.2,7.21-4.59-2.3A.36.36,0,0,1,6,10.43a.33.33,0,0,1,.18-.17Z"
    />
    <path
      fill={secondaryColor}
      d="M18,6,13.74,17.79a.36.36,0,0,1-.47.18.39.39,0,0,1-.18-.18L10.8,13.21Z"
    />
  </Fragment>
);

const Send = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Send;
