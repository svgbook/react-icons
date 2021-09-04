import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M15.33,6,18,8.67" />
    <path fill="none" d="M16.67,7.33l-3,3" />
    <path fill="none" d="M11.67,8.33l4,4" />
    <path fill="none" d="M15,11.67,10.67,16H8V13.33L12.33,9Z" />
    <path fill="none" d="M9,12.33l1,1" />
    <path fill="none" d="M11,10.33l1,1" />
    <path fill="none" d="M6,18l2-2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M15.33,6,18,8.67" />
    <path fill="none" d="M16.67,7.33l-3,3" />
    <path fill="none" d="M11.67,8.33l4,4" />
    <path d="M15,11.67,10.67,16H8V13.33L12.33,9Z" />
    <path fill="none" d="M9,12.33l1,1" />
    <path fill="none" d="M11,10.33l1,1" />
    <path fill="none" d="M6,18l2-2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" d="M15.33,6,18,8.67" />
    <path fill="none" d="M16.67,7.33l-3,3" />
    <path fill="none" d="M11.67,8.33l4,4" />
    <path fillOpacity=".2" d="M15,11.67,10.67,16H8V13.33L12.33,9Z" />
    <path fill="none" d="M9,12.33l1,1" />
    <path fill="none" d="M11,10.33l1,1" />
    <path fill="none" d="M6,18l2-2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M15.33,6,18,8.67" />
    <path fill="none" d="M16.67,7.33l-3,3" />
    <path fill="none" d="M11.67,8.33l4,4" />
    <path fill={secondaryColor} d="M15,11.67,10.67,16H8V13.33L12.33,9Z" />
    <path fill="none" d="M9,12.33l1,1" />
    <path fill="none" d="M11,10.33l1,1" />
    <path fill="none" d="M6,18l2-2" />
  </Fragment>
);

const Injection = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Injection;
