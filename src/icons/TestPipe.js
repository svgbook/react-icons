import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M14.66,10.67,8.42,16.92a1.42,1.42,0,0,1-2-2l4.24-4.24Z"
    />
    <polygon
      fill="none"
      points="16.67 8.67 14.66 10.68 10.66 10.68 14.66 6.67 16.67 8.67"
    />
    <path fill="none" d="M16.66,14l1,1.07a1.34,1.34,0,1,1-2,0l1-1.07" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M14.66,10.67,8.42,16.92a1.42,1.42,0,0,1-2-2l4.24-4.24Z" />
    <polygon
      fill="none"
      points="16.67 8.67 14.66 10.68 10.66 10.68 14.66 6.67 16.67 8.67"
    />
    <path d="M16.66,14l1,1.07a1.34,1.34,0,1,1-2,0l1-1.07" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M14.66,10.67,8.42,16.92a1.42,1.42,0,0,1-2-2l4.24-4.24Z"
    />
    <polygon
      fill="none"
      points="16.67 8.67 14.66 10.68 10.66 10.68 14.66 6.67 16.67 8.67"
    />
    <path fillOpacity=".2" d="M16.66,14l1,1.07a1.34,1.34,0,1,1-2,0l1-1.07" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M14.66,10.67,8.42,16.92a1.42,1.42,0,0,1-2-2l4.24-4.24Z"
    />
    <polygon
      fill="none"
      points="16.67 8.67 14.66 10.68 10.66 10.68 14.66 6.67 16.67 8.67"
    />
    <path
      fill={secondaryColor}
      d="M16.66,14l1,1.07a1.34,1.34,0,1,1-2,0l1-1.07"
    />
  </Fragment>
);

const TestPipe = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TestPipe;
