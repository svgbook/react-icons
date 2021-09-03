import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6.67,6H12l-.67,6h-4Z" />
    <path fill="none" d="M8.67,16H10v2H8.67Z" />
    <path fill="none" d="M17.33,6v8H14A9.43,9.43,0,0,1,17.33,6Z" />
    <path fill="none" d="M17.33,14v4h-.66V16" />
    <line x1="9.33" y1="12" x2="9.33" y2="16" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M6.67,6H12l-.67,6h-4Z" />
    <path d="M8.67,16H10v2H8.67Z" />
    <path d="M17.33,6v8H14A9.43,9.43,0,0,1,17.33,6Z" />
    <path fill="none" d="M17.33,14v4h-.66V16" />
    <line x1="9.33" y1="12" x2="9.33" y2="16" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M6.67,6H12l-.67,6h-4Z" />
    <path fillOpacity=".2" d="M8.67,16H10v2H8.67Z" />
    <path fillOpacity=".2" d="M17.33,6v8H14A9.43,9.43,0,0,1,17.33,6Z" />
    <path fill="none" d="M17.33,14v4h-.66V16" />
    <line x1="9.33" y1="12" x2="9.33" y2="16" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M6.67,6H12l-.67,6h-4Z" />
    <path fill={secondaryColor} d="M8.67,16H10v2H8.67Z" />
    <path fill={secondaryColor} d="M17.33,6v8H14A9.43,9.43,0,0,1,17.33,6Z" />
    <path fill="none" d="M17.33,14v4h-.66V16" />
    <line x1="9.33" y1="12" x2="9.33" y2="16" />
  </Fragment>
);

const Kitchen = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Kitchen;
