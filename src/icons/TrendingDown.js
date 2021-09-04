import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polyline fill="none" points="6 8.67 10 12.67 12.67 10 18 15.33" />
    <polyline fill="none" points="18 10.67 18 15.33 13.33 15.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polyline fill="none" points="6 8.67 10 12.67 12.67 10 18 15.33" />
    <polyline fill="none" points="18 10.67 18 15.33 13.33 15.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polyline
      fill="none"
      strokeOpacity=".2"
      points="6 8.67 10 12.67 12.67 10 18 15.33"
    />
    <polyline fill="none" points="18 10.67 18 15.33 13.33 15.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill="none" points="6 8.67 10 12.67 12.67 10 18 15.33" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="18 10.67 18 15.33 13.33 15.33"
    />
  </Fragment>
);

const TrendingDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TrendingDown;
