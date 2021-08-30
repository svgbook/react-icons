import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6.47,8.2,8.2,6.47a.66.66,0,0,1,.94,0l3.72,3.73a.66.66,0,0,1,0,.94l-1.72,1.72a.66.66,0,0,1-.94,0L6.47,9.14A.66.66,0,0,1,6.47,8.2Z"
    />
    <path fill="none" d="M8,10.67l-2,2,2,2,2-2" />
    <path fill="none" d="M10.67,8l2-2,2,2-2,2" />
    <line x1="12" y1="12" x2="13" y2="13" />
    <path fill="none" d="M13.67,15.33a1.66,1.66,0,0,0,1.66-1.66" />
    <path fill="none" d="M14,18a4,4,0,0,0,4-4" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M6.47,8.2,8.2,6.47a.66.66,0,0,1,.94,0l3.72,3.73a.66.66,0,0,1,0,.94l-1.72,1.72a.66.66,0,0,1-.94,0L6.47,9.14A.66.66,0,0,1,6.47,8.2Z" />
    <path fill="none" d="M8,10.67l-2,2,2,2,2-2" />
    <path fill="none" d="M10.67,8l2-2,2,2-2,2" />
    <line x1="12" y1="12" x2="13" y2="13" />
    <path fill="none" d="M13.67,15.33a1.66,1.66,0,0,0,1.66-1.66" />
    <path fill="none" d="M14,18a4,4,0,0,0,4-4" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M6.47,8.2,8.2,6.47a.66.66,0,0,1,.94,0l3.72,3.73a.66.66,0,0,1,0,.94l-1.72,1.72a.66.66,0,0,1-.94,0L6.47,9.14A.66.66,0,0,1,6.47,8.2Z"
    />
    <path fill="none" d="M8,10.67l-2,2,2,2,2-2" />
    <path fill="none" d="M10.67,8l2-2,2,2-2,2" />
    <line x1="12" y1="12" x2="13" y2="13" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M13.67,15.33a1.66,1.66,0,0,0,1.66-1.66"
    />
    <path fill="none" strokeOpacity=".2" d="M14,18a4,4,0,0,0,4-4" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M6.47,8.2,8.2,6.47a.66.66,0,0,1,.94,0l3.72,3.73a.66.66,0,0,1,0,.94l-1.72,1.72a.66.66,0,0,1-.94,0L6.47,9.14A.66.66,0,0,1,6.47,8.2Z"
    />
    <path fill="none" d="M8,10.67l-2,2,2,2,2-2" />
    <path fill="none" d="M10.67,8l2-2,2,2-2,2" />
    <line x1="12" y1="12" x2="13" y2="13" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M13.67,15.33a1.66,1.66,0,0,0,1.66-1.66"
    />
    <path fill="none" stroke={secondaryColor} d="M14,18a4,4,0,0,0,4-4" />
  </Fragment>
);

const Satellite = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Satellite;
