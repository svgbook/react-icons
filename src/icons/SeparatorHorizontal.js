import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="12" x2="18" y2="12" />
    <polyline fill="none" points="9 9 12 6 15 9" />
    <polyline fill="none" points="15 15 12 18 9 15" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="12" x2="18" y2="12" />
    <polyline fill="none" points="9 9 12 6 15 9" />
    <polyline fill="none" points="15 15 12 18 9 15" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="6" y1="12" x2="18" y2="12" />
    <polyline fill="none" points="9 9 12 6 15 9" />
    <polyline fill="none" points="15 15 12 18 9 15" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1="6" y1="12" x2="18" y2="12" />
    <polyline fill="none" points="9 9 12 6 15 9" />
    <polyline fill="none" points="15 15 12 18 9 15" />
  </Fragment>
);

const SeparatorHorizontal = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SeparatorHorizontal;
