import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6,16.83l10-10,2,2-4,4,1.33,1.34A9.32,9.32,0,0,1,6,16.83"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M6,16.83l10-10,2,2-4,4,1.33,1.34A9.32,9.32,0,0,1,6,16.83" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M6,16.83l10-10,2,2-4,4,1.33,1.34A9.32,9.32,0,0,1,6,16.83"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M6,16.83l10-10,2,2-4,4,1.33,1.34A9.32,9.32,0,0,1,6,16.83"
    />
  </Fragment>
);

const Knife = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Knife;
