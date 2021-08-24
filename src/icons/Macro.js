import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path fill="none" d="M16,14a4,4,0,0,1-4,4A4,4,0,0,1,16,14Z" />
    <path fill="none" d="M12,18a4,4,0,0,1-4-4A4,4,0,0,1,12,18Z" />
    <path
      fill="none"
      d="M12,11.33A3.33,3.33,0,0,1,8.67,8V6l2,1.33L12,6l1.33,1.33,2-1.33V8A3.33,3.33,0,0,1,12,11.33Z"
    />
    <path fill="none" d="M12,18V11.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M16,14a4,4,0,0,1-4,4A4,4,0,0,1,16,14Z" />
    <path d="M12,18a4,4,0,0,1-4-4A4,4,0,0,1,12,18Z" />
    <path d="M12,11.33A3.33,3.33,0,0,1,8.67,8V6l2,1.33L12,6l1.33,1.33,2-1.33V8A3.33,3.33,0,0,1,12,11.33Z" />
    <path fill="none" d="M12,18V11.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path fillOpacity=".2" d="M16,14a4,4,0,0,1-4,4A4,4,0,0,1,16,14Z" />
    <path fillOpacity=".2" d="M12,18a4,4,0,0,1-4-4A4,4,0,0,1,12,18Z" />
    <path
      fillOpacity=".2"
      d="M12,11.33A3.33,3.33,0,0,1,8.67,8V6l2,1.33L12,6l1.33,1.33,2-1.33V8A3.33,3.33,0,0,1,12,11.33Z"
    />
    <path fill="none" d="M12,18V11.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path fill={secondaryColor} d="M16,14a4,4,0,0,1-4,4A4,4,0,0,1,16,14Z" />
    <path fill={secondaryColor} d="M12,18a4,4,0,0,1-4-4A4,4,0,0,1,12,18Z" />
    <path
      fill={secondaryColor}
      d="M12,11.33A3.33,3.33,0,0,1,8.67,8V6l2,1.33L12,6l1.33,1.33,2-1.33V8A3.33,3.33,0,0,1,12,11.33Z"
    />
    <path fill="none" d="M12,18V11.33" />
  </Fragment>
);

const Macro = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Macro;
