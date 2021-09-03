import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15.16,16,11.26,18,12,13.66,8.84,10.58,13.2,10l2-3.95Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M15.16,16,11.26,18,12,13.66,8.84,10.58,13.2,10l2-3.95Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M15.16,16,11.26,18,12,13.66,8.84,10.58,13.2,10l2-3.95Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M15.16,16,11.26,18,12,13.66,8.84,10.58,13.2,10l2-3.95Z"
    />
  </Fragment>
);

const StarHalf = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default StarHalf;
