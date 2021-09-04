import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6.71,6A2.11,2.11,0,0,1,8.82,8.12v6.35" />
    <path
      fill="none"
      d="M8.82,8.12a2.12,2.12,0,0,1,4.24,0v7.76A2.12,2.12,0,0,1,10.94,18"
    />
    <circle fill="none" cx="15.18" cy="15.18" r="2.12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6.71,6A2.11,2.11,0,0,1,8.82,8.12v6.35" />
    <path
      fill="none"
      d="M8.82,8.12a2.12,2.12,0,0,1,4.24,0v7.76A2.12,2.12,0,0,1,10.94,18"
    />
    <circle cx="15.18" cy="15.18" r="2.12" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M6.71,6A2.11,2.11,0,0,1,8.82,8.12v6.35" />
    <path
      fill="none"
      d="M8.82,8.12a2.12,2.12,0,0,1,4.24,0v7.76A2.12,2.12,0,0,1,10.94,18"
    />
    <circle fill="none" strokeOpacity=".2" cx="15.18" cy="15.18" r="2.12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6.71,6A2.11,2.11,0,0,1,8.82,8.12v6.35" />
    <path
      fill="none"
      d="M8.82,8.12a2.12,2.12,0,0,1,4.24,0v7.76A2.12,2.12,0,0,1,10.94,18"
    />
    <circle
      fill="none"
      stroke={secondaryColor}
      cx="15.18"
      cy="15.18"
      r="2.12"
    />
  </Fragment>
);

const ZodiacCapricorn = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ZodiacCapricorn;
