import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12,15.76l-3.7,2L9,13.58,6,10.65l4.15-.6L12,6.29l1.85,3.76,4.15.6-3,2.93.7,4.13Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M12,15.76l-3.7,2L9,13.58,6,10.65l4.15-.6L12,6.29l1.85,3.76,4.15.6-3,2.93.7,4.13Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12,15.76l-3.7,2L9,13.58,6,10.65l4.15-.6L12,6.29l1.85,3.76,4.15.6-3,2.93.7,4.13Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,15.76l-3.7,2L9,13.58,6,10.65l4.15-.6L12,6.29l1.85,3.76,4.15.6-3,2.93.7,4.13Z"
    />
  </Fragment>
);

const Star = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Star;
