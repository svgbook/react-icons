import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12,18A6,6,0,0,1,12,6c3.31,0,6,2.39,6,5.33A2.85,2.85,0,0,1,15,14H13.33a1.33,1.33,0,0,0-.66,2.5.87.87,0,0,1,.05,1.22A.89.89,0,0,1,12,18"
    />
    <circle cx="9" cy="11" r="0.33" />
    <circle cx="12" cy="9" r="0.33" />
    <circle cx="15" cy="11" r="0.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12,5.5a6.5,6.5,0,0,0,0,13h.1a1.36,1.36,0,0,0,1-.44,1.33,1.33,0,0,0,.36-1,1.36,1.36,0,0,0-.43-.95l-.1-.07a.82.82,0,0,1-.43-.74.86.86,0,0,1,.85-.82H15a3.35,3.35,0,0,0,3.5-3.17C18.5,8.12,15.58,5.5,12,5.5ZM9,11.83A.83.83,0,1,1,9.83,11,.83.83,0,0,1,9,11.83Zm3-2A.83.83,0,1,1,12.83,9,.83.83,0,0,1,12,9.83Zm3,2a.83.83,0,1,1,.83-.83A.83.83,0,0,1,15,11.83Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12,18A6,6,0,0,1,12,6c3.31,0,6,2.39,6,5.33A2.85,2.85,0,0,1,15,14H13.33a1.33,1.33,0,0,0-.66,2.5.87.87,0,0,1,.05,1.22A.89.89,0,0,1,12,18"
    />
    <circle cx="9" cy="11" r="0.33" />
    <circle cx="12" cy="9" r="0.33" />
    <circle cx="15" cy="11" r="0.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,18A6,6,0,0,1,12,6c3.31,0,6,2.39,6,5.33A2.85,2.85,0,0,1,15,14H13.33a1.33,1.33,0,0,0-.66,2.5.87.87,0,0,1,.05,1.22A.89.89,0,0,1,12,18"
    />
    <circle cx="9" cy="11" r="0.33" />
    <circle cx="12" cy="9" r="0.33" />
    <circle cx="15" cy="11" r="0.33" />
  </Fragment>
);

const Palette = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Palette;
