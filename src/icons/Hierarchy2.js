import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M10.67,6h2.66V8.67H10.67Z" />
    <path fill="none" d="M6,15.33H8.67V18H6Z" />
    <path fill="none" d="M15.33,15.33H18V18H15.33Z" />
    <path fill="none" d="M8.67,15.33,12,12.67l3.33,2.66" />
    <line x1="12" y1="8.67" x2="12" y2="12.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M10.67,6h2.66V8.67H10.67Z" />
    <path d="M6,15.33H8.67V18H6Z" />
    <path d="M15.33,15.33H18V18H15.33Z" />
    <path fill="none" d="M8.67,15.33,12,12.67l3.33,2.66" />
    <line x1="12" y1="8.67" x2="12" y2="12.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M10.67,6h2.66V8.67H10.67Z" />
    <path fillOpacity=".2" d="M6,15.33H8.67V18H6Z" />
    <path fillOpacity=".2" d="M15.33,15.33H18V18H15.33Z" />
    <path fill="none" d="M8.67,15.33,12,12.67l3.33,2.66" />
    <line x1="12" y1="8.67" x2="12" y2="12.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M10.67,6h2.66V8.67H10.67Z" />
    <path fill={secondaryColor} d="M6,15.33H8.67V18H6Z" />
    <path fill={secondaryColor} d="M15.33,15.33H18V18H15.33Z" />
    <path fill="none" d="M8.67,15.33,12,12.67l3.33,2.66" />
    <line x1="12" y1="8.67" x2="12" y2="12.67" />
  </Fragment>
);

const Hierarchy2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Hierarchy2;
