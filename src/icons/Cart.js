import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M15.33,15.33H8V6H6.67" />
    <path fill="none" d="M8,7.34,17.33,8l-.67,4.67H8Z" />
    <circle fill="none" cx="8" cy="16.66" r="1.33" />
    <circle fill="none" cx="15.33" cy="16.66" r="1.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M15.33,15.33H8V6H6.67" />
    <path d="M8,7.34,17.33,8l-.67,4.67H8Z" />
    <circle cx="8" cy="16.66" r="1.33" />
    <circle cx="15.33" cy="16.66" r="1.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M15.33,15.33H8V6H6.67" />
    <path fillOpacity=".2" d="M8,7.34,17.33,8l-.67,4.67H8Z" />
    <circle fillOpacity=".2" cx="8" cy="16.66" r="1.33" />
    <circle fillOpacity=".2" cx="15.33" cy="16.66" r="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M15.33,15.33H8V6H6.67" />
    <path fill={secondaryColor} d="M8,7.34,17.33,8l-.67,4.67H8Z" />
    <circle fill={secondaryColor} cx="8" cy="16.66" r="1.33" />
    <circle fill={secondaryColor} cx="15.33" cy="16.66" r="1.33" />
  </Fragment>
);

const Cart = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Cart;
