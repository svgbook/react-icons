import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M10,7.33h5.33a2,2,0,0,1,2,2v4A2,2,0,0,1,17,14.38" />
    <path fill="none" d="M15.33,15.33h-6L6.67,18V9.33a2,2,0,0,1,1-1.71Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M10,7.33h5.33a2,2,0,0,1,2,2v4A2,2,0,0,1,17,14.38" />
    <path d="M15.33,15.33h-6L6.67,18V9.33a2,2,0,0,1,1-1.71Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M10,7.33h5.33a2,2,0,0,1,2,2v4A2,2,0,0,1,17,14.38" />
    <path fillOpacity=".2" d="M15.33,15.33h-6L6.67,18V9.33a2,2,0,0,1,1-1.71Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M10,7.33h5.33a2,2,0,0,1,2,2v4A2,2,0,0,1,17,14.38" />
    <path
      fill={secondaryColor}
      d="M15.33,15.33h-6L6.67,18V9.33a2,2,0,0,1,1-1.71Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

const MessageOff2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default MessageOff2;
