import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="8.57" y1="6" x2="8.57" y2="18" />
    <line x1="12" y1="6" x2="12" y2="18" />
    <line x1="15.43" y1="6" x2="15.43" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="8.57" y1="6" x2="8.57" y2="18" />
    <line x1="12" y1="6" x2="12" y2="18" />
    <line x1="15.43" y1="6" x2="15.43" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="8.57" y1="6" x2="8.57" y2="18" />
    <line strokeOpacity=".2" x1="12" y1="6" x2="12" y2="18" />
    <line x1="15.43" y1="6" x2="15.43" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="8.57" y1="6" x2="8.57" y2="18" />
    <line stroke={secondaryColor} x1="12" y1="6" x2="12" y2="18" />
    <line x1="15.43" y1="6" x2="15.43" y2="18" />
  </Fragment>
);

const TallyMark3 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TallyMark3;
