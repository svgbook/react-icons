import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M11,17.61,6.39,13a1.48,1.48,0,0,1,0-2L11,6.39a1.48,1.48,0,0,1,2,0L17.61,11a1.48,1.48,0,0,1,0,2L13,17.61A1.48,1.48,0,0,1,11,17.61Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M11,17.61,6.39,13a1.48,1.48,0,0,1,0-2L11,6.39a1.48,1.48,0,0,1,2,0L17.61,11a1.48,1.48,0,0,1,0,2L13,17.61A1.48,1.48,0,0,1,11,17.61Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M11,17.61,6.39,13a1.48,1.48,0,0,1,0-2L11,6.39a1.48,1.48,0,0,1,2,0L17.61,11a1.48,1.48,0,0,1,0,2L13,17.61A1.48,1.48,0,0,1,11,17.61Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M11,17.61,6.39,13a1.48,1.48,0,0,1,0-2L11,6.39a1.48,1.48,0,0,1,2,0L17.61,11a1.48,1.48,0,0,1,0,2L13,17.61A1.48,1.48,0,0,1,11,17.61Z"
    />
  </Fragment>
);

const SquareRotated = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SquareRotated;
