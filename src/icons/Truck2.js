import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10,15.33A1.34,1.34,0,1,1,8.67,14,1.34,1.34,0,0,1,10,15.33Z"
    />
    <path
      fill="none"
      d="M16.67,15.33A1.34,1.34,0,1,1,15.33,14,1.34,1.34,0,0,1,16.67,15.33Z"
    />
    <polygon fill="none" points="18 11.33 12.67 11.33 12.67 8 16 8 18 11.33" />
    <path fill="none" d="M18,11.33v4H16.67a1.34,1.34,0,0,0-2.67,0H12.67v-4Z" />
    <path
      fill="none"
      d="M12.67,7.33v8H10a1.34,1.34,0,0,0-2.67,0H6V8a.67.67,0,0,1,.67-.67Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M10,15.33A1.34,1.34,0,1,1,8.67,14,1.34,1.34,0,0,1,10,15.33Z"
    />
    <path
      fill="none"
      d="M16.67,15.33A1.34,1.34,0,1,1,15.33,14,1.34,1.34,0,0,1,16.67,15.33Z"
    />
    <polygon fill="none" points="18 11.33 12.67 11.33 12.67 8 16 8 18 11.33" />
    <path d="M18,11.33v4H16.67a1.34,1.34,0,0,0-2.67,0H12.67v-4Z" />
    <path d="M12.67,7.33v8H10a1.34,1.34,0,0,0-2.67,0H6V8a.67.67,0,0,1,.67-.67Z" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10,15.33A1.34,1.34,0,1,1,8.67,14,1.34,1.34,0,0,1,10,15.33Z"
    />
    <path
      fill="none"
      d="M16.67,15.33A1.34,1.34,0,1,1,15.33,14,1.34,1.34,0,0,1,16.67,15.33Z"
    />
    <polygon fill="none" points="18 11.33 12.67 11.33 12.67 8 16 8 18 11.33" />
    <path
      fillOpacity=".2"
      d="M18,11.33v4H16.67a1.34,1.34,0,0,0-2.67,0H12.67v-4Z"
    />
    <path
      fillOpacity=".2"
      d="M12.67,7.33v8H10a1.34,1.34,0,0,0-2.67,0H6V8a.67.67,0,0,1,.67-.67Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M10,15.33A1.34,1.34,0,1,1,8.67,14,1.34,1.34,0,0,1,10,15.33Z"
    />
    <path
      fill="none"
      d="M16.67,15.33A1.34,1.34,0,1,1,15.33,14,1.34,1.34,0,0,1,16.67,15.33Z"
    />
    <polygon fill="none" points="18 11.33 12.67 11.33 12.67 8 16 8 18 11.33" />
    <path
      fill={secondaryColor}
      d="M18,11.33v4H16.67a1.34,1.34,0,0,0-2.67,0H12.67v-4Z"
    />
    <path
      fill={secondaryColor}
      d="M12.67,7.33v8H10a1.34,1.34,0,0,0-2.67,0H6V8a.67.67,0,0,1,.67-.67Z"
    />
  </Fragment>
);

const Truck2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Truck2;
