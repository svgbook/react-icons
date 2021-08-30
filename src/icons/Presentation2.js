import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6.67,6.67v6.66A1.33,1.33,0,0,0,8,14.67h8a1.33,1.33,0,0,0,1.33-1.34V6.67Z"
    />
    <path d="M6,6.67H18" />
    <path d="M10,12V9.33" />
    <path d="M14,12V10.67" />
    <path d="M12,12v-.67" />
    <path d="M12,14.67v2.66" />
    <path d="M10,17.33h4" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M18,6.17H6a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h.17v6.16A1.84,1.84,0,0,0,8,15.17h3.5v1.66H10a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5.5.5,0,0,0-.5-.5H12.5V15.17H16a1.84,1.84,0,0,0,1.83-1.84V7.17H18a.5.5,0,0,0,.5-.5A.5.5,0,0,0,18,6.17ZM10.5,12a.5.5,0,0,1-1,0V9.33a.5.5,0,1,1,1,0Zm2,0a.5.5,0,0,1-1,0v-.67a.5.5,0,1,1,1,0Zm2,0a.5.5,0,0,1-1,0V10.67a.5.5,0,0,1,1,0Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M6.67,6.67v6.66A1.33,1.33,0,0,0,8,14.67h8a1.33,1.33,0,0,0,1.33-1.34V6.67Z"
    />
    <path d="M6,6.67H18" />
    <path d="M10,12V9.33" />
    <path d="M14,12V10.67" />
    <path d="M12,12v-.67" />
    <path d="M12,14.67v2.66" />
    <path d="M10,17.33h4" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M6.67,6.67v6.66A1.33,1.33,0,0,0,8,14.67h8a1.33,1.33,0,0,0,1.33-1.34V6.67Z"
    />
    <path d="M6,6.67H18" />
    <path d="M10,12V9.33" />
    <path d="M14,12V10.67" />
    <path d="M12,12v-.67" />
    <path d="M12,14.67v2.66" />
    <path d="M10,17.33h4" />
  </Fragment>
);

const Presentation2 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Presentation2;
