import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12,17.62,9.75,15.37H8.25A2.24,2.24,0,0,1,6,13.13V8.63A2.25,2.25,0,0,1,8.25,6.38h7.5A2.25,2.25,0,0,1,18,8.63v4.5a2.24,2.24,0,0,1-2.25,2.24h-1.5L12,17.62"
    />
    <line x1="9" y1="9.38" x2="15" y2="9.38" />
    <line x1="9" y1="12.38" x2="13.5" y2="12.38" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M15.75,5.88H8.25A2.75,2.75,0,0,0,5.5,8.62v4.5a2.76,2.76,0,0,0,2.75,2.76H9.54L11.65,18a.51.51,0,0,0,.7,0l2.11-2.1h1.29a2.76,2.76,0,0,0,2.75-2.76V8.62A2.75,2.75,0,0,0,15.75,5.88Zm-2.25,7H9a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h4.5a.5.5,0,0,1,.5.5A.5.5,0,0,1,13.5,12.88Zm1.5-3H9a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h6a.5.5,0,0,1,.5.5A.5.5,0,0,1,15,9.88Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12,17.62,9.75,15.37H8.25A2.24,2.24,0,0,1,6,13.13V8.63A2.25,2.25,0,0,1,8.25,6.38h7.5A2.25,2.25,0,0,1,18,8.63v4.5a2.24,2.24,0,0,1-2.25,2.24h-1.5L12,17.62"
    />
    <line x1="9" y1="9.38" x2="15" y2="9.38" />
    <line x1="9" y1="12.38" x2="13.5" y2="12.38" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,17.62,9.75,15.37H8.25A2.24,2.24,0,0,1,6,13.13V8.63A2.25,2.25,0,0,1,8.25,6.38h7.5A2.25,2.25,0,0,1,18,8.63v4.5a2.24,2.24,0,0,1-2.25,2.24h-1.5L12,17.62"
    />
    <line x1="9" y1="9.38" x2="15" y2="9.38" />
    <line x1="9" y1="12.38" x2="13.5" y2="12.38" />
  </Fragment>
);

const Message3 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Message3;
