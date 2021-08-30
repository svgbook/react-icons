import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M16.5,6h-9A1.5,1.5,0,0,0,6,7.5v9A1.5,1.5,0,0,0,7.5,18h9A1.5,1.5,0,0,0,18,16.5v-9A1.5,1.5,0,0,0,16.5,6ZM12,14.25A2.25,2.25,0,1,1,14.25,12,2.25,2.25,0,0,1,12,14.25Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M16.5,6h-9A1.5,1.5,0,0,0,6,7.5v9A1.5,1.5,0,0,0,7.5,18h9A1.5,1.5,0,0,0,18,16.5v-9A1.5,1.5,0,0,0,16.5,6ZM12,14.25A2.25,2.25,0,1,1,14.25,12,2.25,2.25,0,0,1,12,14.25Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M16.5,6h-9A1.5,1.5,0,0,0,6,7.5v9A1.5,1.5,0,0,0,7.5,18h9A1.5,1.5,0,0,0,18,16.5v-9A1.5,1.5,0,0,0,16.5,6ZM12,14.25A2.25,2.25,0,1,1,14.25,12,2.25,2.25,0,0,1,12,14.25Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M16.5,6h-9A1.5,1.5,0,0,0,6,7.5v9A1.5,1.5,0,0,0,7.5,18h9A1.5,1.5,0,0,0,18,16.5v-9A1.5,1.5,0,0,0,16.5,6ZM12,14.25A2.25,2.25,0,1,1,14.25,12,2.25,2.25,0,0,1,12,14.25Z"
    />
  </Fragment>
);

const Mask = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Mask;
