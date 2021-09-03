import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6,10.5v2.25a.76.76,0,0,0,.75.75h10.5a.76.76,0,0,0,.75-.75V10.5"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M6,10.5v2.25a.76.76,0,0,0,.75.75h10.5a.76.76,0,0,0,.75-.75V10.5"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6,10.5v2.25a.76.76,0,0,0,.75.75h10.5a.76.76,0,0,0,.75-.75V10.5"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M6,10.5v2.25a.76.76,0,0,0,.75.75h10.5a.76.76,0,0,0,.75-.75V10.5"
    />
  </Fragment>
);

const Space = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Space;
