import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,8,7.33,6.67v2a4.67,4.67,0,0,0,9.34,0v-2L18,8" />
    <path fill="none" d="M12,18V6L10.67,7.33m2.66,0L12,6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,8,7.33,6.67v2a4.67,4.67,0,0,0,9.34,0v-2L18,8" />
    <path fill="none" d="M12,18V6L10.67,7.33m2.66,0L12,6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,8,7.33,6.67v2a4.67,4.67,0,0,0,9.34,0v-2L18,8"
    />
    <path fill="none" d="M12,18V6L10.67,7.33m2.66,0L12,6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,8,7.33,6.67v2a4.67,4.67,0,0,0,9.34,0v-2L18,8" />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M12,18V6L10.67,7.33m2.66,0L12,6"
    />
  </Fragment>
);

const Trident = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Trident;
