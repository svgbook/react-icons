import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.33,9.33V8A1.32,1.32,0,0,0,12,6.67H7.33A1.33,1.33,0,0,0,6,8v8a1.33,1.33,0,0,0,1.33,1.33H12A1.32,1.32,0,0,0,13.33,16V14.67"
    />
    <path fill="none" d="M8.67,12H18l-2-2m0,4,2-2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M13.33,9.33V8A1.32,1.32,0,0,0,12,6.67H7.33A1.33,1.33,0,0,0,6,8v8a1.33,1.33,0,0,0,1.33,1.33H12A1.32,1.32,0,0,0,13.33,16V14.67"
    />
    <path fill="none" d="M8.67,12H18l-2-2m0,4,2-2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.33,9.33V8A1.32,1.32,0,0,0,12,6.67H7.33A1.33,1.33,0,0,0,6,8v8a1.33,1.33,0,0,0,1.33,1.33H12A1.32,1.32,0,0,0,13.33,16V14.67"
    />
    <path fill="none" strokeOpacity=".2" d="M8.67,12H18l-2-2m0,4,2-2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M13.33,9.33V8A1.32,1.32,0,0,0,12,6.67H7.33A1.33,1.33,0,0,0,6,8v8a1.33,1.33,0,0,0,1.33,1.33H12A1.32,1.32,0,0,0,13.33,16V14.67"
    />
    <path fill="none" stroke={secondaryColor} d="M8.67,12H18l-2-2m0,4,2-2" />
  </Fragment>
);

const Logout = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Logout;
