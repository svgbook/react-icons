import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M18,11.22a6,6,0,1,0-.37,3" />
    <polyline fill="none" points="17.98 17.97 17.98 14.22 14.22 14.22" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M18,11.22a6,6,0,1,0-.37,3" />
    <polyline fill="none" points="17.98 17.97 17.98 14.22 14.22 14.22" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" strokeOpacity=".2" d="M18,11.22a6,6,0,1,0-.37,3" />
    <polyline fill="none" points="17.98 17.97 17.98 14.22 14.22 14.22" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M18,11.22a6,6,0,1,0-.37,3" />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="17.98 17.97 17.98 14.22 14.22 14.22"
    />
  </Fragment>
);

const Rotate = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Rotate;
