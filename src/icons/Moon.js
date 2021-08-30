import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M12.23,6h.26a5,5,0,0,0,5.28,8.29A6,6,0,1,1,12.23,6Z" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M12.23,6h.26a5,5,0,0,0,5.28,8.29A6,6,0,1,1,12.23,6Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12.23,6h.26a5,5,0,0,0,5.28,8.29A6,6,0,1,1,12.23,6Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12.23,6h.26a5,5,0,0,0,5.28,8.29A6,6,0,1,1,12.23,6Z"
    />
  </Fragment>
);

const Moon = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Moon;
