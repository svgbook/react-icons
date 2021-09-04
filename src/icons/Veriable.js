import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.27,6.59c-1.69,3.38-1.69,6.76,0,10.82M16.73,6.59c1.69,3.38,1.69,6.76,0,10.82"
    />
    <path fill="none" d="M9.3,14.7c1,0,2-1.35,2.7-2.36S13.69,10,14.7,10" />
    <path
      fill="none"
      d="M10,10h.68c.67,0,.67.68,1.36,2.39s.67,2.34,1.34,2.34H14"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M7.27,6.59c-1.69,3.38-1.69,6.76,0,10.82M16.73,6.59c1.69,3.38,1.69,6.76,0,10.82"
    />
    <path fill="none" d="M9.3,14.7c1,0,2-1.35,2.7-2.36S13.69,10,14.7,10" />
    <path
      fill="none"
      d="M10,10h.68c.67,0,.67.68,1.36,2.39s.67,2.34,1.34,2.34H14"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M7.27,6.59c-1.69,3.38-1.69,6.76,0,10.82M16.73,6.59c1.69,3.38,1.69,6.76,0,10.82"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M9.3,14.7c1,0,2-1.35,2.7-2.36S13.69,10,14.7,10"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M10,10h.68c.67,0,.67.68,1.36,2.39s.67,2.34,1.34,2.34H14"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M7.27,6.59c-1.69,3.38-1.69,6.76,0,10.82M16.73,6.59c1.69,3.38,1.69,6.76,0,10.82"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M9.3,14.7c1,0,2-1.35,2.7-2.36S13.69,10,14.7,10"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M10,10h.68c.67,0,.67.68,1.36,2.39s.67,2.34,1.34,2.34H14"
    />
  </Fragment>
);

const Veriable = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Veriable;
