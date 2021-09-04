import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polyline fill="none" points="6 15.33 10 11.33 12.67 14 18 8.67" />
    <polyline fill="none" points="13.33 8.67 18 8.67 18 13.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polyline fill="none" points="6 15.33 10 11.33 12.67 14 18 8.67" />
    <polyline fill="none" points="13.33 8.67 18 8.67 18 13.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polyline
      fill="none"
      strokeOpacity=".2"
      points="6 15.33 10 11.33 12.67 14 18 8.67"
    />
    <polyline fill="none" points="13.33 8.67 18 8.67 18 13.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill="none" points="6 15.33 10 11.33 12.67 14 18 8.67" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="13.33 8.67 18 8.67 18 13.33"
    />
  </Fragment>
);

const TrendingUp = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TrendingUp;
