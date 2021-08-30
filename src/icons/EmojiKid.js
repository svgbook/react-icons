import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M15,7.8a5.41,5.41,0,0,1,2.31,3.53,1.5,1.5,0,0,1,.45,2.08,1.54,1.54,0,0,1-.62.54A5.4,5.4,0,0,1,6.86,14a1.51,1.51,0,0,1-.72-2,1.56,1.56,0,0,1,.55-.62A5.39,5.39,0,0,1,8.93,7.85"
    />
    <path fill="none" d="M10.5,14.7a2.1,2.1,0,0,0,3,0l0,0" />
    <path fill="none" d="M9.9,6.3a4.17,4.17,0,0,1,1.5,3" />
    <path fill="none" d="M12.3,6.3a4.85,4.85,0,0,1,1.2,3" />
    <line x1="10.2" y1="12.3" x2="10.2" y2="12.3" />
    <line x1="13.8" y1="12.3" x2="13.8" y2="12.3" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M15,7.8a5.41,5.41,0,0,1,2.31,3.53,1.5,1.5,0,0,1,.45,2.08,1.54,1.54,0,0,1-.62.54A5.4,5.4,0,0,1,6.86,14a1.51,1.51,0,0,1-.72-2,1.56,1.56,0,0,1,.55-.62A5.39,5.39,0,0,1,8.93,7.85"
    />
    <path fill="none" d="M10.5,14.7a2.1,2.1,0,0,0,3,0l0,0" />
    <path fill="none" d="M9.9,6.3a4.17,4.17,0,0,1,1.5,3" />
    <path fill="none" d="M12.3,6.3a4.85,4.85,0,0,1,1.2,3" />
    <line x1="10.2" y1="12.3" x2="10.2" y2="12.3" />
    <line x1="13.8" y1="12.3" x2="13.8" y2="12.3" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      strokeOpacity=".2"
      d="M15,7.8a5.41,5.41,0,0,1,2.31,3.53,1.5,1.5,0,0,1,.45,2.08,1.54,1.54,0,0,1-.62.54A5.4,5.4,0,0,1,6.86,14a1.51,1.51,0,0,1-.72-2,1.56,1.56,0,0,1,.55-.62A5.39,5.39,0,0,1,8.93,7.85"
    />
    <path fill="none" d="M10.5,14.7a2.1,2.1,0,0,0,3,0l0,0" />
    <path fill="none" d="M9.9,6.3a4.17,4.17,0,0,1,1.5,3" />
    <path fill="none" d="M12.3,6.3a4.85,4.85,0,0,1,1.2,3" />
    <line x1="10.2" y1="12.3" x2="10.2" y2="12.3" />
    <line x1="13.8" y1="12.3" x2="13.8" y2="12.3" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M15,7.8a5.41,5.41,0,0,1,2.31,3.53,1.5,1.5,0,0,1,.45,2.08,1.54,1.54,0,0,1-.62.54A5.4,5.4,0,0,1,6.86,14a1.51,1.51,0,0,1-.72-2,1.56,1.56,0,0,1,.55-.62A5.39,5.39,0,0,1,8.93,7.85"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M10.5,14.7a2.1,2.1,0,0,0,3,0l0,0"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M9.9,6.3a4.17,4.17,0,0,1,1.5,3"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M12.3,6.3a4.85,4.85,0,0,1,1.2,3"
    />
    <line stroke={secondaryColor} x1="10.2" y1="12.3" x2="10.2" y2="12.3" />
    <line stroke={secondaryColor} x1="13.8" y1="12.3" x2="13.8" y2="12.3" />
  </Fragment>
);

const EmojiKid = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default EmojiKid;
