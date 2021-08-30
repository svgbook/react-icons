import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <rect fill="none" x="6" y="6" width="12" height="12" rx="1.5" />
    <circle cx="12" cy="14" r="0.38" />
    <line x1="9.51" y1="11.23" x2="9.51" y2="10.01" />
    <line x1="14.49" y1="11.23" x2="14.49" y2="10.01" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.5,5.5h-9a2,2,0,0,0-2,2v9a2,2,0,0,0,2,2h9a2,2,0,0,0,2-2v-9A2,2,0,0,0,16.5,5.5ZM10,11.23a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V10a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5Zm2,3.65a.88.88,0,1,1,.87-.88A.89.89,0,0,1,12,14.88Zm3-3.65a.5.5,0,0,1-.5.5.5.5,0,0,1-.5-.5V10a.5.5,0,0,1,.5-.5.5.5,0,0,1,.5.5Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <rect fillOpacity=".2" x="6" y="6" width="12" height="12" rx="1.5" />
    <circle cx="12" cy="14" r="0.38" />
    <line x1="9.51" y1="11.23" x2="9.51" y2="10.01" />
    <line x1="14.49" y1="11.23" x2="14.49" y2="10.01" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <rect fill={secondaryColor} x="6" y="6" width="12" height="12" rx="1.5" />
    <circle cx="12" cy="14" r="0.38" />
    <line x1="9.51" y1="11.23" x2="9.51" y2="10.01" />
    <line x1="14.49" y1="11.23" x2="14.49" y2="10.01" />
  </Fragment>
);

const Outlet = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Outlet;
