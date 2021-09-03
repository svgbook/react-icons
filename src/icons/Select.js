import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6" width="12" height="12" rx="1.5" />
    <path fill="none" d="M9.75,11.25,12,13.5l2.25-2.25" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.5,5.5h-9a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2v-9A2,2,0,0,0,16.5,5.5Zm-1.9,6.1-2.25,2.25a.48.48,0,0,1-.7,0L9.4,11.6a.49.49,0,0,1,.7-.7L12,12.79l1.9-1.89a.49.49,0,0,1,.7.7Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6" width="12" height="12" rx="1.5" />
    <path fill="none" d="M9.75,11.25,12,13.5l2.25-2.25" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x="6" y="6" width="12" height="12" rx="1.5" />
    <path fill="none" d="M9.75,11.25,12,13.5l2.25-2.25" />
  </Fragment>
);

const Select = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Select;
