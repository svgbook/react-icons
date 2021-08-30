import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M8.84,7.26H7.58A1.26,1.26,0,0,0,6.32,8.53V16.1a1.26,1.26,0,0,0,1.26,1.27h3.6"
    />
    <path fill="none" d="M15.16,11.05V8.53a1.27,1.27,0,0,0-1.27-1.27H12.63" />
    <path
      fill="none"
      d="M10.1,6h1.27a1.26,1.26,0,0,1,1.26,1.26h0a1.26,1.26,0,0,1-1.26,1.27H10.1A1.27,1.27,0,0,1,8.84,7.26h0A1.27,1.27,0,0,1,10.1,6Z"
    />
    <path fill="none" d="M17.68,15.47A2.53,2.53,0,1,1,15.16,13v2.52Z" />
    <path fill="none" d="M17.68,15.47H15.16V13A2.52,2.52,0,0,1,17.68,15.47Z" />
    <path fill="none" d="M8.84,11.05h2.53" />
    <path fill="none" d="M8.84,13.58h1.9" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M8.84,7.26H7.58A1.26,1.26,0,0,0,6.32,8.53V16.1a1.26,1.26,0,0,0,1.26,1.27h3.6"
    />
    <path fill="none" d="M15.16,11.05V8.53a1.27,1.27,0,0,0-1.27-1.27H12.63" />
    <path
      fill="none"
      d="M10.1,6h1.27a1.26,1.26,0,0,1,1.26,1.26h0a1.26,1.26,0,0,1-1.26,1.27H10.1A1.27,1.27,0,0,1,8.84,7.26h0A1.27,1.27,0,0,1,10.1,6Z"
    />
    <path d="M17.68,15.47A2.53,2.53,0,1,1,15.16,13v2.52Z" />
    <path fill="none" d="M17.68,15.47H15.16V13A2.52,2.52,0,0,1,17.68,15.47Z" />
    <path fill="none" d="M8.84,11.05h2.53" />
    <path fill="none" d="M8.84,13.58h1.9" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M8.84,7.26H7.58A1.26,1.26,0,0,0,6.32,8.53V16.1a1.26,1.26,0,0,0,1.26,1.27h3.6"
    />
    <path fill="none" d="M15.16,11.05V8.53a1.27,1.27,0,0,0-1.27-1.27H12.63" />
    <path
      fill="none"
      d="M10.1,6h1.27a1.26,1.26,0,0,1,1.26,1.26h0a1.26,1.26,0,0,1-1.26,1.27H10.1A1.27,1.27,0,0,1,8.84,7.26h0A1.27,1.27,0,0,1,10.1,6Z"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M17.68,15.47A2.53,2.53,0,1,1,15.16,13v2.52Z"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M17.68,15.47H15.16V13A2.52,2.52,0,0,1,17.68,15.47Z"
    />
    <path fill="none" strokeOpacity=".2" d="M8.84,11.05h2.53" />
    <path fill="none" strokeOpacity=".2" d="M8.84,13.58h1.9" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M8.84,7.26H7.58A1.26,1.26,0,0,0,6.32,8.53V16.1a1.26,1.26,0,0,0,1.26,1.27h3.6"
    />
    <path fill="none" d="M15.16,11.05V8.53a1.27,1.27,0,0,0-1.27-1.27H12.63" />
    <path
      fill="none"
      d="M10.1,6h1.27a1.26,1.26,0,0,1,1.26,1.26h0a1.26,1.26,0,0,1-1.26,1.27H10.1A1.27,1.27,0,0,1,8.84,7.26h0A1.27,1.27,0,0,1,10.1,6Z"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M17.68,15.47A2.53,2.53,0,1,1,15.16,13v2.52Z"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M17.68,15.47H15.16V13A2.52,2.52,0,0,1,17.68,15.47Z"
    />
    <path fill="none" stroke={secondaryColor} d="M8.84,11.05h2.53" />
    <path fill="none" stroke={secondaryColor} d="M8.84,13.58h1.9" />
  </Fragment>
);

const Report = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Report;
