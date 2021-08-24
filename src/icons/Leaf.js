import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M9.89,15.88c4.39,0,7.41-2.32,7.76-8.47V6H14.82C8.47,6,6.36,8.82,6.35,12.35a4.56,4.56,0,0,0,1.41,3.53H9.89Z"
    />
    <path fill="none" d="M7.06,18a8.08,8.08,0,0,1,5-7.06" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M9.89,15.88c4.39,0,7.41-2.32,7.76-8.47V6H14.82C8.47,6,6.36,8.82,6.35,12.35a4.56,4.56,0,0,0,1.41,3.53H9.89Z" />
    <path fill="none" d="M7.06,18a8.08,8.08,0,0,1,5-7.06" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M9.89,15.88c4.39,0,7.41-2.32,7.76-8.47V6H14.82C8.47,6,6.36,8.82,6.35,12.35a4.56,4.56,0,0,0,1.41,3.53H9.89Z"
    />
    <path fill="none" d="M7.06,18a8.08,8.08,0,0,1,5-7.06" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M9.89,15.88c4.39,0,7.41-2.32,7.76-8.47V6H14.82C8.47,6,6.36,8.82,6.35,12.35a4.56,4.56,0,0,0,1.41,3.53H9.89Z"
    />
    <path fill="none" d="M7.06,18a8.08,8.08,0,0,1,5-7.06" />
  </Fragment>
);

const Leaf = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Leaf;
