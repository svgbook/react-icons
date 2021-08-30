import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6.67,9h8a.67.67,0,0,1,.66.67v3a1.66,1.66,0,0,1-1.66,1.66h-.34A1.33,1.33,0,0,1,12,13a1.34,1.34,0,0,0-2.67,0A1.32,1.32,0,0,1,8,14.33H7.67A1.66,1.66,0,0,1,6,12.67v-3A.67.67,0,0,1,6.67,9Z"
    />
    <path
      fill="none"
      d="M10.67,15.67A1.33,1.33,0,0,0,12,17h2.33A3.67,3.67,0,0,0,18,13.33V7"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M6.67,9h8a.67.67,0,0,1,.66.67v3a1.66,1.66,0,0,1-1.66,1.66h-.34A1.33,1.33,0,0,1,12,13a1.34,1.34,0,0,0-2.67,0A1.32,1.32,0,0,1,8,14.33H7.67A1.66,1.66,0,0,1,6,12.67v-3A.67.67,0,0,1,6.67,9Z" />
    <path
      fill="none"
      d="M10.67,15.67A1.33,1.33,0,0,0,12,17h2.33A3.67,3.67,0,0,0,18,13.33V7"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M6.67,9h8a.67.67,0,0,1,.66.67v3a1.66,1.66,0,0,1-1.66,1.66h-.34A1.33,1.33,0,0,1,12,13a1.34,1.34,0,0,0-2.67,0A1.32,1.32,0,0,1,8,14.33H7.67A1.66,1.66,0,0,1,6,12.67v-3A.67.67,0,0,1,6.67,9Z"
    />
    <path
      fill="none"
      d="M10.67,15.67A1.33,1.33,0,0,0,12,17h2.33A3.67,3.67,0,0,0,18,13.33V7"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M6.67,9h8a.67.67,0,0,1,.66.67v3a1.66,1.66,0,0,1-1.66,1.66h-.34A1.33,1.33,0,0,1,12,13a1.34,1.34,0,0,0-2.67,0A1.32,1.32,0,0,1,8,14.33H7.67A1.66,1.66,0,0,1,6,12.67v-3A.67.67,0,0,1,6.67,9Z"
    />
    <path
      fill="none"
      d="M10.67,15.67A1.33,1.33,0,0,0,12,17h2.33A3.67,3.67,0,0,0,18,13.33V7"
    />
  </Fragment>
);

const ScubaMask = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ScubaMask;
