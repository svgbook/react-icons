import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,13.33l-2-2H11.33a.66.66,0,0,1-.66-.66v-4A.67.67,0,0,1,11.33,6h6a.67.67,0,0,1,.67.67v6.66"
    />
    <path
      fill="none"
      d="M13.33,14v1.33a.66.66,0,0,1-.66.67H8L6,18V11.33a.67.67,0,0,1,.67-.66H8"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,13.33l-2-2H11.33a.66.66,0,0,1-.66-.66v-4A.67.67,0,0,1,11.33,6h6a.67.67,0,0,1,.67.67v6.66" />
    <path
      fill="none"
      d="M13.33,14v1.33a.66.66,0,0,1-.66.67H8L6,18V11.33a.67.67,0,0,1,.67-.66H8"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,13.33l-2-2H11.33a.66.66,0,0,1-.66-.66v-4A.67.67,0,0,1,11.33,6h6a.67.67,0,0,1,.67.67v6.66"
    />
    <path
      fill="none"
      d="M13.33,14v1.33a.66.66,0,0,1-.66.67H8L6,18V11.33a.67.67,0,0,1,.67-.66H8"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,13.33l-2-2H11.33a.66.66,0,0,1-.66-.66v-4A.67.67,0,0,1,11.33,6h6a.67.67,0,0,1,.67.67v6.66"
    />
    <path
      fill="none"
      d="M13.33,14v1.33a.66.66,0,0,1-.66.67H8L6,18V11.33a.67.67,0,0,1,.67-.66H8"
    />
  </Fragment>
);

const Messages = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Messages;
