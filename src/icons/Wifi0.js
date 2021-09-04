import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="11.99" y1="16.24" x2="12" y2="16.24" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="11.99" y1="16.24" x2="12" y2="16.24" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="11.99" y1="16.24" x2="12" y2="16.24" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="11.99" y1="16.24" x2="12" y2="16.24" />
  </Fragment>
);

const Wifi0 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Wifi0;
