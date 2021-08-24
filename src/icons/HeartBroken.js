import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.34,12.67,12,15.34v2L7,12.38a3.33,3.33,0,1,1,4.65-4.77A3.46,3.46,0,0,1,12,8l-1.34,2.66Z"
    />
    <path
      fill="none"
      d="M17.33,12a1.94,1.94,0,0,1-.33.37l-5,4.95v-2l1.33-2.67-2.67-2L12,8a3.33,3.33,0,0,1,5.32,4Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M13.34,12.67,12,15.34v2L7,12.38a3.33,3.33,0,1,1,4.65-4.77A3.46,3.46,0,0,1,12,8l-1.34,2.66Z"
    />
    <path d="M17.33,12a1.94,1.94,0,0,1-.33.37l-5,4.95v-2l1.33-2.67-2.67-2L12,8a3.33,3.33,0,0,1,5.32,4Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M13.34,12.67,12,15.34v2L7,12.38a3.33,3.33,0,1,1,4.65-4.77A3.46,3.46,0,0,1,12,8l-1.34,2.66Z"
    />
    <path
      fillOpacity=".2"
      d="M17.33,12a1.94,1.94,0,0,1-.33.37l-5,4.95v-2l1.33-2.67-2.67-2L12,8a3.33,3.33,0,0,1,5.32,4Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M13.34,12.67,12,15.34v2L7,12.38a3.33,3.33,0,1,1,4.65-4.77A3.46,3.46,0,0,1,12,8l-1.34,2.66Z"
    />
    <path
      fill={secondaryColor}
      d="M17.33,12a1.94,1.94,0,0,1-.33.37l-5,4.95v-2l1.33-2.67-2.67-2L12,8a3.33,3.33,0,0,1,5.32,4Z"
    />
  </Fragment>
);

const HeartBroken = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default HeartBroken;
