import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line fill="none" x1="6" y1="6" x2="18" y2="18" />
    <path
      fill="none"
      d="M14,7,11.83,9.17m-1.71.95-1.45.55-1,1,4.66,4.66,1-1,.55-1.45m.95-1.71L17,10"
    />
    <line x1="10" y1="14" x2="7" y2="17" />
    <line x1="13.67" y1="6.67" x2="17.33" y2="10.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="6" x2="18" y2="18" />
    <path fill="none" d="M10.12,10.12l-1.45.55-1,1,4.66,4.66,1-1,.55-1.45Z" />
    <rect
      fill="none"
      x="12.88"
      y="7.46"
      width="3.07"
      height="4.24"
      transform="translate(-2.56 13) rotate(-45)"
    />
    <line x1="10" y1="14" x2="7" y2="17" />
    <line x1="13.67" y1="6.67" x2="17.33" y2="10.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="6" y1="6" x2="18" y2="18" />
    <path
      fillOpacity=".2"
      d="M10.12,10.12l-1.45.55-1,1,4.66,4.66,1-1,.55-1.45Z"
    />
    <rect
      fillOpacity=".2"
      x="12.88"
      y="7.46"
      width="3.07"
      height="4.24"
      transform="translate(-2.56 13) rotate(-45)"
    />
    <line x1="10" y1="14" x2="7" y2="17" />
    <line x1="13.67" y1="6.67" x2="17.33" y2="10.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="6" y1="6" x2="18" y2="18" />
    <path
      fill={secondaryColor}
      d="M10.12,10.12l-1.45.55-1,1,4.66,4.66,1-1,.55-1.45Z"
    />
    <rect
      fill={secondaryColor}
      x="12.88"
      y="7.46"
      width="3.07"
      height="4.24"
      transform="translate(-2.56 13) rotate(-45)"
    />
    <line x1="10" y1="14" x2="7" y2="17" />
    <line x1="13.67" y1="6.67" x2="17.33" y2="10.33" />
  </Fragment>
);

const PinnedOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PinnedOff;
