import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M14.29,6.42A6,6,0,0,0,9.78,17.61" />
    <line x1="16.82" y1="8.38" x2="16.82" y2="8.38" />
    <line x1="12.79" y1="17.98" x2="12.79" y2="17.98" />
    <line x1="15.67" y1="16.8" x2="15.67" y2="16.81" />
    <line x1="17.57" y1="14.34" x2="17.57" y2="14.35" />
    <line x1="18" y1="11.26" x2="18" y2="11.27" />
    <polyline fill="none" points="9.78 14.27 9.78 18.02 6.03 18.02" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M14.29,6.42A6,6,0,0,0,9.78,17.61" />
    <line x1="16.82" y1="8.38" x2="16.82" y2="8.38" />
    <line x1="12.79" y1="17.98" x2="12.79" y2="17.98" />
    <line x1="15.67" y1="16.8" x2="15.67" y2="16.81" />
    <line x1="17.57" y1="14.34" x2="17.57" y2="14.35" />
    <line x1="18" y1="11.26" x2="18" y2="11.27" />
    <polyline fill="none" points="9.78 14.27 9.78 18.02 6.03 18.02" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M14.29,6.42A6,6,0,0,0,9.78,17.61" />
    <line strokeOpacity=".2" x1="16.82" y1="8.38" x2="16.82" y2="8.38" />
    <line strokeOpacity=".2" x1="12.79" y1="17.98" x2="12.79" y2="17.98" />
    <line strokeOpacity=".2" x1="15.67" y1="16.8" x2="15.67" y2="16.81" />
    <line strokeOpacity=".2" x1="17.57" y1="14.34" x2="17.57" y2="14.35" />
    <line strokeOpacity=".2" x1="18" y1="11.26" x2="18" y2="11.27" />
    <polyline fill="none" points="9.78 14.27 9.78 18.02 6.03 18.02" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M14.29,6.42A6,6,0,0,0,9.78,17.61" />
    <line stroke={secondaryColor} x1="16.82" y1="8.38" x2="16.82" y2="8.38" />
    <line stroke={secondaryColor} x1="12.79" y1="17.98" x2="12.79" y2="17.98" />
    <line stroke={secondaryColor} x1="15.67" y1="16.8" x2="15.67" y2="16.81" />
    <line stroke={secondaryColor} x1="17.57" y1="14.34" x2="17.57" y2="14.35" />
    <line stroke={secondaryColor} x1="18" y1="11.26" x2="18" y2="11.27" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="9.78 14.27 9.78 18.02 6.03 18.02"
    />
  </Fragment>
);

const Rotate2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Rotate2;
