import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M14.4,7.8l1.8,1.8-1.2.6,2.4,2.4-1.8.6L18,15.6H12.6" />
    <line x1="13.8" y1="17.4" x2="13.8" y2="15.6" />
    <path
      fill="none"
      d="M8.3,14.4a1.81,1.81,0,0,1-1.7-1.91c0-.1,0-.2.05-.31a1.82,1.82,0,0,1,.18-2.9A1.8,1.8,0,0,1,9.6,7.06a1.8,1.8,0,0,1,2.77,2.22,1.81,1.81,0,0,1,.55,2.49,1.79,1.79,0,0,1-.37.41,1.8,1.8,0,0,1-1.33,2.17,2,2,0,0,1-.42.05H8.3Z"
    />
    <path fill="none" d="M9.6,12.6,8.4,11.4" />
    <path fill="none" d="M9.6,12l1.2-1.2" />
    <path fill="none" d="M9.6,17.4V9.6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M14.4,7.8l1.8,1.8-1.2.6,2.4,2.4-1.8.6L18,15.6H12.6" />
    <line x1="13.8" y1="17.4" x2="13.8" y2="15.6" />
    <path d="M8.3,14.4a1.81,1.81,0,0,1-1.7-1.91c0-.1,0-.2.05-.31a1.82,1.82,0,0,1,.18-2.9A1.8,1.8,0,0,1,9.6,7.06a1.8,1.8,0,0,1,2.77,2.22,1.81,1.81,0,0,1,.55,2.49,1.79,1.79,0,0,1-.37.41,1.8,1.8,0,0,1-1.33,2.17,2,2,0,0,1-.42.05H8.3Z" />
    <path fill="none" d="M9.6,12.6,8.4,11.4" />
    <path fill="none" d="M9.6,12l1.2-1.2" />
    <path fill="none" d="M9.6,17.4V9.6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M14.4,7.8l1.8,1.8-1.2.6,2.4,2.4-1.8.6L18,15.6H12.6" />
    <line x1="13.8" y1="17.4" x2="13.8" y2="15.6" />
    <path
      fillOpacity=".2"
      d="M8.3,14.4a1.81,1.81,0,0,1-1.7-1.91c0-.1,0-.2.05-.31a1.82,1.82,0,0,1,.18-2.9A1.8,1.8,0,0,1,9.6,7.06a1.8,1.8,0,0,1,2.77,2.22,1.81,1.81,0,0,1,.55,2.49,1.79,1.79,0,0,1-.37.41,1.8,1.8,0,0,1-1.33,2.17,2,2,0,0,1-.42.05H8.3Z"
    />
    <path fill="none" d="M9.6,12.6,8.4,11.4" />
    <path fill="none" d="M9.6,12l1.2-1.2" />
    <path fill="none" d="M9.6,17.4V9.6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M14.4,7.8l1.8,1.8-1.2.6,2.4,2.4-1.8.6L18,15.6H12.6" />
    <line x1="13.8" y1="17.4" x2="13.8" y2="15.6" />
    <path
      fill={secondaryColor}
      d="M8.3,14.4a1.81,1.81,0,0,1-1.7-1.91c0-.1,0-.2.05-.31a1.82,1.82,0,0,1,.18-2.9A1.8,1.8,0,0,1,9.6,7.06a1.8,1.8,0,0,1,2.77,2.22,1.81,1.81,0,0,1,.55,2.49,1.79,1.79,0,0,1-.37.41,1.8,1.8,0,0,1-1.33,2.17,2,2,0,0,1-.42.05H8.3Z"
    />
    <path fill="none" d="M9.6,12.6,8.4,11.4" />
    <path fill="none" d="M9.6,12l1.2-1.2" />
    <path fill="none" d="M9.6,17.4V9.6" />
  </Fragment>
);

const Trees = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Trees;
