import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,8v4.67l-2-2a1.34,1.34,0,0,0-2,0L12.67,12l-2-2a1.34,1.34,0,0,0-2,0L6,12.67V8A2,2,0,0,1,8,6h8A2,2,0,0,1,18,8Z"
    />
    <line x1="14" y1="8" x2="14.01" y2="8" />
    <path
      fill="none"
      d="M18,12.67v.66a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2v-.66L8.67,10a1.34,1.34,0,0,1,2,0l2,2L14,10.67a1.34,1.34,0,0,1,2,0Z"
    />
    <line x1="13.33" y1="12.67" x2="12.67" y2="12" />
    <line x1="9.34" y1="18" x2="9.34" y2="18" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
    <line x1="14.67" y1="18" x2="14.68" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M18,8v4.67l-2-2a1.34,1.34,0,0,0-2,0L12.67,12l-2-2a1.34,1.34,0,0,0-2,0L6,12.67V8A2,2,0,0,1,8,6h8A2,2,0,0,1,18,8Z"
    />
    <line x1="14" y1="8" x2="14.01" y2="8" />
    <path d="M18,12.67v.66a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2v-.66L8.67,10a1.34,1.34,0,0,1,2,0l2,2L14,10.67a1.34,1.34,0,0,1,2,0Z" />
    <line x1="13.33" y1="12.67" x2="12.67" y2="12" />
    <line x1="9.34" y1="18" x2="9.34" y2="18" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
    <line x1="14.67" y1="18" x2="14.68" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,8v4.67l-2-2a1.34,1.34,0,0,0-2,0L12.67,12l-2-2a1.34,1.34,0,0,0-2,0L6,12.67V8A2,2,0,0,1,8,6h8A2,2,0,0,1,18,8Z"
    />
    <line x1="14" y1="8" x2="14.01" y2="8" />
    <path
      fillOpacity=".2"
      d="M18,12.67v.66a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2v-.66L8.67,10a1.34,1.34,0,0,1,2,0l2,2L14,10.67a1.34,1.34,0,0,1,2,0Z"
    />
    <line x1="13.33" y1="12.67" x2="12.67" y2="12" />
    <line x1="9.34" y1="18" x2="9.34" y2="18" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
    <line x1="14.67" y1="18" x2="14.68" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M18,8v4.67l-2-2a1.34,1.34,0,0,0-2,0L12.67,12l-2-2a1.34,1.34,0,0,0-2,0L6,12.67V8A2,2,0,0,1,8,6h8A2,2,0,0,1,18,8Z"
    />
    <line x1="14" y1="8" x2="14.01" y2="8" />
    <path
      fill={secondaryColor}
      d="M18,12.67v.66a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2v-.66L8.67,10a1.34,1.34,0,0,1,2,0l2,2L14,10.67a1.34,1.34,0,0,1,2,0Z"
    />
    <line x1="13.33" y1="12.67" x2="12.67" y2="12" />
    <line x1="9.34" y1="18" x2="9.34" y2="18" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
    <line x1="14.67" y1="18" x2="14.68" y2="18" />
  </Fragment>
);

const Slideshow = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Slideshow;
