import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="7.5" x2="18" y2="7.5" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="6" y1="16.5" x2="18" y2="16.5" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="7.5" x2="18" y2="7.5" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="6" y1="16.5" x2="18" y2="16.5" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="6" y1="7.5" x2="18" y2="7.5" />
    <line strokeOpacity=".2" x1="6" y1="12" x2="18" y2="12" />
    <line x1="6" y1="16.5" x2="18" y2="16.5" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="6" y1="7.5" x2="18" y2="7.5" />
    <line x1="6" stroke={secondaryColor} y1="12" x2="18" y2="12" />
    <line x1="6" y1="16.5" x2="18" y2="16.5" />
  </Fragment>
);

const Menu = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Menu;
