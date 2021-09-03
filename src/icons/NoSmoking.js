import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M14.67,7.33v.34A1.33,1.33,0,0,0,16,9a1.33,1.33,0,0,1,1.33,1.33v.34"
    />
    <path
      fill="none"
      d="M15.33,12.67h2a.67.67,0,0,1,.67.66v1.34a.67.67,0,0,1-.2.47"
    />
    <path
      fill="none"
      d="M9.33,12.67v2.66H6.67A.67.67,0,0,1,6,14.67V13.33a.67.67,0,0,1,.67-.66Z"
    />
    <polygon
      fill="none"
      points="15.34 15.33 9.33 15.33 9.33 12.67 12.67 12.67 15.34 15.33"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M14.67,7.33v.34A1.33,1.33,0,0,0,16,9a1.33,1.33,0,0,1,1.33,1.33v.34"
    />
    <path
      fill="none"
      d="M15.33,12.67h2a.67.67,0,0,1,.67.66v1.34a.67.67,0,0,1-.2.47"
    />
    <path d="M9.33,12.67v2.66H6.67A.67.67,0,0,1,6,14.67V13.33a.67.67,0,0,1,.67-.66Z" />
    <polygon
      fill="none"
      points="15.34 15.33 9.33 15.33 9.33 12.67 12.67 12.67 15.34 15.33"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M14.67,7.33v.34A1.33,1.33,0,0,0,16,9a1.33,1.33,0,0,1,1.33,1.33v.34"
    />
    <path
      fill="none"
      d="M15.33,12.67h2a.67.67,0,0,1,.67.66v1.34a.67.67,0,0,1-.2.47"
    />
    <path d="M9.33,12.67v2.66H6.67A.67.67,0,0,1,6,14.67V13.33a.67.67,0,0,1,.67-.66Z" />
    <polygon
      fillOpacity=".2"
      points="15.34 15.33 9.33 15.33 9.33 12.67 12.67 12.67 15.34 15.33"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      stroke={secondaryColor}
      d="M14.67,7.33v.34A1.33,1.33,0,0,0,16,9a1.33,1.33,0,0,1,1.33,1.33v.34"
    />
    <path
      fill="none"
      d="M15.33,12.67h2a.67.67,0,0,1,.67.66v1.34a.67.67,0,0,1-.2.47"
    />
    <path d="M9.33,12.67v2.66H6.67A.67.67,0,0,1,6,14.67V13.33a.67.67,0,0,1,.67-.66Z" />
    <polygon
      fill={secondaryColor}
      points="15.34 15.33 9.33 15.33 9.33 12.67 12.67 12.67 15.34 15.33"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

const NoSmoking = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default NoSmoking;
