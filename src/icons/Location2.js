import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,6,13.74,17.79a.36.36,0,0,1-.47.18.35.35,0,0,1-.18-.18L10.8,13.21l-4.59-2.3A.36.36,0,0,1,6,10.43a.37.37,0,0,1,.18-.17L18,6"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,6,13.74,17.79a.36.36,0,0,1-.47.18.35.35,0,0,1-.18-.18L10.8,13.21l-4.59-2.3A.36.36,0,0,1,6,10.43a.37.37,0,0,1,.18-.17L18,6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,6,13.74,17.79a.36.36,0,0,1-.47.18.35.35,0,0,1-.18-.18L10.8,13.21l-4.59-2.3A.36.36,0,0,1,6,10.43a.37.37,0,0,1,.18-.17L18,6"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,6,13.74,17.79a.36.36,0,0,1-.47.18.35.35,0,0,1-.18-.18L10.8,13.21l-4.59-2.3A.36.36,0,0,1,6,10.43a.37.37,0,0,1,.18-.17L18,6"
    />
  </Fragment>
);

const Location2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Location2;
