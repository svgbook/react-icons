import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M8,13.33v-4a2,2,0,1,1,4,0v5.34a2,2,0,0,0,4,0v-4" />
    <path
      fill="none"
      d="M16,6h0a1.33,1.33,0,0,1,1.33,1.33v2A1.33,1.33,0,0,1,16,10.67h0a1.33,1.33,0,0,1-1.33-1.34v-2A1.33,1.33,0,0,1,16,6Z"
    />
    <path
      fill="none"
      d="M8,13.33H8a1.33,1.33,0,0,1,1.33,1.34v2A1.33,1.33,0,0,1,8,18H8a1.33,1.33,0,0,1-1.33-1.33v-2A1.33,1.33,0,0,1,8,13.33Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M8,13.33v-4a2,2,0,1,1,4,0v5.34a2,2,0,0,0,4,0v-4" />
    <path d="M16,6h0a1.33,1.33,0,0,1,1.33,1.33v2A1.33,1.33,0,0,1,16,10.67h0a1.33,1.33,0,0,1-1.33-1.34v-2A1.33,1.33,0,0,1,16,6Z" />
    <path d="M8,13.33H8a1.33,1.33,0,0,1,1.33,1.34v2A1.33,1.33,0,0,1,8,18H8a1.33,1.33,0,0,1-1.33-1.33v-2A1.33,1.33,0,0,1,8,13.33Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M8,13.33v-4a2,2,0,1,1,4,0v5.34a2,2,0,0,0,4,0v-4"
    />
    <path
      fill="none"
      d="M16,6h0a1.33,1.33,0,0,1,1.33,1.33v2A1.33,1.33,0,0,1,16,10.67h0a1.33,1.33,0,0,1-1.33-1.34v-2A1.33,1.33,0,0,1,16,6Z"
    />
    <path
      fill="none"
      d="M8,13.33H8a1.33,1.33,0,0,1,1.33,1.34v2A1.33,1.33,0,0,1,8,18H8a1.33,1.33,0,0,1-1.33-1.33v-2A1.33,1.33,0,0,1,8,13.33Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M8,13.33v-4a2,2,0,1,1,4,0v5.34a2,2,0,0,0,4,0v-4"
    />
    <path
      fill="none"
      d="M16,6h0a1.33,1.33,0,0,1,1.33,1.33v2A1.33,1.33,0,0,1,16,10.67h0a1.33,1.33,0,0,1-1.33-1.34v-2A1.33,1.33,0,0,1,16,6Z"
    />
    <path
      fill="none"
      d="M8,13.33H8a1.33,1.33,0,0,1,1.33,1.34v2A1.33,1.33,0,0,1,8,18H8a1.33,1.33,0,0,1-1.33-1.33v-2A1.33,1.33,0,0,1,8,13.33Z"
    />
  </Fragment>
);

const JumpRope = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default JumpRope;
