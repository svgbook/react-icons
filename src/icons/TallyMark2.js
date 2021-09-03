import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="10.29" y1="6" x2="10.29" y2="18" />
    <line x1="13.71" y1="6" x2="13.71" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="10.29" y1="6" x2="10.29" y2="18" />
    <line x1="13.71" y1="6" x2="13.71" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="10.29" y1="6" x2="10.29" y2="18" />
    <line strokeOpacity=".2" x1="13.71" y1="6" x2="13.71" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="10.29" y1="6" x2="10.29" y2="18" />
    <line stroke={secondaryColor} x1="13.71" y1="6" x2="13.71" y2="18" />
  </Fragment>
);

const TallyMark2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TallyMark2;