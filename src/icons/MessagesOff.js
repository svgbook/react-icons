import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.33,14v1.33a.66.66,0,0,1-.66.67H8L6,18V11.33a.67.67,0,0,1,.67-.66H8"
    />
    <path
      fill="none"
      d="M10.67,8V6.67A.67.67,0,0,1,11.33,6h6a.67.67,0,0,1,.67.67v6.66l-2-2H14Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M13.33,14v1.33a.66.66,0,0,1-.66.67H8L6,18V11.33a.67.67,0,0,1,.67-.66H8"
    />
    <path d="M10.67,8V6.67A.67.67,0,0,1,11.33,6h6a.67.67,0,0,1,.67.67v6.66l-2-2H14Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.33,14v1.33a.66.66,0,0,1-.66.67H8L6,18V11.33a.67.67,0,0,1,.67-.66H8"
    />
    <path
      fillOpacity=".2"
      d="M10.67,8V6.67A.67.67,0,0,1,11.33,6h6a.67.67,0,0,1,.67.67v6.66l-2-2H14Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M13.33,14v1.33a.66.66,0,0,1-.66.67H8L6,18V11.33a.67.67,0,0,1,.67-.66H8"
    />
    <path
      fill={secondaryColor}
      d="M10.67,8V6.67A.67.67,0,0,1,11.33,6h6a.67.67,0,0,1,.67.67v6.66l-2-2H14Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

const MessagesOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default MessagesOff;
