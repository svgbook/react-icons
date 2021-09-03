import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M14.33,18V14.67a1.16,1.16,0,0,1,1.34-1.34c.92,0,1.33.42,1.33,1.34V18m0-2H14.33"
    />
    <path fill="none" d="M17,10.67H14.33L17,6H14.33" />
    <path fill="none" d="M7,14l2,2,2-2" />
    <path d="M9,8v8" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M14.33,18V14.67a1.16,1.16,0,0,1,1.34-1.34c.92,0,1.33.42,1.33,1.34V18m0-2H14.33"
    />
    <path fill="none" d="M17,10.67H14.33L17,6H14.33" />
    <path fill="none" d="M7,14l2,2,2-2" />
    <path d="M9,8v8" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M14.33,18V14.67a1.16,1.16,0,0,1,1.34-1.34c.92,0,1.33.42,1.33,1.34V18m0-2H14.33"
    />
    <path fill="none" strokeOpacity=".2" d="M17,10.67H14.33L17,6H14.33" />
    <path fill="none" d="M7,14l2,2,2-2" />
    <path d="M9,8v8" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M14.33,18V14.67a1.16,1.16,0,0,1,1.34-1.34c.92,0,1.33.42,1.33,1.34V18m0-2H14.33"
    />
    <path fill="none" d="M17,10.67H14.33L17,6H14.33" />
    <path fill="none" stroke={secondaryColor} d="M7,14l2,2,2-2" />
    <path stroke={secondaryColor} d="M9,8v8" />
  </Fragment>
);

const SortDescending3 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default SortDescending3;
