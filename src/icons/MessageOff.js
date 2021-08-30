import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9.72,7.06a6.58,6.58,0,0,1,6.44,1.08,4.91,4.91,0,0,1,1.08,6.44"
    />
    <path
      fill="none"
      d="M16,16a6.57,6.57,0,0,1-6.84.68L6,17.33l.87-2.6A4.91,4.91,0,0,1,8,8Z"
    />
    <line fill="none" x1="6" y1="6.01" x2="17.99" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M9.72,7.06a6.58,6.58,0,0,1,6.44,1.08,4.91,4.91,0,0,1,1.08,6.44"
    />
    <path d="M16,16a6.57,6.57,0,0,1-6.84.68L6,17.33l.87-2.6A4.91,4.91,0,0,1,8,8Z" />
    <line fill="none" x1="6" y1="6.01" x2="17.99" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9.72,7.06a6.58,6.58,0,0,1,6.44,1.08,4.91,4.91,0,0,1,1.08,6.44"
    />
    <path
      fillOpacity=".2"
      d="M16,16a6.57,6.57,0,0,1-6.84.68L6,17.33l.87-2.6A4.91,4.91,0,0,1,8,8Z"
    />
    <line fill="none" x1="6" y1="6.01" x2="17.99" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M9.72,7.06a6.58,6.58,0,0,1,6.44,1.08,4.91,4.91,0,0,1,1.08,6.44"
    />
    <path
      fill={secondaryColor}
      d="M16,16a6.57,6.57,0,0,1-6.84.68L6,17.33l.87-2.6A4.91,4.91,0,0,1,8,8Z"
    />
    <line fill="none" x1="6" y1="6.01" x2="17.99" y2="18" />
  </Fragment>
);

const MessageOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default MessageOff;
