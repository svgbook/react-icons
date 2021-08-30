import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polyline fill="none" points="6 7.71 10.29 12 6 16.29" />
    <line x1="12.86" y1="16.29" x2="18" y2="16.29" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polyline fill="none" points="6 7.71 10.29 12 6 16.29" />
    <line x1="12.86" y1="16.29" x2="18" y2="16.29" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polyline fill="none" points="6 7.71 10.29 12 6 16.29" />
    <line strokeOpacity=".2" x1="12.86" y1="16.29" x2="18" y2="16.29" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill="none" points="6 7.71 10.29 12 6 16.29" />
    <line stroke={secondaryColor} x1="12.86" y1="16.29" x2="18" y2="16.29" />
  </Fragment>
);

const Prompt = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Prompt;
