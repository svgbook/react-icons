import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12,6a4.73,4.73,0,0,0-4.67,4.67v6.66A.67.67,0,0,0,8,18h8a.67.67,0,0,0,.67-.67V10.67A4.73,4.73,0,0,0,12,6Z"
    />
    <line x1="7.33" y1="12.67" x2="16.67" y2="12.67" />
    <line x1="12" y1="6" x2="12" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M17.17,13.17v4.16A1.17,1.17,0,0,1,16,18.5H12.5V13.17Z"
    />
    <path
      stroke="none"
      d="M11.5,13.17V18.5H8a1.17,1.17,0,0,1-1.17-1.17V13.17Z"
    />
    <path
      stroke="none"
      d="M11.5,5.53v6.64H6.83v-1.5A5.25,5.25,0,0,1,11.5,5.53Z"
    />
    <path
      stroke="none"
      d="M17.17,10.67v1.5H12.5V5.53A5.25,5.25,0,0,1,17.17,10.67Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12,6a4.73,4.73,0,0,0-4.67,4.67v6.66A.67.67,0,0,0,8,18h8a.67.67,0,0,0,.67-.67V10.67A4.73,4.73,0,0,0,12,6Z"
    />
    <line x1="7.33" y1="12.67" x2="16.67" y2="12.67" />
    <line x1="12" y1="6" x2="12" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,6a4.73,4.73,0,0,0-4.67,4.67v6.66A.67.67,0,0,0,8,18h8a.67.67,0,0,0,.67-.67V10.67A4.73,4.73,0,0,0,12,6Z"
    />
    <line x1="7.33" y1="12.67" x2="16.67" y2="12.67" />
    <line x1="12" y1="6" x2="12" y2="18" />
  </Fragment>
);

const Window = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Window;
