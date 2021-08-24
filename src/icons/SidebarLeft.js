import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9.75,6V18H7.5A1.5,1.5,0,0,1,6,16.5v-9A1.5,1.5,0,0,1,7.5,6Z"
    />
    <path
      fill="none"
      d="M18,7.5v9A1.5,1.5,0,0,1,16.5,18H9.75V6H16.5A1.5,1.5,0,0,1,18,7.5Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M9.75,6V18H7.5A1.5,1.5,0,0,1,6,16.5v-9A1.5,1.5,0,0,1,7.5,6Z" />
    <path
      fill="none"
      d="M18,7.5v9A1.5,1.5,0,0,1,16.5,18H9.75V6H16.5A1.5,1.5,0,0,1,18,7.5Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M9.75,6V18H7.5A1.5,1.5,0,0,1,6,16.5v-9A1.5,1.5,0,0,1,7.5,6Z"
    />
    <path
      fill="none"
      d="M18,7.5v9A1.5,1.5,0,0,1,16.5,18H9.75V6H16.5A1.5,1.5,0,0,1,18,7.5Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M9.75,6V18H7.5A1.5,1.5,0,0,1,6,16.5v-9A1.5,1.5,0,0,1,7.5,6Z"
    />
    <path
      fill="none"
      d="M18,7.5v9A1.5,1.5,0,0,1,16.5,18H9.75V6H16.5A1.5,1.5,0,0,1,18,7.5Z"
    />
  </Fragment>
);

const SidebarLeft = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SidebarLeft;
