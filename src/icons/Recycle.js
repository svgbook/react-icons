import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12,15.33l-1.34,1.34L12,18m-1.34-1.33h6a1.33,1.33,0,0,0,1.26-1.41,1.27,1.27,0,0,0-.09-.43l-.37-.67"
    />
    <path
      fill="none"
      d="M9.69,11.32,9.2,9.5,7.38,10M9.2,9.5l-3,5.2a1.35,1.35,0,0,0,.58,1.8,1.33,1.33,0,0,0,.43.13l.76,0"
    />
    <path
      fill="none"
      d="M14.32,11.32l1.82.49L16.63,10m-.49,1.82-3-5.2a1.34,1.34,0,0,0-1.85-.4,1.93,1.93,0,0,0-.33.31l-.39.65"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M12,15.33l-1.34,1.34L12,18m-1.34-1.33h6a1.33,1.33,0,0,0,1.26-1.41,1.27,1.27,0,0,0-.09-.43l-.37-.67"
    />
    <path
      fill="none"
      d="M9.69,11.32,9.2,9.5,7.38,10M9.2,9.5l-3,5.2a1.35,1.35,0,0,0,.58,1.8,1.33,1.33,0,0,0,.43.13l.76,0"
    />
    <path
      fill="none"
      d="M14.32,11.32l1.82.49L16.63,10m-.49,1.82-3-5.2a1.34,1.34,0,0,0-1.85-.4,1.93,1.93,0,0,0-.33.31l-.39.65"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M10.67,16.67h6a1.33,1.33,0,0,0,1.26-1.41,1.27,1.27,0,0,0-.09-.43l-.37-.67"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M9.2,9.5l-3,5.2a1.35,1.35,0,0,0,.58,1.8,1.33,1.33,0,0,0,.43.13l.76,0"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M16.14,11.81l-3-5.2a1.34,1.34,0,0,0-1.85-.4,1.93,1.93,0,0,0-.33.31l-.39.65"
    />
    <polyline fill="none" points="12.01 15.33 10.67 16.66 12.01 18" />
    <polyline fill="none" points="9.69 11.32 9.21 9.5 7.38 9.99" />
    <polyline fill="none" points="14.32 11.32 16.14 11.81 16.63 9.99" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M12,15.33l-1.34,1.34L12,18m-1.34-1.33h6a1.33,1.33,0,0,0,1.26-1.41,1.27,1.27,0,0,0-.09-.43l-.37-.67"
    />
    <path
      fill="none"
      d="M9.69,11.32,9.2,9.5,7.38,10M9.2,9.5l-3,5.2a1.35,1.35,0,0,0,.58,1.8,1.33,1.33,0,0,0,.43.13l.76,0"
    />
    <path
      fill="none"
      d="M14.32,11.32l1.82.49L16.63,10m-.49,1.82-3-5.2a1.34,1.34,0,0,0-1.85-.4,1.93,1.93,0,0,0-.33.31l-.39.65"
    />
  </Fragment>
);

const Recycle = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Recycle;
