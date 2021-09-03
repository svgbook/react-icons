import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6.4" width="4" height="4" rx="0.4" />
    <rect fill="none" x="6" y="13.6" width="4" height="4" rx="0.4" />
    <path fill="none" d="M13.2,14.4l2.4,2.4L18,14.4" />
    <path d="M15.6,16.8V7.2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <rect x="6" y="6.4" width="4" height="4" rx="0.4" />
    <rect x="6" y="13.6" width="4" height="4" rx="0.4" />
    <path fill="none" d="M13.2,14.4l2.4,2.4L18,14.4" />
    <path d="M15.6,16.8V7.2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6.4" width="4" height="4" rx="0.4" />
    <rect fillOpacity=".2" x="6" y="13.6" width="4" height="4" rx="0.4" />
    <path fill="none" d="M13.2,14.4l2.4,2.4L18,14.4" />
    <path d="M15.6,16.8V7.2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x="6" y="6.4" width="4" height="4" rx="0.4" />
    <rect fill={secondaryColor} x="6" y="13.6" width="4" height="4" rx="0.4" />
    <path fill="none" stroke={secondaryColor} d="M13.2,14.4l2.4,2.4L18,14.4" />
    <path stroke={secondaryColor} d="M15.6,16.8V7.2" />
  </Fragment>
);

const SortDescending2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SortDescending2;
