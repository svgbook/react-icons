import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path d="M6,16.67H18" />
    <path
      fill="none"
      d="M6,11.33H18a5.34,5.34,0,0,1-5.33,5.34H11.33A5.34,5.34,0,0,1,6,11.33Z"
    />
    <path d="M10,9.33v-2" />
    <path d="M12,7.33v2" />
    <path d="M14,7.33v2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M6,16.67H18" />
    <path d="M6,11.33H18a5.34,5.34,0,0,1-5.33,5.34H11.33A5.34,5.34,0,0,1,6,11.33Z" />
    <path d="M10,9.33v-2" />
    <path d="M12,7.33v2" />
    <path d="M14,7.33v2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path d="M6,16.67H18" />
    <path
      fillOpacity=".2"
      d="M6,11.33H18a5.34,5.34,0,0,1-5.33,5.34H11.33A5.34,5.34,0,0,1,6,11.33Z"
    />
    <path strokeOpacity=".2" d="M10,9.33v-2" />
    <path strokeOpacity=".2" d="M12,7.33v2" />
    <path strokeOpacity=".2" d="M14,7.33v2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path d="M6,16.67H18" />
    <path
      fill={secondaryColor}
      d="M6,11.33H18a5.34,5.34,0,0,1-5.33,5.34H11.33A5.34,5.34,0,0,1,6,11.33Z"
    />
    <path d="M10,9.33v-2" />
    <path d="M12,7.33v2" />
    <path d="M14,7.33v2" />
  </Fragment>
);

const Soup = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Soup;
