import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="6.75" cy="17.25" r="0.75" />
    <path fill="none" d="M6,6A12,12,0,0,1,18,18" />
    <path fill="none" d="M6,11.25A6.75,6.75,0,0,1,12.75,18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="6.75" cy="17.25" r="0.75" />
    <path fill="none" d="M6,6A12,12,0,0,1,18,18" />
    <path fill="none" d="M6,11.25A6.75,6.75,0,0,1,12.75,18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fill="none" strokeOpacity=".2" cx="6.75" cy="17.25" r="0.75" />
    <path fill="none" d="M6,6A12,12,0,0,1,18,18" />
    <path fill="none" d="M6,11.25A6.75,6.75,0,0,1,12.75,18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill="none" stroke={secondaryColor} cx="6.75" cy="17.25" r="0.75" />
    <path fill="none" d="M6,6A12,12,0,0,1,18,18" />
    <path fill="none" d="M6,11.25A6.75,6.75,0,0,1,12.75,18" />
  </Fragment>
);

const RSS = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default RSS;
