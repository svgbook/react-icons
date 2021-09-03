import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polyline fill="none" points="8.57 9.43 12 6 15.43 9.43" />
    <polyline fill="none" points="15.43 14.57 12 18 8.57 14.57" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polyline fill="none" points="8.57 9.43 12 6 15.43 9.43" />
    <polyline fill="none" points="15.43 14.57 12 18 8.57 14.57" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polyline fill="none" points="8.57 9.43 12 6 15.43 9.43" />
    <polyline
      fill="none"
      strokeOpacity=".2"
      points="15.43 14.57 12 18 8.57 14.57"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill="none" points="8.57 9.43 12 6 15.43 9.43" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="15.43 14.57 12 18 8.57 14.57"
    />
  </Fragment>
);

const Selector = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Selector;
