import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="7.67" cy="16.67" r="1.33" />
    <circle fill="none" cx="15" cy="16.67" r="1.33" />
    <path fill="none" d="M15,15.33H7.67V6H6.33" />
    <path fill="none" d="M7.67,7.33l4,.29M16.43,12l-.1.67H7.67" />
    <path fill="none" d="M13.67,8h4m-2-2v4" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M15,15.33H7.67V6H6.33" />
    <path fill="none" d="M7.67,7.33l4,.29M16.43,12l-.1.67H7.67" />
    <path fill="none" d="M13.67,8h4m-2-2v4" />
    <circle cx="7.67" cy="16.67" r="1.33" />
    <circle cx="15" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M15,15.33H7.67V6H6.33" />
    <path fill="none" d="M7.67,7.33l4,.29M16.43,12l-.1.67H7.67" />
    <path fill="none" strokeOpacity=".2" d="M13.67,8h4m-2-2v4" />
    <circle fillOpacity=".2" cx="7.67" cy="16.67" r="1.33" />
    <circle fillOpacity=".2" cx="15" cy="16.67" r="1.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M15,15.33H7.67V6H6.33" />
    <path fill="none" d="M7.67,7.33l4,.29M16.43,12l-.1.67H7.67" />
    <path fill="none" stroke={secondaryColor} d="M13.67,8h4m-2-2v4" />
    <circle fill="none" stroke={secondaryColor} cx="7.67" cy="16.67" r="1.33" />
    <circle fill="none" stroke={secondaryColor} cx="15" cy="16.67" r="1.33" />
  </Fragment>
);

const CartPlus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default CartPlus;
