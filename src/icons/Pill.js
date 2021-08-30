import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M17,11.66,11.66,17A3.32,3.32,0,0,1,7,12.34L12.34,7A3.32,3.32,0,0,1,17,11.66"
    />
    <line x1="14.35" y1="14.35" x2="9.65" y2="9.65" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M14.35,15.05,12,17.38A3.82,3.82,0,0,1,6.62,12L9,9.65l.71.71,4,4Z"
    />
    <path
      stroke="none"
      d="M17.38,12l-2.33,2.33L9.65,9,12,6.62a3.82,3.82,0,0,1,5.4,5.4Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M17,11.66,11.66,17A3.32,3.32,0,0,1,7,12.34L12.34,7A3.32,3.32,0,0,1,17,11.66"
    />
    <line x1="14.35" y1="14.35" x2="9.65" y2="9.65" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M17,11.66,11.66,17A3.32,3.32,0,0,1,7,12.34L12.34,7A3.32,3.32,0,0,1,17,11.66"
    />
    <line x1="14.35" y1="14.35" x2="9.65" y2="9.65" />
  </Fragment>
);

const Pill = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Pill;
