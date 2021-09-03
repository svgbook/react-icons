import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="8" y1="7.33" x2="8" y2="16.67" />
    <line x1="10.67" y1="7.33" x2="10.67" y2="16.67" />
    <line x1="13.33" y1="7.33" x2="13.33" y2="16.67" />
    <line x1="16" y1="7.33" x2="16" y2="16.67" />
    <line x1="6" y1="15.33" x2="18" y2="8.67" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="8" y1="7.33" x2="8" y2="16.67" />
    <line x1="10.67" y1="7.33" x2="10.67" y2="16.67" />
    <line x1="13.33" y1="7.33" x2="13.33" y2="16.67" />
    <line x1="16" y1="7.33" x2="16" y2="16.67" />
    <line x1="6" y1="15.33" x2="18" y2="8.67" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line strokeOpacity=".2" x1="8" y1="7.33" x2="8" y2="16.67" />
    <line strokeOpacity=".2" x1="10.67" y1="7.33" x2="10.67" y2="16.67" />
    <line strokeOpacity=".2" x1="13.33" y1="7.33" x2="13.33" y2="16.67" />
    <line strokeOpacity=".2" x1="16" y1="7.33" x2="16" y2="16.67" />
    <line x1="6" y1="15.33" x2="18" y2="8.67" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="8" y1="7.33" x2="8" y2="16.67" />
    <line x1="10.67" y1="7.33" x2="10.67" y2="16.67" />
    <line x1="13.33" y1="7.33" x2="13.33" y2="16.67" />
    <line x1="16" y1="7.33" x2="16" y2="16.67" />
    <line stroke={secondaryColor} x1="6" y1="15.33" x2="18" y2="8.67" />
  </Fragment>
);

const TallyMark5 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TallyMark5;
