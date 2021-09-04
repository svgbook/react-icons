import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M8.12,14.12H6.71A.71.71,0,0,1,6,13.41V10.59a.71.71,0,0,1,.71-.71H8.12l2.47-3.17a.56.56,0,0,1,.76-.25.58.58,0,0,1,.3.6v9.88a.56.56,0,0,1-1.06.35L8.12,14.12"
    />
    <path fill="none" d="M15.18,10.59,18,13.41m0-2.82-2.82,2.82" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M8.12,14.12H6.71A.71.71,0,0,1,6,13.41V10.59a.71.71,0,0,1,.71-.71H8.12l2.47-3.17a.56.56,0,0,1,.76-.25.58.58,0,0,1,.3.6v9.88a.56.56,0,0,1-1.06.35L8.12,14.12" />
    <path fill="none" d="M15.18,10.59,18,13.41m0-2.82-2.82,2.82" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M8.12,14.12H6.71A.71.71,0,0,1,6,13.41V10.59a.71.71,0,0,1,.71-.71H8.12l2.47-3.17a.56.56,0,0,1,.76-.25.58.58,0,0,1,.3.6v9.88a.56.56,0,0,1-1.06.35L8.12,14.12"
    />
    <path fill="none" d="M15.18,10.59,18,13.41m0-2.82-2.82,2.82" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M8.12,14.12H6.71A.71.71,0,0,1,6,13.41V10.59a.71.71,0,0,1,.71-.71H8.12l2.47-3.17a.56.56,0,0,1,.76-.25.58.58,0,0,1,.3.6v9.88a.56.56,0,0,1-1.06.35L8.12,14.12"
    />
    <path fill="none" d="M15.18,10.59,18,13.41m0-2.82-2.82,2.82" />
  </Fragment>
);

const Volume3 = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Volume3;
