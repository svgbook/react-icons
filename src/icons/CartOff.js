import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M15.33,15.33H8V8" />
    <path fill="none" d="M10.16,7.49,17.33,8l-.66,4.67H15.33m-2.66,0H8" />
    <path fill="none" d="M6,6,18,18" />
    <path fill="none" d="M16.67,16.67a1.34,1.34,0,1,1-1.34-1.34Z" />
    <circle fill="none" cx="8" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M15.33,15.33H8V8" />
    <path fill="none" d="M10.16,7.49,17.33,8l-.66,4.67H15.33m-2.66,0H8" />
    <path fill="none" d="M6,6,18,18" />
    <path d="M16.67,16.67a1.34,1.34,0,1,1-1.34-1.34Z" />
    <circle cx="8" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M15.33,15.33H8V8" />
    <path fill="none" d="M10.16,7.49,17.33,8l-.66,4.67H15.33m-2.66,0H8" />
    <path fill="none" d="M6,6,18,18" />
    <path fillOpacity=".2" d="M16.67,16.67a1.34,1.34,0,1,1-1.34-1.34Z" />
    <circle fillOpacity=".2" cx="8" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M15.33,15.33H8V8" />
    <path fill="none" d="M10.16,7.49,17.33,8l-.66,4.67H15.33m-2.66,0H8" />
    <path fill="none" stroke={secondaryColor} d="M6,6,18,18" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M16.67,16.67a1.34,1.34,0,1,1-1.34-1.34Z"
    />
    <circle fill="none" stroke={secondaryColor} cx="8" cy="16.67" r="1.33" />
  </Fragment>
);

const CartOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default CartOff;
