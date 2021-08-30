import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M14.57,18V16.29a1.72,1.72,0,0,1,1.72-1.72H18" />
    <path fill="none" d="M14.57,6V7.71a1.72,1.72,0,0,0,1.72,1.72H18" />
    <path fill="none" d="M6,14.57H7.71a1.72,1.72,0,0,1,1.72,1.72V18" />
    <path fill="none" d="M6,9.43H7.71A1.72,1.72,0,0,0,9.43,7.71V6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M14.57,18V16.29a1.72,1.72,0,0,1,1.72-1.72H18" />
    <path fill="none" d="M14.57,6V7.71a1.72,1.72,0,0,0,1.72,1.72H18" />
    <path fill="none" d="M6,14.57H7.71a1.72,1.72,0,0,1,1.72,1.72V18" />
    <path fill="none" d="M6,9.43H7.71A1.72,1.72,0,0,0,9.43,7.71V6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M14.57,18V16.29a1.72,1.72,0,0,1,1.72-1.72H18"
    />
    <path fill="none" d="M14.57,6V7.71a1.72,1.72,0,0,0,1.72,1.72H18" />
    <path fill="none" d="M6,14.57H7.71a1.72,1.72,0,0,1,1.72,1.72V18" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,9.43H7.71A1.72,1.72,0,0,0,9.43,7.71V6"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M14.57,18V16.29a1.72,1.72,0,0,1,1.72-1.72H18"
    />
    <path fill="none" d="M14.57,6V7.71a1.72,1.72,0,0,0,1.72,1.72H18" />
    <path fill="none" d="M6,14.57H7.71a1.72,1.72,0,0,1,1.72,1.72V18" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6,9.43H7.71A1.72,1.72,0,0,0,9.43,7.71V6"
    />
  </Fragment>
);

const Minimize = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Minimize;
