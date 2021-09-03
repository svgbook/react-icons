import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="9.8" y1="11.13" x2="14.2" y2="8.87" />
    <line x1="9.8" y1="12.87" x2="14.2" y2="15.13" />
    <circle fill="none" cx="8" cy="12" r="2" />
    <circle fill="none" cx="16" cy="8" r="2" />
    <circle fill="none" cx="16" cy="16" r="2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="9.8" y1="11.13" x2="14.2" y2="8.87" />
    <line x1="9.8" y1="12.87" x2="14.2" y2="15.13" />
    <circle cx="8" cy="12" r="2" />
    <circle cx="16" cy="8" r="2" />
    <circle cx="16" cy="16" r="2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line stroke=".2" x1="9.8" y1="11.13" x2="14.2" y2="8.87" />
    <line stroke=".2" x1="9.8" y1="12.87" x2="14.2" y2="15.13" />
    <circle fill="none" cx="8" cy="12" r="2" />
    <circle fill="none" cx="16" cy="8" r="2" />
    <circle fill="none" cx="16" cy="16" r="2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="9.8" y1="11.13" x2="14.2" y2="8.87" />
    <line x1="9.8" y1="12.87" x2="14.2" y2="15.13" />
    <circle fill="none" stroke={secondaryColor} cx="8" cy="12" r="2" />
    <circle fill="none" stroke={secondaryColor} cx="16" cy="8" r="2" />
    <circle fill="none" stroke={secondaryColor} cx="16" cy="16" r="2" />
  </Fragment>
);

const Share = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Share;
