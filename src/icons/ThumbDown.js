import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M18,11.3a1.41,1.41,0,0,1-1.41,1.41H14.47v3.53a1.41,1.41,0,1,1-2.82,0v-.71a2.83,2.83,0,0,0-2.83-2.82V8.47a2.12,2.12,0,0,1,2.12-2.12h4.94c.63,0,1.21.53,1.41,1.42Z"
    />
    <path
      fill="none"
      d="M8.82,7.06v5.65H6.71A.71.71,0,0,1,6,12V7.06a.71.71,0,0,1,.71-.71H8.12A.7.7,0,0,1,8.82,7.06Z"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M18,11.3a1.41,1.41,0,0,1-1.41,1.41H14.47v3.53a1.41,1.41,0,1,1-2.82,0v-.71a2.83,2.83,0,0,0-2.83-2.82V8.47a2.12,2.12,0,0,1,2.12-2.12h4.94c.63,0,1.21.53,1.41,1.42Z" />
    <path
      fill="none"
      d="M8.82,7.06v5.65H6.71A.71.71,0,0,1,6,12V7.06a.71.71,0,0,1,.71-.71H8.12A.7.7,0,0,1,8.82,7.06Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M18,11.3a1.41,1.41,0,0,1-1.41,1.41H14.47v3.53a1.41,1.41,0,1,1-2.82,0v-.71a2.83,2.83,0,0,0-2.83-2.82V8.47a2.12,2.12,0,0,1,2.12-2.12h4.94c.63,0,1.21.53,1.41,1.42Z"
    />
    <path
      fillOpacity=".2"
      d="M8.82,7.06v5.65H6.71A.71.71,0,0,1,6,12V7.06a.71.71,0,0,1,.71-.71H8.12A.7.7,0,0,1,8.82,7.06Z"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M18,11.3a1.41,1.41,0,0,1-1.41,1.41H14.47v3.53a1.41,1.41,0,1,1-2.82,0v-.71a2.83,2.83,0,0,0-2.83-2.82V8.47a2.12,2.12,0,0,1,2.12-2.12h4.94c.63,0,1.21.53,1.41,1.42Z"
    />
    <path
      fill={secondaryColor}
      d="M8.82,7.06v5.65H6.71A.71.71,0,0,1,6,12V7.06a.71.71,0,0,1,.71-.71H8.12A.7.7,0,0,1,8.82,7.06Z"
    />
  </Fragment>
);

const ThumbDown = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default ThumbDown;
