import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,8.67l-6,4-6-4A1.34,1.34,0,0,1,7.33,7.33h9.34A1.34,1.34,0,0,1,18,8.67Z"
    />
    <path
      fill="none"
      d="M18,8.67v6.66a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,15.33V8.67l6,4Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M18,8.67l-6,4-6-4A1.34,1.34,0,0,1,7.33,7.33h9.34A1.34,1.34,0,0,1,18,8.67Z"
    />
    <path d="M18,8.67v6.66a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,15.33V8.67l6,4Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,8.67l-6,4-6-4A1.34,1.34,0,0,1,7.33,7.33h9.34A1.34,1.34,0,0,1,18,8.67Z"
    />
    <path
      fillOpacity=".2"
      d="M18,8.67v6.66a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,15.33V8.67l6,4Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,8.67l-6,4-6-4A1.34,1.34,0,0,1,7.33,7.33h9.34A1.34,1.34,0,0,1,18,8.67Z"
    />
    <path
      fill={secondaryColor}
      d="M18,8.67v6.66a1.34,1.34,0,0,1-1.33,1.34H7.33A1.34,1.34,0,0,1,6,15.33V8.67l6,4Z"
    />
  </Fragment>
);

const Mail = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Mail;
