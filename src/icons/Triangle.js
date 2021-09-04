import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.34,17.35h9.34A1.34,1.34,0,0,0,18,16a1.19,1.19,0,0,0-.1-.49L13.17,7.34a1.33,1.33,0,0,0-1.81-.52,1.39,1.39,0,0,0-.53.52L6.1,15.51a1.34,1.34,0,0,0,1.17,1.84"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M7.34,17.35h9.34A1.34,1.34,0,0,0,18,16a1.19,1.19,0,0,0-.1-.49L13.17,7.34a1.33,1.33,0,0,0-1.81-.52,1.39,1.39,0,0,0-.53.52L6.1,15.51a1.34,1.34,0,0,0,1.17,1.84" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M7.34,17.35h9.34A1.34,1.34,0,0,0,18,16a1.19,1.19,0,0,0-.1-.49L13.17,7.34a1.33,1.33,0,0,0-1.81-.52,1.39,1.39,0,0,0-.53.52L6.1,15.51a1.34,1.34,0,0,0,1.17,1.84"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M7.34,17.35h9.34A1.34,1.34,0,0,0,18,16a1.19,1.19,0,0,0-.1-.49L13.17,7.34a1.33,1.33,0,0,0-1.81-.52,1.39,1.39,0,0,0-.53.52L6.1,15.51a1.34,1.34,0,0,0,1.17,1.84"
    />
  </Fragment>
);

const Triangle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Triangle;
