import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="12" cy="9.53" r="3.53" />
    <line x1="12" y1="13.06" x2="12" y2="18" />
    <line x1="9.88" y1="15.88" x2="14.12" y2="15.88" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="12" cy="9.53" r="3.53" />
    <line x1="12" y1="13.06" x2="12" y2="18" />
    <line x1="9.88" y1="15.88" x2="14.12" y2="15.88" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="12" cy="9.53" r="3.53" />
    <line x1="12" y1="13.06" x2="12" y2="18" />
    <line x1="9.88" y1="15.88" x2="14.12" y2="15.88" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <circle fill={secondaryColor} cx="12" cy="9.53" r="3.53" />
    <line x1="12" y1="13.06" x2="12" y2="18" />
    <line x1="9.88" y1="15.88" x2="14.12" y2="15.88" />
  </Fragment>
);

const Venus = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Venus;
