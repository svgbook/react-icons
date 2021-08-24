import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polygon fill="none" points="18 6.67 18 15.33 14 17.33 14 8.67 18 6.67" />
    <polygon fill="none" points="14 8.67 14 17.33 10 15.33 10 6.67 14 8.67" />
    <polygon fill="none" points="10 6.67 10 15.33 6 17.33 6 8.67 10 6.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polygon fill="none" points="18 6.67 18 15.33 14 17.33 14 8.67 18 6.67" />
    <polygon points="14 8.67 14 17.33 10 15.33 10 6.67 14 8.67" />
    <polygon fill="none" points="10 6.67 10 15.33 6 17.33 6 8.67 10 6.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polygon
      fillOpacity=".2"
      points="18 6.67 18 15.33 14 17.33 14 8.67 18 6.67"
    />
    <polygon
      fillOpacity=".2"
      points="14 8.67 14 17.33 10 15.33 10 6.67 14 8.67"
    />
    <polygon
      fillOpacity=".2"
      points="10 6.67 10 15.33 6 17.33 6 8.67 10 6.67"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polygon
      fill={secondaryColor}
      points="18 6.67 18 15.33 14 17.33 14 8.67 18 6.67"
    />
    <polygon
      fill={secondaryColor}
      points="14 8.67 14 17.33 10 15.33 10 6.67 14 8.67"
    />
    <polygon
      fill={secondaryColor}
      points="10 6.67 10 15.33 6 17.33 6 8.67 10 6.67"
    />
  </Fragment>
);

const Map = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Map;
