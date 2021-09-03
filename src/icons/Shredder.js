import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,14.25V18m3-3.75v1.5m-6-1.5V16.5" />
    <path
      fill="none"
      d="M15.75,10.5v-3A1.5,1.5,0,0,0,14.25,6H9.75a1.5,1.5,0,0,0-1.5,1.5v3Z"
    />
    <rect fill="none" x="6" y="10.5" width="12" height="3.75" rx="0.75" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M12,14.25V18m3-3.75v1.5m-6-1.5V16.5" />
    <path
      fill="none"
      d="M15.75,10.5v-3A1.5,1.5,0,0,0,14.25,6H9.75a1.5,1.5,0,0,0-1.5,1.5v3Z"
    />
    <rect x="6" y="10.5" width="12" height="3.75" rx="0.75" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,14.25V18m3-3.75v1.5m-6-1.5V16.5" />
    <path
      fill="none"
      d="M15.75,10.5v-3A1.5,1.5,0,0,0,14.25,6H9.75a1.5,1.5,0,0,0-1.5,1.5v3Z"
    />
    <rect fillOpacity=".2" x="6" y="10.5" width="12" height="3.75" rx="0.75" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M12,14.25V18m3-3.75v1.5m-6-1.5V16.5" />
    <path
      fill="none"
      d="M15.75,10.5v-3A1.5,1.5,0,0,0,14.25,6H9.75a1.5,1.5,0,0,0-1.5,1.5v3Z"
    />
    <rect
      fill={secondaryColor}
      x="6"
      y="10.5"
      width="12"
      height="3.75"
      rx="0.75"
    />
  </Fragment>
);

const Shredder = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Shredder;
