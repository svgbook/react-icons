import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <line x1="9.88" y1="6" x2="9.88" y2="8.82" />
    <line x1="14.12" y1="6" x2="14.12" y2="8.82" />
    <path fill="none" d="M12,15.18v1.41A1.41,1.41,0,0,0,13.41,18h2.12" />
    <path
      fill="none"
      d="M8.47,8.82h7.06v4.24a2.12,2.12,0,0,1-2.12,2.12H10.59a2.12,2.12,0,0,1-2.12-2.12V8.82"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <line x1="9.88" y1="6" x2="9.88" y2="8.82" />
    <line x1="14.12" y1="6" x2="14.12" y2="8.82" />
    <path fill="none" d="M12,15.18v1.41A1.41,1.41,0,0,0,13.41,18h2.12" />
    <path d="M8.47,8.82h7.06v4.24a2.12,2.12,0,0,1-2.12,2.12H10.59a2.12,2.12,0,0,1-2.12-2.12V8.82" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <line x1="9.88" y1="6" x2="9.88" y2="8.82" />
    <line x1="14.12" y1="6" x2="14.12" y2="8.82" />
    <path fill="none" d="M12,15.18v1.41A1.41,1.41,0,0,0,13.41,18h2.12" />
    <path
      fillOpacity=".2"
      d="M8.47,8.82h7.06v4.24a2.12,2.12,0,0,1-2.12,2.12H10.59a2.12,2.12,0,0,1-2.12-2.12V8.82"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <line x1="9.88" y1="6" x2="9.88" y2="8.82" />
    <line x1="14.12" y1="6" x2="14.12" y2="8.82" />
    <path fill="none" d="M12,15.18v1.41A1.41,1.41,0,0,0,13.41,18h2.12" />
    <path
      fill={secondaryColor}
      d="M8.47,8.82h7.06v4.24a2.12,2.12,0,0,1-2.12,2.12H10.59a2.12,2.12,0,0,1-2.12-2.12V8.82"
    />
  </Fragment>
);

const Plug = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Plug;
