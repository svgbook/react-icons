import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M6,7.67H9.33L14,14.33h4" />
    <path fill="none" d="M16,16.33l2-2-2-2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path fill="none" d="M6,7.67H9.33L14,14.33h4" />
    <path fill="none" d="M16,16.33l2-2-2-2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fill="none" strokeOpacity=".2" d="M6,7.67H9.33L14,14.33h4" />
    <path fill="none" d="M16,16.33l2-2-2-2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill="none" d="M6,7.67H9.33L14,14.33h4" />
    <path fill="none" stroke={secondaryColor} d="M16,16.33l2-2-2-2" />
  </Fragment>
);

const TrendingDown2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TrendingDown2;
