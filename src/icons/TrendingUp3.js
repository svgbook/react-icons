import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6,16.33H7.6a3.32,3.32,0,0,0,2.73-1.42L13,11.09a3.36,3.36,0,0,1,2.74-1.42H18"
    />
    <path fill="none" d="M16,7.67l2,2-2,2" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M6,16.33H7.6a3.32,3.32,0,0,0,2.73-1.42L13,11.09a3.36,3.36,0,0,1,2.74-1.42H18"
    />
    <path fill="none" d="M16,7.67l2,2-2,2" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M6,16.33H7.6a3.32,3.32,0,0,0,2.73-1.42L13,11.09a3.36,3.36,0,0,1,2.74-1.42H18"
    />
    <path fill="none" d="M16,7.67l2,2-2,2" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M6,16.33H7.6a3.32,3.32,0,0,0,2.73-1.42L13,11.09a3.36,3.36,0,0,1,2.74-1.42H18"
    />
    <path fill="none" stroke={secondaryColor} d="M16,7.67l2,2-2,2" />
  </Fragment>
);

const TrendingUp3 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TrendingUp3;
