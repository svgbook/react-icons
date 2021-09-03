import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,15.33H9.33l1.12-1.59m2.44-3.48L14,8.67h4" />
    <path fill="none" d="M16,6.67l2,2-2,2" />
    <path fill="none" d="M6,8.67H9.33L14,15.33h4" />
    <path fill="none" d="M16,17.33l2-2-2-2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,15.33H9.33l1.12-1.59m2.44-3.48L14,8.67h4" />
    <path fill="none" d="M16,6.67l2,2-2,2" />
    <path fill="none" d="M6,8.67H9.33L14,15.33h4" />
    <path fill="none" d="M16,17.33l2-2-2-2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,15.33H9.33l1.12-1.59m2.44-3.48L14,8.67h4"
    />
    <path fill="none" strokeOpacity=".2" d="M16,6.67l2,2-2,2" />
    <path fill="none" d="M6,8.67H9.33L14,15.33h4" />
    <path fill="none" d="M16,17.33l2-2-2-2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,15.33H9.33l1.12-1.59m2.44-3.48L14,8.67h4" />
    <path fill="none" d="M16,6.67l2,2-2,2" />
    <path fill="none" stroke={secondaryColor} d="M6,8.67H9.33L14,15.33h4" />
    <path fill="none" stroke={secondaryColor} d="M16,17.33l2-2-2-2" />
  </Fragment>
);

const Switch2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Switch2;
