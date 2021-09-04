import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="12" r="6" />
    <line x1="6.4" y1="10" x2="17.6" y2="10" />
    <line x1="6.4" y1="14" x2="17.6" y2="14" />
    <path fill="none" d="M11.67,6a11.34,11.34,0,0,0,0,12" />
    <path fill="none" d="M12.33,6a11.34,11.34,0,0,1,0,12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M13.43,9.5H10.57a12.7,12.7,0,0,1,1-3A7.84,7.84,0,0,1,12,5.66a7.84,7.84,0,0,1,.45.86A12.7,12.7,0,0,1,13.43,9.5Z"
    />
    <path
      stroke="none"
      d="M18,9.5H14.45a13.34,13.34,0,0,0-.81-2.75c-.16-.39-.34-.77-.53-1.15A6.53,6.53,0,0,1,18,9.5Z"
    />
    <path
      stroke="none"
      d="M18.5,12a6.16,6.16,0,0,1-.18,1.5H14.59a12.55,12.55,0,0,0,0-3h3.73A6.16,6.16,0,0,1,18.5,12Z"
    />
    <path
      stroke="none"
      d="M18,14.5a6.53,6.53,0,0,1-4.89,3.9c.19-.38.37-.76.53-1.15a13.34,13.34,0,0,0,.81-2.75Z"
    />
    <path
      stroke="none"
      d="M10.89,18.4A6.53,6.53,0,0,1,6,14.5H9.55a13.34,13.34,0,0,0,.81,2.75C10.52,17.64,10.7,18,10.89,18.4Z"
    />
    <path
      stroke="none"
      d="M9.41,13.5H5.68a6.34,6.34,0,0,1,0-3H9.41A12.54,12.54,0,0,0,9.41,13.5Z"
    />
    <path
      stroke="none"
      d="M10.89,5.6c-.19.38-.37.76-.53,1.15A13.34,13.34,0,0,0,9.55,9.5H6A6.53,6.53,0,0,1,10.89,5.6Z"
    />
    <path
      stroke="none"
      d="M13.59,13.5H10.41a12.54,12.54,0,0,1,0-3h3.18A12.55,12.55,0,0,1,13.59,13.5Z"
    />
    <path
      stroke="none"
      d="M13.43,14.5a12.7,12.7,0,0,1-1,3,7.84,7.84,0,0,1-.45.86,7.84,7.84,0,0,1-.45-.86,12.7,12.7,0,0,1-1-3Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="12" r="6" />
    <line x1="6.4" y1="10" x2="17.6" y2="10" />
    <line x1="6.4" y1="14" x2="17.6" y2="14" />
    <path fill="none" d="M11.67,6a11.34,11.34,0,0,0,0,12" />
    <path fill="none" d="M12.33,6a11.34,11.34,0,0,1,0,12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="12" r="6" />
    <line x1="6.4" y1="10" x2="17.6" y2="10" />
    <line x1="6.4" y1="14" x2="17.6" y2="14" />
    <path fill="none" d="M11.67,6a11.34,11.34,0,0,0,0,12" />
    <path fill="none" d="M12.33,6a11.34,11.34,0,0,1,0,12" />
  </Fragment>
);

const World = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default World;
