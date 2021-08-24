import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M16.68,8.56a1.34,1.34,0,0,1,.67,1.17V14.1a1.33,1.33,0,0,1-.69,1.17l-4,2.56a1.31,1.31,0,0,1-1.3,0l-4-2.56a1.33,1.33,0,0,1-.69-1.17V9.73a1.33,1.33,0,0,1,.69-1.17l4-2.39a1.39,1.39,0,0,1,1.34,0l4,2.39Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M16.68,8.56a1.34,1.34,0,0,1,.67,1.17V14.1a1.33,1.33,0,0,1-.69,1.17l-4,2.56a1.31,1.31,0,0,1-1.3,0l-4-2.56a1.33,1.33,0,0,1-.69-1.17V9.73a1.33,1.33,0,0,1,.69-1.17l4-2.39a1.39,1.39,0,0,1,1.34,0l4,2.39Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M16.68,8.56a1.34,1.34,0,0,1,.67,1.17V14.1a1.33,1.33,0,0,1-.69,1.17l-4,2.56a1.31,1.31,0,0,1-1.3,0l-4-2.56a1.33,1.33,0,0,1-.69-1.17V9.73a1.33,1.33,0,0,1,.69-1.17l4-2.39a1.39,1.39,0,0,1,1.34,0l4,2.39Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M16.68,8.56a1.34,1.34,0,0,1,.67,1.17V14.1a1.33,1.33,0,0,1-.69,1.17l-4,2.56a1.31,1.31,0,0,1-1.3,0l-4-2.56a1.33,1.33,0,0,1-.69-1.17V9.73a1.33,1.33,0,0,1,.69-1.17l4-2.39a1.39,1.39,0,0,1,1.34,0l4,2.39Z"
    />
  </Fragment>
);

const Hexagon = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Hexagon;
