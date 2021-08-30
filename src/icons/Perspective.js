import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.52,6,16.7,7.32a.76.76,0,0,1,.65.76v7.85a.76.76,0,0,1-.65.75L7.52,18a.75.75,0,0,1-.86-.65.34.34,0,0,1,0-.1V6.76A.76.76,0,0,1,7.41,6Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M7.52,6,16.7,7.32a.76.76,0,0,1,.65.76v7.85a.76.76,0,0,1-.65.75L7.52,18a.75.75,0,0,1-.86-.65.34.34,0,0,1,0-.1V6.76A.76.76,0,0,1,7.41,6Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M7.52,6,16.7,7.32a.76.76,0,0,1,.65.76v7.85a.76.76,0,0,1-.65.75L7.52,18a.75.75,0,0,1-.86-.65.34.34,0,0,1,0-.1V6.76A.76.76,0,0,1,7.41,6Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M7.52,6,16.7,7.32a.76.76,0,0,1,.65.76v7.85a.76.76,0,0,1-.65.75L7.52,18a.75.75,0,0,1-.86-.65.34.34,0,0,1,0-.1V6.76A.76.76,0,0,1,7.41,6Z"
    />
  </Fragment>
);

const Perspective = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Perspective;
