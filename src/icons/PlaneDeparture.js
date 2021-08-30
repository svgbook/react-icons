import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.68,10.53l2.84-.76A1.18,1.18,0,1,1,17.13,12L8.62,14.32,6,11.37l1.7-.46,1.44.83,1.7-.45L8.65,7.62l1.7-.46Z"
    />
    <line x1="6.84" y1="16.84" x2="17.42" y2="16.84" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M13.68,10.53l2.84-.76A1.18,1.18,0,1,1,17.13,12L8.62,14.32,6,11.37l1.7-.46,1.44.83,1.7-.45L8.65,7.62l1.7-.46Z" />
    <line x1="6.84" y1="16.84" x2="17.42" y2="16.84" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M13.68,10.53l2.84-.76A1.18,1.18,0,1,1,17.13,12L8.62,14.32,6,11.37l1.7-.46,1.44.83,1.7-.45L8.65,7.62l1.7-.46Z"
    />
    <line x1="6.84" y1="16.84" x2="17.42" y2="16.84" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M13.68,10.53l2.84-.76A1.18,1.18,0,1,1,17.13,12L8.62,14.32,6,11.37l1.7-.46,1.44.83,1.7-.45L8.65,7.62l1.7-.46Z"
    />
    <line x1="6.84" y1="16.84" x2="17.42" y2="16.84" />
  </Fragment>
);

const PlaneDeparture = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default PlaneDeparture;
