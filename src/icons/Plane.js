import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M14.4,10.8h2.4a1.2,1.2,0,0,1,0,2.4H14.4L12,17.4H10.2l1.2-4.2H9L7.8,14.4H6L7.2,12,6,9.6H7.8L9,10.8h2.4L10.2,6.6H12Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M14.4,10.8h2.4a1.2,1.2,0,0,1,0,2.4H14.4L12,17.4H10.2l1.2-4.2H9L7.8,14.4H6L7.2,12,6,9.6H7.8L9,10.8h2.4L10.2,6.6H12Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M14.4,10.8h2.4a1.2,1.2,0,0,1,0,2.4H14.4L12,17.4H10.2l1.2-4.2H9L7.8,14.4H6L7.2,12,6,9.6H7.8L9,10.8h2.4L10.2,6.6H12Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M14.4,10.8h2.4a1.2,1.2,0,0,1,0,2.4H14.4L12,17.4H10.2l1.2-4.2H9L7.8,14.4H6L7.2,12,6,9.6H7.8L9,10.8h2.4L10.2,6.6H12Z"
    />
  </Fragment>
);

const Plane = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Plane;
