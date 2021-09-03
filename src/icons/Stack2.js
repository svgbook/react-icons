import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M12,7.5l-6,3,6,3,6-3-6-3" />
    <path fill="none" d="M6,13.5l6,3,6-3" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M12,7.5l-6,3,6,3,6-3-6-3" />
    <path fill="none" d="M6,13.5l6,3,6-3" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M12,7.5l-6,3,6,3,6-3-6-3" />
    <path fill="none" d="M6,13.5l6,3,6-3" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M12,7.5l-6,3,6,3,6-3-6-3" />
    <path fill="none" d="M6,13.5l6,3,6-3" />
  </Fragment>
);

const Stack2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Stack2;
