import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6,18V8.25A2.25,2.25,0,0,1,8.25,6h7.5A2.25,2.25,0,0,1,18,8.25v4.5A2.25,2.25,0,0,1,15.75,15H9L6,18"
    />
    <line x1="9" y1="9" x2="15" y2="9" />
    <line x1="9" y1="12" x2="13.5" y2="12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M15.75,5.5H8.25A2.75,2.75,0,0,0,5.5,8.25V18a.5.5,0,0,0,.31.46.43.43,0,0,0,.19,0,.47.47,0,0,0,.35-.15L9.21,15.5h6.54a2.75,2.75,0,0,0,2.75-2.75V8.25A2.75,2.75,0,0,0,15.75,5.5Zm-2.25,7H9a.5.5,0,0,1,0-1h4.5a.5.5,0,0,1,0,1Zm1.5-3H9a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M6,18V8.25A2.25,2.25,0,0,1,8.25,6h7.5A2.25,2.25,0,0,1,18,8.25v4.5A2.25,2.25,0,0,1,15.75,15H9L6,18"
    />
    <line x1="9" y1="9" x2="15" y2="9" />
    <line x1="9" y1="12" x2="13.5" y2="12" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M6,18V8.25A2.25,2.25,0,0,1,8.25,6h7.5A2.25,2.25,0,0,1,18,8.25v4.5A2.25,2.25,0,0,1,15.75,15H9L6,18"
    />
    <line x1="9" y1="9" x2="15" y2="9" />
    <line x1="9" y1="12" x2="13.5" y2="12" />
  </Fragment>
);

const Message2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Message2;
