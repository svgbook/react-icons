import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,18H9V15h3V12h3V9h3" />
    <path fill="none" d="M11.25,6,6,11.25v-3m3,3H6" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,18H9V15h3V12h3V9h3" />
    <path fill="none" d="M11.25,6,6,11.25v-3m3,3H6" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" strokeOpacity=".2" d="M6,18H9V15h3V12h3V9h3" />
    <path fill="none" d="M11.25,6,6,11.25v-3m3,3H6" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" stroke={secondaryColor} d="M6,18H9V15h3V12h3V9h3" />
    <path fill="none" d="M11.25,6,6,11.25v-3m3,3H6" />
  </Fragment>
);

const StairsDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default StairsDown;
