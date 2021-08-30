import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="6" y1="9" x2="18" y2="9" />
    <line x1="6" y1="15" x2="18" y2="15" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="6" y1="9" x2="18" y2="9" />
    <line x1="6" y1="15" x2="18" y2="15" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="6" y1="9" x2="18" y2="9" />
    <line strokeOpacity=".2" x1="6" y1="15" x2="18" y2="15" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="6" y1="9" x2="18" y2="9" />
    <line stroke={secondaryColor} x1="6" y1="15" x2="18" y2="15" />
  </Fragment>
);

const Menu2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Menu2;
