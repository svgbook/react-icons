import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10.8,8.4h6A1.2,1.2,0,0,1,18,9.6v4.8a1.24,1.24,0,0,1-.35.85Z"
    />
    <line x1="8.4" y1="10.8" x2="8.4" y2="10.81" />
    <line x1="15.6" y1="10.8" x2="15.6" y2="10.81" />
    <line x1="8.4" y1="13.2" x2="8.4" y2="13.21" />
    <line x1="10.8" y1="13.2" x2="13.2" y2="13.2" />
    <line x1="6.6" y1="6.6" x2="17.4" y2="17.4" />
    <path
      fill="none"
      d="M15.6,15.6H7.2A1.2,1.2,0,0,1,6,14.4V9.6A1.2,1.2,0,0,1,7.2,8.4H8.4Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M16.47,8.23H10.88a.42.42,0,0,0-.29.72l2.22,2.23L17,15.32a.4.4,0,0,0,.29.12.44.44,0,0,0,.3-.12A1.54,1.54,0,0,0,18,14.23V9.77A1.54,1.54,0,0,0,16.47,8.23Zm-.7,2.66a.42.42,0,1,1-.42-.42.42.42,0,0,1,.42.42Z"
    />
    <path
      stroke="none"
      d="M17.32,16.73,13.4,12.81l-2.22-2.22L9,8.36,7.27,6.68a.42.42,0,0,0-.59.59l1,1H7.53A1.54,1.54,0,0,0,6,9.77v4.46a1.54,1.54,0,0,0,1.53,1.54h7.65l1.55,1.55a.42.42,0,0,0,.29.12.42.42,0,0,0,.3-.71ZM9.07,13.12a.42.42,0,1,1-.42-.42.42.42,0,0,1,.42.42Zm0-2.23a.42.42,0,1,1-.42-.42.42.42,0,0,1,.42.42Zm1.81,2.64a.41.41,0,0,1-.41-.41.41.41,0,0,1,.41-.42H12.1l.84.83Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10.8,8.4h6A1.2,1.2,0,0,1,18,9.6v4.8a1.24,1.24,0,0,1-.35.85Z"
    />
    <line strokeOpacity=".2" x1="8.4" y1="10.8" x2="8.4" y2="10.81" />
    <line strokeOpacity=".2" x1="15.6" y1="10.8" x2="15.6" y2="10.81" />
    <line strokeOpacity=".2" x1="8.4" y1="13.2" x2="8.4" y2="13.21" />
    <line strokeOpacity=".2" x1="10.8" y1="13.2" x2="13.2" y2="13.2" />
    <line x1="6.6" y1="6.6" x2="17.4" y2="17.4" />
    <path
      fill="none"
      d="M15.6,15.6H7.2A1.2,1.2,0,0,1,6,14.4V9.6A1.2,1.2,0,0,1,7.2,8.4H8.4Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M10.8,8.4h6A1.2,1.2,0,0,1,18,9.6v4.8a1.24,1.24,0,0,1-.35.85Z"
    />
    <line stroke={secondaryColor} x1="8.4" y1="10.8" x2="8.4" y2="10.81" />
    <line stroke={secondaryColor} x1="15.6" y1="10.8" x2="15.6" y2="10.81" />
    <line stroke={secondaryColor} x1="8.4" y1="13.2" x2="8.4" y2="13.21" />
    <line stroke={secondaryColor} x1="10.8" y1="13.2" x2="13.2" y2="13.2" />
    <line x1="6.6" y1="6.6" x2="17.4" y2="17.4" />
    <path
      fill="none"
      d="M15.6,15.6H7.2A1.2,1.2,0,0,1,6,14.4V9.6A1.2,1.2,0,0,1,7.2,8.4H8.4Z"
    />
  </Fragment>
);

const KeyboardOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default KeyboardOff;
