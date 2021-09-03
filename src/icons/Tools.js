import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <polygon
      fill="none"
      points="16.33 10.33 14.67 12 8.67 18 6 18 6 15.33 9.33 12 12 9.33 13.67 7.67 16.33 10.33"
    />
    <path
      fill="none"
      d="M17.33,9.33l-1,1L13.67,7.67l1-1a1.88,1.88,0,1,1,2.66,2.66Z"
    />
    <polygon
      fill="none"
      points="12 9.33 9.33 12 7.67 10.33 6 8.67 8.67 6 12 9.33"
    />
    <line x1="8.67" y1="9.33" x2="7.67" y2="10.33" />
    <polygon
      fill="none"
      points="18 15.33 15.33 18 13.67 16.33 12 14.66 14.67 12 18 15.33"
    />
    <line x1="14.67" y1="15.33" x2="13.67" y2="16.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M17.69,9.69l-.65.64L13.67,7l.64-.65a2.39,2.39,0,0,1,3.38,3.38Z"
    />
    <path
      stroke="none"
      d="M18.35,15l-3-3,1-1-.7-.7-2-2L13,7.67l-1,1-3-3a.5.5,0,0,0-.71,0L5.65,8.31a.5.5,0,0,0,0,.71L7.3,10.67v0h0L8.63,12l-3,3a.47.47,0,0,0-.15.35V18a.5.5,0,0,0,.5.5H8.67A.47.47,0,0,0,9,18.35l3-3,1.3,1.3v0h0L15,18.35a.5.5,0,0,0,.35.15.51.51,0,0,0,.36-.15l2.66-2.66A.5.5,0,0,0,18.35,15Zm-9-3.69-.95-.95L9,9.69A.5.5,0,0,0,8.31,9l-.64.65-1-1,2-2,2.62,2.62Zm6,6-.95-.95.64-.65a.5.5,0,0,0-.71-.71l-.64.65-1-1,2-2,2.62,2.62Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <polygon
      fillOpacity=".2"
      points="16.33 10.33 14.67 12 8.67 18 6 18 6 15.33 9.33 12 12 9.33 13.67 7.67 16.33 10.33"
    />
    <path
      fillOpacity=".2"
      d="M17.33,9.33l-1,1L13.67,7.67l1-1a1.88,1.88,0,1,1,2.66,2.66Z"
    />
    <polygon
      fillOpacity=".2"
      points="12 9.33 9.33 12 7.67 10.33 6 8.67 8.67 6 12 9.33"
    />
    <line x1="8.67" y1="9.33" x2="7.67" y2="10.33" />
    <polygon
      fillOpacity=".2"
      points="18 15.33 15.33 18 13.67 16.33 12 14.66 14.67 12 18 15.33"
    />
    <line x1="14.67" y1="15.33" x2="13.67" y2="16.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <polygon
      fill={secondaryColor}
      points="16.33 10.33 14.67 12 8.67 18 6 18 6 15.33 9.33 12 12 9.33 13.67 7.67 16.33 10.33"
    />
    <path
      fill={secondaryColor}
      d="M17.33,9.33l-1,1L13.67,7.67l1-1a1.88,1.88,0,1,1,2.66,2.66Z"
    />
    <polygon
      fill={secondaryColor}
      points="12 9.33 9.33 12 7.67 10.33 6 8.67 8.67 6 12 9.33"
    />
    <line x1="8.67" y1="9.33" x2="7.67" y2="10.33" />
    <polygon
      fill={secondaryColor}
      points="18 15.33 15.33 18 13.67 16.33 12 14.66 14.67 12 18 15.33"
    />
    <line x1="14.67" y1="15.33" x2="13.67" y2="16.33" />
  </Fragment>
);

const Tools = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Tools;
