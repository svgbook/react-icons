import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="7" cy="14.67" r="0.67" />
    <path fill="none" d="M7,18l2.67-1.33v-2h8" />
    <path fill="none" d="M11.67,16.67h6" />
    <circle fill="none" cx="10.33" cy="6.67" r="0.67" />
    <path fill="none" d="M9.67,12.67l2-1.34.66-2.66c2,.66,2,2.66,2,4" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="7" cy="14.67" r="0.67" />
    <path fill="none" d="M7,18l2.67-1.33v-2h8" />
    <path fill="none" d="M11.67,16.67h6" />
    <circle cx="10.33" cy="6.67" r="0.67" />
    <path fill="none" d="M9.67,12.67l2-1.34.66-2.66c2,.66,2,2.66,2,4" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fill="none" strokeOpacity=".2" cx="7" cy="14.67" r="0.67" />
    <path fill="none" strokeOpacity=".2" d="M7,18l2.67-1.33v-2h8" />
    <path fill="none" strokeOpacity=".2" d="M11.67,16.67h6" />
    <circle fill="none" cx="10.33" cy="6.67" r="0.67" />
    <path fill="none" d="M9.67,12.67l2-1.34.66-2.66c2,.66,2,2.66,2,4" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill="none" cx="7" cy="14.67" r="0.67" />
    <path fill="none" d="M7,18l2.67-1.33v-2h8" />
    <path fill="none" d="M11.67,16.67h6" />
    <circle fill="none" stroke={secondaryColor} cx="10.33" cy="6.67" r="0.67" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M9.67,12.67l2-1.34.66-2.66c2,.66,2,2.66,2,4"
    />
  </Fragment>
);

const Massage = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Massage;
