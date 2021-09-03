import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6.4" width="4" height="4" rx="0.4" />
    <rect fill="none" x="6" y="13.6" width="4" height="4" rx="0.4" />
    <path fill="none" d="M13.2,9.6l2.4-2.4L18,9.6" />
    <path d="M15.6,7.2v9.6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <rect x="6" y="6.4" width="4" height="4" rx="0.4" />
    <rect x="6" y="13.6" width="4" height="4" rx="0.4" />
    <path fill="none" d="M13.2,9.6l2.4-2.4L18,9.6" />
    <path d="M15.6,7.2v9.6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6.4" width="4" height="4" rx="0.4" />
    <rect fillOpacity=".2" x="6" y="13.6" width="4" height="4" rx="0.4" />
    <path fill="none" d="M13.2,9.6l2.4-2.4L18,9.6" />
    <path d="M15.6,7.2v9.6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x="6" y="6.4" width="4" height="4" rx="0.4" />
    <rect fill={secondaryColor} x="6" y="13.6" width="4" height="4" rx="0.4" />
    <path fill="none" stroke={secondaryColor} d="M13.2,9.6l2.4-2.4L18,9.6" />
    <path stroke={secondaryColor} d="M15.6,7.2v9.6" />
  </Fragment>
);

const SortAscending2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SortAscending2;
