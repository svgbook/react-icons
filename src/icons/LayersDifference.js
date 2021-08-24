import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15,15v1.5A1.5,1.5,0,0,1,13.5,18h-6A1.5,1.5,0,0,1,6,16.5v-6A1.5,1.5,0,0,1,7.5,9H9V7.5A1.5,1.5,0,0,1,10.5,6h6A1.5,1.5,0,0,1,18,7.5v6A1.5,1.5,0,0,1,16.5,15H15"
    />
    <polyline fill="none" points="10.5 9 9 9 9 10.5" />
    <polyline fill="none" points="9 13.5 9 15 10.5 15" />
    <polyline fill="none" points="13.5 9 15 9 15 10.5" />
    <polyline fill="none" points="15 13.5 15 15 13.5 15" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M15,15v1.5A1.5,1.5,0,0,1,13.5,18h-6A1.5,1.5,0,0,1,6,16.5v-6A1.5,1.5,0,0,1,7.5,9H9V7.5A1.5,1.5,0,0,1,10.5,6h6A1.5,1.5,0,0,1,18,7.5v6A1.5,1.5,0,0,1,16.5,15H15"
    />
    <polyline fill="none" points="10.5 9 9 9 9 10.5" />
    <polyline fill="none" points="9 13.5 9 15 10.5 15" />
    <polyline fill="none" points="13.5 9 15 9 15 10.5" />
    <polyline fill="none" points="15 13.5 15 15 13.5 15" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15,15v1.5A1.5,1.5,0,0,1,13.5,18h-6A1.5,1.5,0,0,1,6,16.5v-6A1.5,1.5,0,0,1,7.5,9H9V7.5A1.5,1.5,0,0,1,10.5,6h6A1.5,1.5,0,0,1,18,7.5v6A1.5,1.5,0,0,1,16.5,15H15"
    />
    <polyline fill="none" strokeOpacity=".2" points="10.5 9 9 9 9 10.5" />
    <polyline fill="none" strokeOpacity=".2" points="9 13.5 9 15 10.5 15" />
    <polyline fill="none" strokeOpacity=".2" points="13.5 9 15 9 15 10.5" />
    <polyline fill="none" strokeOpacity=".2" points="15 13.5 15 15 13.5 15" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M15,15v1.5A1.5,1.5,0,0,1,13.5,18h-6A1.5,1.5,0,0,1,6,16.5v-6A1.5,1.5,0,0,1,7.5,9H9V7.5A1.5,1.5,0,0,1,10.5,6h6A1.5,1.5,0,0,1,18,7.5v6A1.5,1.5,0,0,1,16.5,15H15"
    />
    <polyline fill="none" stroke={secondaryColor} points="10.5 9 9 9 9 10.5" />
    <polyline
      fill={secondaryColor}
      stroke={secondaryColor}
      points="9 13.5 9 15 10.5 15"
    />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="13.5 9 15 9 15 10.5"
    />
    <polyline
      fill="none"
      stroke={secondaryColor}
      points="15 13.5 15 15 13.5 15"
    />
  </Fragment>
);

const LayersDifference = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default LayersDifference;
