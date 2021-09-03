import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="12" y1="6" x2="12" y2="18" />
    <polyline fill="none" points="9 9 6 12 9 15" />
    <polyline fill="none" points="15 15 18 12 15 9" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="12" y1="6" x2="12" y2="18" />
    <polyline fill="none" points="9 9 6 12 9 15" />
    <polyline fill="none" points="15 15 18 12 15 9" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="12" y1="6" x2="12" y2="18" />
    <polyline fill="none" points="9 9 6 12 9 15" />
    <polyline fill="none" points="15 15 18 12 15 9" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line stroke={secondaryColor} x1="12" y1="6" x2="12" y2="18" />
    <polyline fill="none" points="9 9 6 12 9 15" />
    <polyline fill="none" points="15 15 18 12 15 9" />
  </Fragment>
);

const SeparatorVertical = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SeparatorVertical;
