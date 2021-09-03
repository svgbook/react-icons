import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M15,15.33H7.67V6H6.33" />
    <path fill="none" d="M7.67,7.33,13,7.71m3.62,3-.29,2H7.67" />
    <path fill="none" d="M15,6l2.67,2.67" />
    <path fill="none" d="M17.67,6,15,8.67" />
    <circle fill="none" cx="7.67" cy="16.67" r="1.33" />
    <circle fill="none" cx="15" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M15,15.33H7.67V6H6.33" />
    <path fill="none" d="M7.67,7.33,13,7.71m3.62,3-.29,2H7.67" />
    <path fill="none" d="M15,6l2.67,2.67" />
    <path fill="none" d="M17.67,6,15,8.67" />
    <circle cx="7.67" cy="16.67" r="1.33" />
    <circle cx="15" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M15,15.33H7.67V6H6.33" />
    <path fill="none" d="M7.67,7.33,13,7.71m3.62,3-.29,2H7.67" />
    <path fill="none" strokeOpacity=".2" d="M15,6l2.67,2.67" />
    <path fill="none" strokeOpacity=".2" d="M17.67,6,15,8.67" />
    <circle fillOpacity=".2" cx="7.67" cy="16.67" r="1.33" />
    <circle fillOpacity=".2" cx="15" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M15,15.33H7.67V6H6.33" />
    <path fill="none" d="M7.67,7.33,13,7.71m3.62,3-.29,2H7.67" />
    <path fill="none" stroke={secondaryColor} d="M15,6l2.67,2.67" />
    <path fill="none" stroke={secondaryColor} d="M17.67,6,15,8.67" />
    <circle fill="none" stroke={secondaryColor} cx="7.67" cy="16.67" r="1.33" />
    <circle fill="none" stroke={secondaryColor} cx="15" cy="16.67" r="1.33" />
  </Fragment>
);

const CartX = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default CartX;
