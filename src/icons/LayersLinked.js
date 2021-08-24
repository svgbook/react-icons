import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M17.25,9.2A1.51,1.51,0,0,1,18,10.5v6A1.5,1.5,0,0,1,16.5,18h-6A1.5,1.5,0,0,1,9,16.5v-6A1.5,1.5,0,0,1,10.5,9h2.25"
    />
    <path
      fill="none"
      d="M6.75,14.8A1.51,1.51,0,0,1,6,13.5v-6A1.5,1.5,0,0,1,7.5,6h6A1.5,1.5,0,0,1,15,7.5v6A1.5,1.5,0,0,1,13.5,15H11.25"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M17.25,9.2A1.51,1.51,0,0,1,18,10.5v6A1.5,1.5,0,0,1,16.5,18h-6A1.5,1.5,0,0,1,9,16.5v-6A1.5,1.5,0,0,1,10.5,9h2.25"
    />
    <path
      fill="none"
      d="M6.75,14.8A1.51,1.51,0,0,1,6,13.5v-6A1.5,1.5,0,0,1,7.5,6h6A1.5,1.5,0,0,1,15,7.5v6A1.5,1.5,0,0,1,13.5,15H11.25"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M17.25,9.2A1.51,1.51,0,0,1,18,10.5v6A1.5,1.5,0,0,1,16.5,18h-6A1.5,1.5,0,0,1,9,16.5v-6A1.5,1.5,0,0,1,10.5,9h2.25"
    />
    <path
      fill="none"
      d="M6.75,14.8A1.51,1.51,0,0,1,6,13.5v-6A1.5,1.5,0,0,1,7.5,6h6A1.5,1.5,0,0,1,15,7.5v6A1.5,1.5,0,0,1,13.5,15H11.25"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M17.25,9.2A1.51,1.51,0,0,1,18,10.5v6A1.5,1.5,0,0,1,16.5,18h-6A1.5,1.5,0,0,1,9,16.5v-6A1.5,1.5,0,0,1,10.5,9h2.25"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M6.75,14.8A1.51,1.51,0,0,1,6,13.5v-6A1.5,1.5,0,0,1,7.5,6h6A1.5,1.5,0,0,1,15,7.5v6A1.5,1.5,0,0,1,13.5,15H11.25"
    />
  </Fragment>
);

const LayersLinked = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default LayersLinked;
