import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9.1,6.44l.23-.24A.63.63,0,0,1,9.8,6h4.4a.63.63,0,0,1,.47.2L17.8,9.33a.63.63,0,0,1,.2.47v4.4a.63.63,0,0,1-.2.47l-.23.23"
    />
    <path fill="none" d="M6,6,18,18" />
    <path
      fill="none"
      d="M16.24,16.23,14.67,17.8a.63.63,0,0,1-.47.2H9.8a.63.63,0,0,1-.47-.2L6.2,14.67A.63.63,0,0,1,6,14.2V9.8a.63.63,0,0,1,.2-.47L7.77,7.77Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M9.1,6.44l.23-.24A.63.63,0,0,1,9.8,6h4.4a.63.63,0,0,1,.47.2L17.8,9.33a.63.63,0,0,1,.2.47v4.4a.63.63,0,0,1-.2.47l-.23.23"
    />
    <path d="M16.24,16.23,14.67,17.8a.63.63,0,0,1-.47.2H9.8a.63.63,0,0,1-.47-.2L6.2,14.67A.63.63,0,0,1,6,14.2V9.8a.63.63,0,0,1,.2-.47L7.77,7.77Z" />
    <path fill="none" d="M6,6,18,18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9.1,6.44l.23-.24A.63.63,0,0,1,9.8,6h4.4a.63.63,0,0,1,.47.2L17.8,9.33a.63.63,0,0,1,.2.47v4.4a.63.63,0,0,1-.2.47l-.23.23"
    />
    <path
      fillOpacity=".2"
      d="M16.24,16.23,14.67,17.8a.63.63,0,0,1-.47.2H9.8a.63.63,0,0,1-.47-.2L6.2,14.67A.63.63,0,0,1,6,14.2V9.8a.63.63,0,0,1,.2-.47L7.77,7.77Z"
    />
    <path fill="none" d="M6,6,18,18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M9.1,6.44l.23-.24A.63.63,0,0,1,9.8,6h4.4a.63.63,0,0,1,.47.2L17.8,9.33a.63.63,0,0,1,.2.47v4.4a.63.63,0,0,1-.2.47l-.23.23"
    />
    <path
      fill={secondaryColor}
      d="M16.24,16.23,14.67,17.8a.63.63,0,0,1-.47.2H9.8a.63.63,0,0,1-.47-.2L6.2,14.67A.63.63,0,0,1,6,14.2V9.8a.63.63,0,0,1,.2-.47L7.77,7.77Z"
    />
    <path fill="none" d="M6,6,18,18" />
  </Fragment>
);

const OctagonOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default OctagonOff;
