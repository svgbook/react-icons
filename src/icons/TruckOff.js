import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10,15.33A1.34,1.34,0,1,1,8.67,14,1.33,1.33,0,0,1,10,15.33Z"
    />
    <path fill="none" d="M14.39,14.39a1.33,1.33,0,0,0,1.88,1.89" />
    <path
      fill="none"
      d="M12.67,8H16l2,3.33m-4,0h4v4m-4,0H12.67m0-5.33V7.34H10"
    />
    <path
      fill="none"
      d="M12.67,12.67v2.66H10a1.34,1.34,0,0,0-2.67,0H6V8a.66.66,0,0,1,.67-.66h.66Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M10,15.33A1.34,1.34,0,1,1,8.67,14,1.33,1.33,0,0,1,10,15.33Z"
    />
    <path fill="none" d="M14.39,14.39a1.33,1.33,0,0,0,1.88,1.89" />
    <path
      fill="none"
      d="M12.67,8H16l2,3.33m-4,0h4v4m-4,0H12.67m0-5.33V7.34H10"
    />
    <path d="M12.67,12.67v2.66H10a1.34,1.34,0,0,0-2.67,0H6V8a.66.66,0,0,1,.67-.66h.66Z" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10,15.33A1.34,1.34,0,1,1,8.67,14,1.33,1.33,0,0,1,10,15.33Z"
    />
    <path fill="none" d="M14.39,14.39a1.33,1.33,0,0,0,1.88,1.89" />
    <path
      fill="none"
      d="M12.67,8H16l2,3.33m-4,0h4v4m-4,0H12.67m0-5.33V7.34H10"
    />
    <path
      fillOpacity=".2"
      d="M12.67,12.67v2.66H10a1.34,1.34,0,0,0-2.67,0H6V8a.66.66,0,0,1,.67-.66h.66Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M10,15.33A1.34,1.34,0,1,1,8.67,14,1.33,1.33,0,0,1,10,15.33Z"
    />
    <path fill="none" d="M14.39,14.39a1.33,1.33,0,0,0,1.88,1.89" />
    <path
      fill="none"
      d="M12.67,8H16l2,3.33m-4,0h4v4m-4,0H12.67m0-5.33V7.34H10"
    />
    <path
      fill={secondaryColor}
      d="M12.67,12.67v2.66H10a1.34,1.34,0,0,0-2.67,0H6V8a.66.66,0,0,1,.67-.66h.66Z"
    />
    <line x1="6" y1="6" x2="18" y2="18" />
  </Fragment>
);

const TruckOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TruckOff;
