import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M17.33,9.33v3.34a5.33,5.33,0,0,1-10.66,0V9.33H10v3.34a2,2,0,1,0,4,0V9.33Z"
    />
    <path
      fill="none"
      d="M17.33,7.33v2H14v-2A1.33,1.33,0,0,1,15.33,6H16A1.33,1.33,0,0,1,17.33,7.33Z"
    />
    <path
      fill="none"
      d="M10,7.33v2H6.67v-2A1.33,1.33,0,0,1,8,6h.67A1.34,1.34,0,0,1,10,7.33Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M17.33,9.33v3.34a5.33,5.33,0,0,1-10.66,0V9.33H10v3.34a2,2,0,1,0,4,0V9.33Z"
    />
    <path d="M17.33,7.33v2H14v-2A1.33,1.33,0,0,1,15.33,6H16A1.33,1.33,0,0,1,17.33,7.33Z" />
    <path d="M10,7.33v2H6.67v-2A1.33,1.33,0,0,1,8,6h.67A1.34,1.34,0,0,1,10,7.33Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M17.33,9.33v3.34a5.33,5.33,0,0,1-10.66,0V9.33H10v3.34a2,2,0,1,0,4,0V9.33Z"
    />
    <path
      fillOpacity=".2"
      d="M17.33,7.33v2H14v-2A1.33,1.33,0,0,1,15.33,6H16A1.33,1.33,0,0,1,17.33,7.33Z"
    />
    <path
      fillOpacity=".2"
      d="M10,7.33v2H6.67v-2A1.33,1.33,0,0,1,8,6h.67A1.34,1.34,0,0,1,10,7.33Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M17.33,9.33v3.34a5.33,5.33,0,0,1-10.66,0V9.33H10v3.34a2,2,0,1,0,4,0V9.33Z"
    />
    <path
      fill={secondaryColor}
      d="M17.33,7.33v2H14v-2A1.33,1.33,0,0,1,15.33,6H16A1.33,1.33,0,0,1,17.33,7.33Z"
    />
    <path
      fill={secondaryColor}
      d="M10,7.33v2H6.67v-2A1.33,1.33,0,0,1,8,6h.67A1.34,1.34,0,0,1,10,7.33Z"
    />
  </Fragment>
);

const Magnet = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Magnet;
