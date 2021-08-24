import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M8,12H8a1.33,1.33,0,0,1,1.33,1.33v1.34A1.33,1.33,0,0,1,8,16H8a1.33,1.33,0,0,1-1.33-1.33V13.33A1.33,1.33,0,0,1,8,12Z"
    />
    <path
      fill="none"
      d="M16,12h0a1.33,1.33,0,0,1,1.33,1.33v1.34A1.33,1.33,0,0,1,16,16h0a1.33,1.33,0,0,1-1.33-1.33V13.33A1.33,1.33,0,0,1,16,12Z"
    />
    <path fill="none" d="M6.67,13.33v-2a5.33,5.33,0,1,1,10.66,0v2" />
    <path fill="none" d="M16,16c0,1.1-1.79,2-4,2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M8,12H8a1.33,1.33,0,0,1,1.33,1.33v1.34A1.33,1.33,0,0,1,8,16H8a1.33,1.33,0,0,1-1.33-1.33V13.33A1.33,1.33,0,0,1,8,12Z" />
    <path d="M16,12h0a1.33,1.33,0,0,1,1.33,1.33v1.34A1.33,1.33,0,0,1,16,16h0a1.33,1.33,0,0,1-1.33-1.33V13.33A1.33,1.33,0,0,1,16,12Z" />
    <path fill="none" d="M6.67,13.33v-2a5.33,5.33,0,1,1,10.66,0v2" />
    <path fill="none" d="M16,16c0,1.1-1.79,2-4,2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M8,12H8a1.33,1.33,0,0,1,1.33,1.33v1.34A1.33,1.33,0,0,1,8,16H8a1.33,1.33,0,0,1-1.33-1.33V13.33A1.33,1.33,0,0,1,8,12Z"
    />
    <path
      fillOpacity=".2"
      d="M16,12h0a1.33,1.33,0,0,1,1.33,1.33v1.34A1.33,1.33,0,0,1,16,16h0a1.33,1.33,0,0,1-1.33-1.33V13.33A1.33,1.33,0,0,1,16,12Z"
    />
    <path fill="none" d="M6.67,13.33v-2a5.33,5.33,0,1,1,10.66,0v2" />
    <path fill="none" d="M16,16c0,1.1-1.79,2-4,2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M8,12H8a1.33,1.33,0,0,1,1.33,1.33v1.34A1.33,1.33,0,0,1,8,16H8a1.33,1.33,0,0,1-1.33-1.33V13.33A1.33,1.33,0,0,1,8,12Z"
    />
    <path fill="none" stroke={secondaryColor} d="M16,16c0,1.1-1.79,2-4,2" />
    <path
      fill={secondaryColor}
      d="M16,12h0a1.33,1.33,0,0,1,1.33,1.33v1.34A1.33,1.33,0,0,1,16,16h0a1.33,1.33,0,0,1-1.33-1.33V13.33A1.33,1.33,0,0,1,16,12Z"
    />
    <path fill="none" d="M6.67,13.33v-2a5.33,5.33,0,1,1,10.66,0v2" />
  </Fragment>
);

const Headset = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Headset;
