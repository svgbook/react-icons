import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M16.67,7.33v8a1.34,1.34,0,0,1-1.34,1.34H10V6h5.33A1.34,1.34,0,0,1,16.67,7.33Z"
    />
    <path
      fill="none"
      d="M10,6V16.67H8A.67.67,0,0,1,7.33,16V6.67A.67.67,0,0,1,8,6Z"
    />
    <path d="M10,18V16.67" />
    <line x1="12.67" y1="8.67" x2="14" y2="8.67" />
    <line x1="12.67" y1="11.33" x2="14" y2="11.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M16.67,7.33v8a1.34,1.34,0,0,1-1.34,1.34H10V6h5.33A1.34,1.34,0,0,1,16.67,7.33Z"
    />
    <path d="M10,6V16.67H8A.67.67,0,0,1,7.33,16V6.67A.67.67,0,0,1,8,6Z" />
    <path d="M10,18V16.67" />
    <line x1="12.67" y1="8.67" x2="14" y2="8.67" />
    <line x1="12.67" y1="11.33" x2="14" y2="11.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M16.67,7.33v8a1.34,1.34,0,0,1-1.34,1.34H10V6h5.33A1.34,1.34,0,0,1,16.67,7.33Z"
    />
    <path
      fillOpacity=".2"
      d="M10,6V16.67H8A.67.67,0,0,1,7.33,16V6.67A.67.67,0,0,1,8,6Z"
    />
    <path d="M10,18V16.67" />
    <line x1="12.67" y1="8.67" x2="14" y2="8.67" />
    <line x1="12.67" y1="11.33" x2="14" y2="11.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M16.67,7.33v8a1.34,1.34,0,0,1-1.34,1.34H10V6h5.33A1.34,1.34,0,0,1,16.67,7.33Z"
    />
    <path
      fill={secondaryColor}
      d="M10,6V16.67H8A.67.67,0,0,1,7.33,16V6.67A.67.67,0,0,1,8,6Z"
    />
    <path d="M10,18V16.67" />
    <line x1="12.67" y1="8.67" x2="14" y2="8.67" />
    <line x1="12.67" y1="11.33" x2="14" y2="11.33" />
  </Fragment>
);

const Notebook = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Notebook;
