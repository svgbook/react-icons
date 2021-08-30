import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15.37,9H8.62l.22-1.68A1.49,1.49,0,0,1,10.33,6h3.35a1.49,1.49,0,0,1,1.48,1.32Z"
    />
    <path
      fill="none"
      d="M16.6,16.5A1.5,1.5,0,0,1,15.1,18H8.89l-.24,0a1.5,1.5,0,0,1-1.23-1.73L8.62,9h6.75l1.21,7.25A1.1,1.1,0,0,1,16.6,16.5Z"
    />
    <path d="M12,12.75h0" />
    <path d="M10.5,15h0" />
    <path d="M13.5,15h0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M17.08,16.17,15.87,8.94v0l-.21-1.66a2,2,0,0,0-2-1.75H10.33a2,2,0,0,0-2,1.75L8.13,8.91h0V9l-1.2,7.16a2,2,0,0,0,1.65,2.3l.32,0H15.1a2,2,0,0,0,2-2C17.1,16.39,17.09,16.29,17.08,16.17ZM11,15a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5Zm1.5-2.25a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5ZM14,15a.5.5,0,1,1-.5-.51.5.5,0,0,1,.5.5ZM9.19,8.5l.14-1.12a1,1,0,0,1,1-.88h3.35a1,1,0,0,1,1,.88l.14,1.12Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M15.37,9H8.62l.22-1.68A1.49,1.49,0,0,1,10.33,6h3.35a1.49,1.49,0,0,1,1.48,1.32Z"
    />
    <path
      fillOpacity=".2"
      d="M16.6,16.5A1.5,1.5,0,0,1,15.1,18H8.89l-.24,0a1.5,1.5,0,0,1-1.23-1.73L8.62,9h6.75l1.21,7.25A1.1,1.1,0,0,1,16.6,16.5Z"
    />
    <path d="M12,12.75h0" />
    <path d="M10.5,15h0" />
    <path d="M13.5,15h0" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M15.37,9H8.62l.22-1.68A1.49,1.49,0,0,1,10.33,6h3.35a1.49,1.49,0,0,1,1.48,1.32Z"
    />
    <path
      fill={secondaryColor}
      d="M16.6,16.5A1.5,1.5,0,0,1,15.1,18H8.89l-.24,0a1.5,1.5,0,0,1-1.23-1.73L8.62,9h6.75l1.21,7.25A1.1,1.1,0,0,1,16.6,16.5Z"
    />
    <path d="M12,12.75h0" />
    <path d="M10.5,15h0" />
    <path d="M13.5,15h0" />
  </Fragment>
);

const Salt = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Salt;
