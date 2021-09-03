import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M17.73,12.21,11.52,6H8.76A2.77,2.77,0,0,0,6,8.76v2.76l6.21,6.22a1,1,0,0,0,1.38,0l4.14-4.14A1,1,0,0,0,17.73,12.21Zm-7.59-.69a1.38,1.38,0,1,1,1.38-1.38A1.38,1.38,0,0,1,10.14,11.52Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M17.73,12.21,11.52,6H8.76A2.77,2.77,0,0,0,6,8.76v2.76l6.21,6.22a1,1,0,0,0,1.38,0l4.14-4.14A1,1,0,0,0,17.73,12.21Zm-7.59-.69a1.38,1.38,0,1,1,1.38-1.38A1.38,1.38,0,0,1,10.14,11.52Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M17.73,12.21,11.52,6H8.76A2.77,2.77,0,0,0,6,8.76v2.76l6.21,6.22a1,1,0,0,0,1.38,0l4.14-4.14A1,1,0,0,0,17.73,12.21Zm-7.59-.69a1.38,1.38,0,1,1,1.38-1.38A1.38,1.38,0,0,1,10.14,11.52Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M17.73,12.21,11.52,6H8.76A2.77,2.77,0,0,0,6,8.76v2.76l6.21,6.22a1,1,0,0,0,1.38,0l4.14-4.14A1,1,0,0,0,17.73,12.21Zm-7.59-.69a1.38,1.38,0,1,1,1.38-1.38A1.38,1.38,0,0,1,10.14,11.52Z"
    />
  </Fragment>
);

const Tag = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Tag;
