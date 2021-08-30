import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6,18V8.25A2.25,2.25,0,0,1,8.25,6h7.5A2.25,2.25,0,0,1,18,8.25v4.5A2.25,2.25,0,0,1,15.75,15H9L6,18"
    />
    <line x1="12" y1="8.25" x2="12" y2="10.5" />
    <line x1="12" y1="12.75" x2="12" y2="12.76" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M15.75,5.5H8.25A2.75,2.75,0,0,0,5.5,8.25V18a.5.5,0,0,0,.31.46.43.43,0,0,0,.19,0,.47.47,0,0,0,.35-.15L9.21,15.5h6.54a2.75,2.75,0,0,0,2.75-2.75V8.25A2.75,2.75,0,0,0,15.75,5.5ZM12.5,12.76a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Zm0-2.26a.5.5,0,0,1-1,0V8.25a.5.5,0,0,1,1,0Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M6,18V8.25A2.25,2.25,0,0,1,8.25,6h7.5A2.25,2.25,0,0,1,18,8.25v4.5A2.25,2.25,0,0,1,15.75,15H9L6,18"
    />
    <line x1="12" y1="8.25" x2="12" y2="10.5" />
    <line x1="12" y1="12.75" x2="12" y2="12.76" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M6,18V8.25A2.25,2.25,0,0,1,8.25,6h7.5A2.25,2.25,0,0,1,18,8.25v4.5A2.25,2.25,0,0,1,15.75,15H9L6,18"
    />
    <line x1="12" y1="8.25" x2="12" y2="10.5" />
    <line x1="12" y1="12.75" x2="12" y2="12.76" />
  </Fragment>
);

const MessageReport = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default MessageReport;
