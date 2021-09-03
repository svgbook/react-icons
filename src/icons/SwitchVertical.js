import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polyline fill="none" points="5.95 9.31 8.64 6.62 11.33 9.31" />
    <line x1="8.64" y1="6.62" x2="8.64" y2="12.67" />
    <polyline fill="none" points="12.67 14.69 15.36 17.38 18.05 14.69" />
    <line x1="15.36" y1="10.66" x2="15.36" y2="17.38" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polyline fill="none" points="5.95 9.31 8.64 6.62 11.33 9.31" />
    <line x1="8.64" y1="6.62" x2="8.64" y2="12.67" />
    <polyline fill="none" points="12.67 14.69 15.36 17.38 18.05 14.69" />
    <line x1="15.36" y1="10.66" x2="15.36" y2="17.38" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polyline
      fill="none"
      strokeOpacity=".2"
      points="5.95 9.31 8.64 6.62 11.33 9.31"
    />
    <line strokeOpacity=".2" x1="8.64" y1="6.62" x2="8.64" y2="12.67" />
    <polyline fill="none" points="12.67 14.69 15.36 17.38 18.05 14.69" />
    <line x1="15.36" y1="10.66" x2="15.36" y2="17.38" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill="none" points="5.95 9.31 8.64 6.62 11.33 9.31" />
    <line x1="8.64" y1="6.62" x2="8.64" y2="12.67" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="12.67 14.69 15.36 17.38 18.05 14.69"
    />
    <line stroke={secondaryColor} x1="15.36" y1="10.66" x2="15.36" y2="17.38" />
  </Fragment>
);

const SwitchVertical = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SwitchVertical;
