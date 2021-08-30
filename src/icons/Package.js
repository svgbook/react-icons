import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polygon fill="none" points="12 12 12 18 6.67 15 6.67 9 9.33 10.5 12 12" />
    <polygon fill="none" points="17.33 9 17.33 15 12 18 12 12 17.33 9" />
    <polygon fill="none" points="17.33 9 12 12 9.33 10.5 14.67 7.5 17.33 9" />
    <polygon fill="none" points="14.67 7.5 9.33 10.5 6.67 9 12 6 14.67 7.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polygon points="12 12 12 18 6.67 15 6.67 9 9.33 10.5 12 12" />
    <polygon points="17.33 9 17.33 15 12 18 12 12 17.33 9" />
    <polygon fill="none" points="17.33 9 12 12 9.33 10.5 14.67 7.5 17.33 9" />
    <polygon fill="none" points="14.67 7.5 9.33 10.5 6.67 9 12 6 14.67 7.5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polygon
      fillOpacity=".2"
      points="12 12 12 18 6.67 15 6.67 9 9.33 10.5 12 12"
    />
    <polygon fillOpacity=".2" points="17.33 9 17.33 15 12 18 12 12 17.33 9" />
    <polygon
      fillOpacity=".2"
      points="17.33 9 12 12 9.33 10.5 14.67 7.5 17.33 9"
    />
    <polygon
      fillOpacity=".2"
      points="14.67 7.5 9.33 10.5 6.67 9 12 6 14.67 7.5"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polygon
      fill={secondaryColor}
      points="12 12 12 18 6.67 15 6.67 9 9.33 10.5 12 12"
    />
    <polygon
      fill={secondaryColor}
      points="17.33 9 17.33 15 12 18 12 12 17.33 9"
    />
    <polygon
      fill={secondaryColor}
      points="17.33 9 12 12 9.33 10.5 14.67 7.5 17.33 9"
    />
    <polygon
      fill={secondaryColor}
      points="14.67 7.5 9.33 10.5 6.67 9 12 6 14.67 7.5"
    />
  </Fragment>
);

const Package = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Package;
