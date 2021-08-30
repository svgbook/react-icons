import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M10,13.67l-.67-2L12,10.33l2.67.67H17" />
    <circle fill="none" cx="6.67" cy="16.33" r="0.67" />
    <circle fill="none" cx="12" cy="7.67" r="0.67" />
    <path fill="none" d="M12,15V10.33" />
    <path fill="none" d="M9.33,17H14l.67-2.67L17.33,13" />
    <path fill="none" d="M16,17h2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M10,13.67l-.67-2L12,10.33l2.67.67H17" />
    <circle cx="12" cy="7.67" r="0.67" />
    <path fill="none" d="M12,15V10.33" />
    <circle cx="6.67" cy="16.33" r="0.67" />
    <path fill="none" d="M9.33,17H14l.67-2.67L17.33,13" />
    <path fill="none" d="M16,17h2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M10,13.67l-.67-2L12,10.33l2.67.67H17"
    />
    <circle fill="none" strokeOpacity=".2" cx="12" cy="7.67" r="0.67" />
    <path fill="none" strokeOpacity=".2" d="M12,15V10.33" />
    <circle fill="none" cx="6.67" cy="16.33" r="0.67" />
    <path fill="none" d="M9.33,17H14l.67-2.67L17.33,13" />
    <path fill="none" d="M16,17h2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M10,13.67l-.67-2L12,10.33l2.67.67H17" />
    <circle fill="none" cx="12" cy="7.67" r="0.67" />
    <path fill="none" d="M12,15V10.33" />
    <circle fill="none" stroke={secondaryColor} cx="6.67" cy="16.33" r="0.67" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M9.33,17H14l.67-2.67L17.33,13"
    />
    <path fill="none" stroke={secondaryColor} d="M16,17h2" />
  </Fragment>
);

const Physotherapist = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Physotherapist;
