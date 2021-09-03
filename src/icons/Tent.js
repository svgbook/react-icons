import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M11.33,13.33l2.67,4h4L12,6.67,6,17.33h4l2.67-4" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M11.33,13.33l2.67,4h4L12,6.67,6,17.33h4l2.67-4" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M11.33,13.33l2.67,4h4L12,6.67,6,17.33h4l2.67-4" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M11.33,13.33l2.67,4h4L12,6.67,6,17.33h4l2.67-4"
    />
  </Fragment>
);

const Tent = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Tent;
