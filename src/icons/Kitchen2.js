import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polyline fill="none" points="16.67 14 16.67 18 16 18 16 16" />
    <line x1="9.33" y1="10.67" x2="9.33" y2="18" />
    <path fill="none" d="M7.33,6.67v2a2,2,0,0,0,4,0v-2Z" />
    <path fill="none" d="M16.67,6v8H13.33A9.47,9.47,0,0,1,16.67,6Z" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <polyline fill="none" points="16.67 14 16.67 18 16 18 16 16" />
    <line x1="9.33" y1="10.67" x2="9.33" y2="18" />
    <path d="M7.33,6.67v2a2,2,0,0,0,4,0v-2Z" />
    <path d="M16.67,6v8H13.33A9.47,9.47,0,0,1,16.67,6Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polyline fill="none" points="16.67 14 16.67 18 16 18 16 16" />
    <line x1="9.33" y1="10.67" x2="9.33" y2="18" />
    <path fillOpacity=".2" d="M7.33,6.67v2a2,2,0,0,0,4,0v-2Z" />
    <path fillOpacity=".2" d="M16.67,6v8H13.33A9.47,9.47,0,0,1,16.67,6Z" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polyline fill="none" points="16.67 14 16.67 18 16 18 16 16" />
    <line x1="9.33" y1="10.67" x2="9.33" y2="18" />
    <path fill={secondaryColor} d="M7.33,6.67v2a2,2,0,0,0,4,0v-2Z" />
    <path fill={secondaryColor} d="M16.67,6v8H13.33A9.47,9.47,0,0,1,16.67,6Z" />
  </Fragment>
);

const Kitchen2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Kitchen2;
