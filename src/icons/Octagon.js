import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9.8,6h4.4a.63.63,0,0,1,.47.2L17.8,9.33a.63.63,0,0,1,.2.47v4.4a.63.63,0,0,1-.2.47L14.67,17.8a.63.63,0,0,1-.47.2H9.8a.63.63,0,0,1-.47-.2L6.2,14.67A.63.63,0,0,1,6,14.2V9.8a.63.63,0,0,1,.2-.47L9.33,6.2A.63.63,0,0,1,9.8,6Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M9.8,6h4.4a.63.63,0,0,1,.47.2L17.8,9.33a.63.63,0,0,1,.2.47v4.4a.63.63,0,0,1-.2.47L14.67,17.8a.63.63,0,0,1-.47.2H9.8a.63.63,0,0,1-.47-.2L6.2,14.67A.63.63,0,0,1,6,14.2V9.8a.63.63,0,0,1,.2-.47L9.33,6.2A.63.63,0,0,1,9.8,6Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M9.8,6h4.4a.63.63,0,0,1,.47.2L17.8,9.33a.63.63,0,0,1,.2.47v4.4a.63.63,0,0,1-.2.47L14.67,17.8a.63.63,0,0,1-.47.2H9.8a.63.63,0,0,1-.47-.2L6.2,14.67A.63.63,0,0,1,6,14.2V9.8a.63.63,0,0,1,.2-.47L9.33,6.2A.63.63,0,0,1,9.8,6Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M9.8,6h4.4a.63.63,0,0,1,.47.2L17.8,9.33a.63.63,0,0,1,.2.47v4.4a.63.63,0,0,1-.2.47L14.67,17.8a.63.63,0,0,1-.47.2H9.8a.63.63,0,0,1-.47-.2L6.2,14.67A.63.63,0,0,1,6,14.2V9.8a.63.63,0,0,1,.2-.47L9.33,6.2A.63.63,0,0,1,9.8,6Z"
    />
  </Fragment>
);

const Octagon = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Octagon;
