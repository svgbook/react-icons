import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="10.67" cy="10.67" r="4.67" />
    <path fill="none" d="M18,18l-4-4" />
    <path fill="none" d="M8.67,10.67,10,12l2.67-2.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18.35,17.65,14.65,14a5.1,5.1,0,0,0,1.18-3.28,5.17,5.17,0,1,0-5.16,5.16A5.1,5.1,0,0,0,14,14.65l3.7,3.7a.48.48,0,0,0,.7,0A.48.48,0,0,0,18.35,17.65ZM13,9.69l-2.67,2.66a.48.48,0,0,1-.7,0L8.31,11A.5.5,0,1,1,9,10.31l1,1L12.31,9a.5.5,0,0,1,.71.71Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="10.67" cy="10.67" r="4.67" />
    <path fill="none" d="M18,18l-4-4" />
    <path fill="none" d="M8.67,10.67,10,12l2.67-2.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="10.67" cy="10.67" r="4.67" />
    <path fill="none" d="M18,18l-4-4" />
    <path fill="none" d="M8.67,10.67,10,12l2.67-2.67" />
  </Fragment>
);

const ZoomCheck = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ZoomCheck;
