import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M12,18a12.28,12.28,0,0,1-5.51-1.29L12,6l5.51,10.71A12.39,12.39,0,0,1,12,18Z"
    />
    <path
      fill="none"
      d="M7.71,14.35a9.79,9.79,0,0,0,4.42,1.06,9.72,9.72,0,0,0,4.21-1"
    />
    <path fill="none" d="M12.65,11.2h0" />
    <path fill="none" d="M11.35,13.14h0" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      stroke="none"
      d="M12.44,5.77a.51.51,0,0,0-.88,0l-4.17,8.1c.3.15.6.29.91.41a10.37,10.37,0,0,0,3.84.71h0a11,11,0,0,0,3.58-.62q.48-.18.93-.39Zm-1.09,7.86a.5.5,0,0,1-.5-.49h0a.5.5,0,0,1,.5-.5.5.5,0,0,1,0,1Zm1.3-1.94a.49.49,0,0,1-.5-.49h0a.5.5,0,0,1,.5-.5.5.5,0,0,1,0,1Z"
    />
    <path
      stroke="none"
      d="M18,16.87a.48.48,0,0,1-.25.29A12.92,12.92,0,0,1,12,18.5h0a12.91,12.91,0,0,1-5.74-1.34A.48.48,0,0,1,6,16.87a.53.53,0,0,1,0-.39l.89-1.72c.3.15.61.29.92.41a11.63,11.63,0,0,0,4.28.82h0a11.64,11.64,0,0,0,4-.73,7.61,7.61,0,0,0,.93-.39L18,16.48A.53.53,0,0,1,18,16.87Z"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M12,18a12.28,12.28,0,0,1-5.51-1.29L12,6l5.51,10.71A12.39,12.39,0,0,1,12,18Z"
    />
    <path
      fill="none"
      d="M7.71,14.35a9.79,9.79,0,0,0,4.42,1.06,9.72,9.72,0,0,0,4.21-1"
    />
    <path fill="none" d="M12.65,11.2h0" />
    <path fill="none" d="M11.35,13.14h0" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M12,18a12.28,12.28,0,0,1-5.51-1.29L12,6l5.51,10.71A12.39,12.39,0,0,1,12,18Z"
    />
    <path
      fill="none"
      d="M7.71,14.35a9.79,9.79,0,0,0,4.42,1.06,9.72,9.72,0,0,0,4.21-1"
    />
    <path fill="none" d="M12.65,11.2h0" />
    <path fill="none" d="M11.35,13.14h0" />
  </Fragment>
);

const Pizza = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Pizza;
