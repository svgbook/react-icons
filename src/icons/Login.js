import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.76,9.18V7.77a1.42,1.42,0,0,0-1.41-1.42H7.41A1.42,1.42,0,0,0,6,7.77v8.47a1.41,1.41,0,0,0,1.41,1.41h4.94a1.41,1.41,0,0,0,1.41-1.41V14.82"
    />
    <path fill="none" d="M18,12H8.82l2.12-2.12m0,4.24L8.82,12" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M13.76,9.18V7.77a1.42,1.42,0,0,0-1.41-1.42H7.41A1.42,1.42,0,0,0,6,7.77v8.47a1.41,1.41,0,0,0,1.41,1.41h4.94a1.41,1.41,0,0,0,1.41-1.41V14.82"
    />
    <path fill="none" d="M18,12H8.82l2.12-2.12m0,4.24L8.82,12" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M13.76,9.18V7.77a1.42,1.42,0,0,0-1.41-1.42H7.41A1.42,1.42,0,0,0,6,7.77v8.47a1.41,1.41,0,0,0,1.41,1.41h4.94a1.41,1.41,0,0,0,1.41-1.41V14.82"
    />
    <path
      fill="none"
      strokeOpacity=".2"
      d="M18,12H8.82l2.12-2.12m0,4.24L8.82,12"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M13.76,9.18V7.77a1.42,1.42,0,0,0-1.41-1.42H7.41A1.42,1.42,0,0,0,6,7.77v8.47a1.41,1.41,0,0,0,1.41,1.41h4.94a1.41,1.41,0,0,0,1.41-1.41V14.82"
    />
    <path
      fill="none"
      stroke={secondaryColor}
      d="M18,12H8.82l2.12-2.12m0,4.24L8.82,12"
    />
  </Fragment>
);

const Login = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Login;
