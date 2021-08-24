import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,7.5v6A1.5,1.5,0,0,1,16.5,15h-6A1.5,1.5,0,0,1,9,13.5v-6A1.5,1.5,0,0,1,10.5,6h6A1.5,1.5,0,0,1,18,7.5Z"
    />
    <path
      fill="none"
      d="M15,15v1.5A1.5,1.5,0,0,1,13.5,18h-6A1.5,1.5,0,0,1,6,16.5v-6A1.5,1.5,0,0,1,7.5,9H9v4.5A1.5,1.5,0,0,0,10.5,15Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,7.5v6A1.5,1.5,0,0,1,16.5,15h-6A1.5,1.5,0,0,1,9,13.5v-6A1.5,1.5,0,0,1,10.5,6h6A1.5,1.5,0,0,1,18,7.5Z" />
    <path
      fill="none"
      d="M15,15v1.5A1.5,1.5,0,0,1,13.5,18h-6A1.5,1.5,0,0,1,6,16.5v-6A1.5,1.5,0,0,1,7.5,9H9v4.5A1.5,1.5,0,0,0,10.5,15Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,7.5v6A1.5,1.5,0,0,1,16.5,15h-6A1.5,1.5,0,0,1,9,13.5v-6A1.5,1.5,0,0,1,10.5,6h6A1.5,1.5,0,0,1,18,7.5Z"
    />
    <path
      fill="none"
      d="M15,15v1.5A1.5,1.5,0,0,1,13.5,18h-6A1.5,1.5,0,0,1,6,16.5v-6A1.5,1.5,0,0,1,7.5,9H9v4.5A1.5,1.5,0,0,0,10.5,15Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,7.5v6A1.5,1.5,0,0,1,16.5,15h-6A1.5,1.5,0,0,1,9,13.5v-6A1.5,1.5,0,0,1,10.5,6h6A1.5,1.5,0,0,1,18,7.5Z"
    />
    <path
      fill="none"
      d="M15,15v1.5A1.5,1.5,0,0,1,13.5,18h-6A1.5,1.5,0,0,1,6,16.5v-6A1.5,1.5,0,0,1,7.5,9H9v4.5A1.5,1.5,0,0,0,10.5,15Z"
    />
  </Fragment>
);

const LayersSubtract = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default LayersSubtract;
