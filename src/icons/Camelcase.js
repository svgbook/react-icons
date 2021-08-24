import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="8.33" cy="14.33" r="2.33" />
    <path fill="none" d="M13.33,16.67v-7a2.34,2.34,0,1,1,4.67,0v7" />
    <path d="M13.33,12.67H18" />
    <path d="M10.67,12v4.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="8.33" cy="14.33" r="2.33" />
    <path fill="none" d="M13.33,16.67v-7a2.34,2.34,0,1,1,4.67,0v7" />
    <path d="M13.33,12.67H18" />
    <path d="M10.67,12v4.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="8.33" cy="14.33" r="2.33" />
    <path fill="none" d="M13.33,16.67v-7a2.34,2.34,0,1,1,4.67,0v7" />
    <path strokeOpacity=".2" d="M13.33,12.67H18" />
    <path d="M10.67,12v4.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="8.33" cy="14.33" r="2.33" />
    <path fill="none" d="M13.33,16.67v-7a2.34,2.34,0,1,1,4.67,0v7" />
    <path stroke={secondaryColor} d="M13.33,12.67H18" />
    <path d="M10.67,12v4.67" />
  </Fragment>
);

const Camelcase = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Camelcase;
