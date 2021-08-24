import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6,7.71h6M10.29,6V7.71c0,3.79-1.92,6.86-4.29,6.86m.86-3.43c0,1.84,2.53,3.35,5.74,3.43"
    />
    <path fill="none" d="M11.14,18l3.43-7.71L18,18m-.77-1.71H11.91" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M6,7.71h6M10.29,6V7.71c0,3.79-1.92,6.86-4.29,6.86m.86-3.43c0,1.84,2.53,3.35,5.74,3.43"
    />
    <path fill="none" d="M11.14,18l3.43-7.71L18,18m-.77-1.71H11.91" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,7.71h6M10.29,6V7.71c0,3.79-1.92,6.86-4.29,6.86m.86-3.43c0,1.84,2.53,3.35,5.74,3.43"
    />
    <path fill="none" d="M11.14,18l3.43-7.71L18,18m-.77-1.71H11.91" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M6,7.71h6M10.29,6V7.71c0,3.79-1.92,6.86-4.29,6.86m.86-3.43c0,1.84,2.53,3.35,5.74,3.43"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M11.14,18l3.43-7.71L18,18m-.77-1.71H11.91"
    />
  </Fragment>
);

const Language = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Language;
