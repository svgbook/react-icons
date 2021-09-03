import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="7.77" x2="12.35" y2="7.77" />
    <line x1="6" y1="12" x2="10.94" y2="12" />
    <line x1="6" y1="16.24" x2="10.94" y2="16.24" />
    <polyline fill="none" points="13.77 14.12 15.88 16.23 18 14.12" />
    <line x1="15.88" y1="7.77" x2="15.88" y2="16.24" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="7.77" x2="12.35" y2="7.77" />
    <line x1="6" y1="12" x2="10.94" y2="12" />
    <line x1="6" y1="16.24" x2="10.94" y2="16.24" />
    <polyline fill="none" points="13.77 14.12 15.88 16.23 18 14.12" />
    <line x1="15.88" y1="7.77" x2="15.88" y2="16.24" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="6" y1="7.77" x2="12.35" y2="7.77" />
    <line strokeOpacity=".2" x1="6" y1="12" x2="10.94" y2="12" />
    <line strokeOpacity=".2" x1="6" y1="16.24" x2="10.94" y2="16.24" />
    <polyline fill="none" points="13.77 14.12 15.88 16.23 18 14.12" />
    <line x1="15.88" y1="7.77" x2="15.88" y2="16.24" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="6" y1="7.77" x2="12.35" y2="7.77" />
    <line x1="6" y1="12" x2="10.94" y2="12" />
    <line x1="6" y1="16.24" x2="10.94" y2="16.24" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="13.77 14.12 15.88 16.23 18 14.12"
    />
    <line stroke={secondaryColor} x1="15.88" y1="7.77" x2="15.88" y2="16.24" />
  </Fragment>
);

const SortDescending = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SortDescending;
