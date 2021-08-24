import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <circle fill="none" cx="9" cy="14.63" r="3" />
    <line x1="11.14" y1="12.49" x2="17.25" y2="6.38" />
    <line x1="16.5" y1="7.13" x2="18" y2="8.63" />
    <line x1="14.25" y1="9.38" x2="15.75" y2="10.88" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <circle cx="9" cy="14.63" r="3" />
    <line x1="11.14" y1="12.49" x2="17.25" y2="6.38" />
    <line x1="16.5" y1="7.13" x2="18" y2="8.63" />
    <line x1="14.25" y1="9.38" x2="15.75" y2="10.88" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <circle fillOpacity=".2" cx="9" cy="14.63" r="3" />
    <line x1="11.14" y1="12.49" x2="17.25" y2="6.38" />
    <line x1="16.5" y1="7.13" x2="18" y2="8.63" />
    <line x1="14.25" y1="9.38" x2="15.75" y2="10.88" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="11.14" y1="12.49" x2="17.25" y2="6.38" />
    <line x1="16.5" y1="7.13" x2="18" y2="8.63" />
    <line x1="14.25" y1="9.38" x2="15.75" y2="10.88" />
    <circle fill="none" stroke={secondaryColor} cx="9" cy="14.63" r="3" />
  </Fragment>
);

const Key = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Key;
