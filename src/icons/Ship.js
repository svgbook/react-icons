import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M7.8,12.6V9h4.8L15,12.6" />
    <path fill="none" d="M9,9V6.6H8.4" />
    <path
      fill="none"
      d="M17.4,12.6l-2,4a1.51,1.51,0,0,0-2.21.22,1.5,1.5,0,0,1-2.4,0,1.5,1.5,0,0,0-2.4,0,1.4,1.4,0,0,1-.44.4L6.6,12.6Z"
    />
    <path
      fill="none"
      d="M6,16.8a1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M7.8,12.6V9h4.8L15,12.6" />
    <path fill="none" d="M9,9V6.6H8.4" />
    <path d="M17.4,12.6l-2,4a1.51,1.51,0,0,0-2.21.22,1.5,1.5,0,0,1-2.4,0,1.5,1.5,0,0,0-2.4,0,1.4,1.4,0,0,1-.44.4L6.6,12.6Z" />
    <path
      fill="none"
      d="M6,16.8a1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M7.8,12.6V9h4.8L15,12.6" />
    <path fill="none" d="M9,9V6.6H8.4" />
    <path
      fillOpacity=".2"
      d="M17.4,12.6l-2,4a1.51,1.51,0,0,0-2.21.22,1.5,1.5,0,0,1-2.4,0,1.5,1.5,0,0,0-2.4,0,1.4,1.4,0,0,1-.44.4L6.6,12.6Z"
    />
    <path
      fill="none"
      d="M6,16.8a1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M7.8,12.6V9h4.8L15,12.6" />
    <path fill="none" d="M9,9V6.6H8.4" />
    <path
      fill={secondaryColor}
      d="M17.4,12.6l-2,4a1.51,1.51,0,0,0-2.21.22,1.5,1.5,0,0,1-2.4,0,1.5,1.5,0,0,0-2.4,0,1.4,1.4,0,0,1-.44.4L6.6,12.6Z"
    />
    <path
      fill="none"
      d="M6,16.8a1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0,1.5,1.5,0,0,1,2.4,0,1.5,1.5,0,0,0,2.4,0"
    />
  </Fragment>
);

const Ship = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Ship;
