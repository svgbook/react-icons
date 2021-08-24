import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="8.12" y1="7.06" x2="8.12" y2="16.94" />
    <polyline fill="none" points="6 9.18 8.12 7.06 10.24 9.18" />
    <polyline fill="none" points="6 14.82 8.12 16.94 10.24 14.82" />
    <line x1="13.06" y1="7.77" x2="18" y2="7.77" />
    <line x1="13.06" y1="12" x2="18" y2="12" />
    <line x1="13.06" y1="16.24" x2="18" y2="16.24" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="8.12" y1="7.06" x2="8.12" y2="16.94" />
    <polyline fill="none" points="6 9.18 8.12 7.06 10.24 9.18" />
    <polyline fill="none" points="6 14.82 8.12 16.94 10.24 14.82" />
    <line x1="13.06" y1="7.77" x2="18" y2="7.77" />
    <line x1="13.06" y1="12" x2="18" y2="12" />
    <line x1="13.06" y1="16.24" x2="18" y2="16.24" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="8.12" y1="7.06" x2="8.12" y2="16.94" />
    <polyline fill="none" points="6 9.18 8.12 7.06 10.24 9.18" />
    <polyline fill="none" points="6 14.82 8.12 16.94 10.24 14.82" />
    <line x1="13.06" y1="7.77" x2="18" y2="7.77" />
    <line x1="13.06" y1="12" x2="18" y2="12" />
    <line x1="13.06" y1="16.24" x2="18" y2="16.24" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1="8.12" y1="7.06" x2="8.12" y2="16.94" />
    <polyline fill="none" points="6 9.18 8.12 7.06 10.24 9.18" />
    <polyline fill="none" points="6 14.82 8.12 16.94 10.24 14.82" />
    <line x1="13.06" y1="7.77" x2="18" y2="7.77" />
    <line x1="13.06" y1="12" x2="18" y2="12" />
    <line x1="13.06" y1="16.24" x2="18" y2="16.24" />
  </Fragment>
);

const LineHeight = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default LineHeight;
