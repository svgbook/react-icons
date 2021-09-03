import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M15.33,15.33H8V6H6.67" />
    <path fill="none" d="M17.33,8l-.66,4.67H8" />
    <path fill="none" d="M10.67,10.67l4-4" />
    <circle fill="none" cx="11" cy="7" r="0.33" />
    <circle fill="none" cx="14.33" cy="10.33" r="0.33" />
    <circle fill="none" cx="8" cy="16.67" r="1.33" />
    <circle fill="none" cx="15.33" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M15.33,15.33H8V6H6.67" />
    <path fill="none" d="M17.33,8l-.66,4.67H8" />
    <path fill="none" d="M10.67,10.67l4-4" />
    <circle cx="11" cy="7" r="0.33" />
    <circle cx="14.33" cy="10.33" r="0.33" />
    <circle cx="8" cy="16.67" r="1.33" />
    <circle cx="15.33" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M15.33,15.33H8V6H6.67" />
    <path fill="none" d="M17.33,8l-.66,4.67H8" />
    <path fill="none" strokeOpacity=".2" d="M10.67,10.67l4-4" />
    <circle fill="none" strokeOpacity=".2" cx="11" cy="7" r="0.33" />
    <circle fill="none" strokeOpacity=".2" cx="14.33" cy="10.33" r="0.33" />
    <circle fillOpacity=".2" cx="8" cy="16.67" r="1.33" />
    <circle fillOpacity=".2" cx="15.33" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M15.33,15.33H8V6H6.67" />
    <path fill="none" d="M17.33,8l-.66,4.67H8" />
    <path fill="none" stroke={secondaryColor} d="M10.67,10.67l4-4" />
    <circle fill="none" stroke={secondaryColor} cx="11" cy="7" r="0.33" />
    <circle
      fill="none"
      stroke={secondaryColor}
      cx="14.33"
      cy="10.33"
      r="0.33"
    />
    <circle fill="none" stroke={secondaryColor} cx="8" cy="16.67" r="1.33" />
    <circle
      fill="none"
      stroke={secondaryColor}
      cx="15.33"
      cy="16.67"
      r="1.33"
    />
  </Fragment>
);

const CartDiscount = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default CartDiscount;
