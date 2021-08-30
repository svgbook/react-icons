import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="8.67" y1="17.67" x2="15.33" y2="17.67" />
    <path fill="none" d="M8,8.33l4-.66,4,.66" />
    <line x1="12" y1="6.33" x2="12" y2="17.67" />
    <path fill="none" d="M10,12.33l-2-4-2,4a2,2,0,0,0,4,0" />
    <path fill="none" d="M18,12.33l-2-4-2,4a2,2,0,0,0,4,0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="8.67" y1="17.67" x2="15.33" y2="17.67" />
    <path fill="none" d="M8,8.33l4-.66,4,.66" />
    <line x1="12" y1="6.33" x2="12" y2="17.67" />
    <path d="M10,12.33l-2-4-2,4a2,2,0,0,0,4,0" />
    <path d="M18,12.33l-2-4-2,4a2,2,0,0,0,4,0" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="8.67" y1="17.67" x2="15.33" y2="17.67" />
    <path fill="none" d="M8,8.33l4-.66,4,.66" />
    <line x1="12" y1="6.33" x2="12" y2="17.67" />
    <path fillOpacity=".2" d="M10,12.33l-2-4-2,4a2,2,0,0,0,4,0" />
    <path fillOpacity=".2" d="M18,12.33l-2-4-2,4a2,2,0,0,0,4,0" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="8.67" y1="17.67" x2="15.33" y2="17.67" />
    <path fill="none" d="M8,8.33l4-.66,4,.66" />
    <line x1="12" y1="6.33" x2="12" y2="17.67" />
    <path fill={secondaryColor} d="M10,12.33l-2-4-2,4a2,2,0,0,0,4,0" />
    <path fill={secondaryColor} d="M18,12.33l-2-4-2,4a2,2,0,0,0,4,0" />
  </Fragment>
);

const Scale = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Scale;
