import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,16.67v-7a2.34,2.34,0,1,1,4.67,0v7" />
    <path d="M6,12.67h4.67" />
    <path fill="none" d="M13.33,16.67v-7a2.34,2.34,0,1,1,4.67,0v7" />
    <path d="M13.33,12.67H18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,16.67v-7a2.34,2.34,0,1,1,4.67,0v7" />
    <path d="M6,12.67h4.67" />
    <path fill="none" d="M13.33,16.67v-7a2.34,2.34,0,1,1,4.67,0v7" />
    <path d="M13.33,12.67H18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,16.67v-7a2.34,2.34,0,1,1,4.67,0v7" />
    <path strokeOpacity=".2" d="M6,12.67h4.67" />
    <path fill="none" d="M13.33,16.67v-7a2.34,2.34,0,1,1,4.67,0v7" />
    <path strokeOpacity=".2" d="M13.33,12.67H18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,16.67v-7a2.34,2.34,0,1,1,4.67,0v7" />
    <path stroke={secondaryColor} d="M6,12.67h4.67" />
    <path fill="none" d="M13.33,16.67v-7a2.34,2.34,0,1,1,4.67,0v7" />
    <path stroke={secondaryColor} d="M13.33,12.67H18" />
  </Fragment>
);

const Uppercase = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Uppercase;
