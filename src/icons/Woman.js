import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="7.26" r="1.26" />
    <path
      fill="none"
      d="M10.74,18V15.47H9.47l1.27-3.79a.63.63,0,0,1,.63-.63h1.26a.63.63,0,0,1,.63.63l1.27,3.79H13.26V18"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="12" cy="7.26" r="1.26" />
    <path
      fill="none"
      d="M10.74,18V15.47H9.47l1.27-3.79a.63.63,0,0,1,.63-.63h1.26a.63.63,0,0,1,.63.63l1.27,3.79H13.26V18"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="7.26" r="1.26" />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M10.74,18V15.47H9.47l1.27-3.79a.63.63,0,0,1,.63-.63h1.26a.63.63,0,0,1,.63.63l1.27,3.79H13.26V18"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill="none" stroke={secondaryColor} cx="12" cy="7.26" r="1.26" />
    <path
      fill="none"
      d="M10.74,18V15.47H9.47l1.27-3.79a.63.63,0,0,1,.63-.63h1.26a.63.63,0,0,1,.63.63l1.27,3.79H13.26V18"
    />
  </Fragment>
);

const Woman = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Woman;
