import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M6.72,7.33h7.22a.73.73,0,0,1,.73.72h0v5.74a2.89,2.89,0,0,1-2.89,2.88H8.89A2.88,2.88,0,0,1,6,13.79V8.05a.72.72,0,0,1,.72-.72h0"
    />
    <path
      fill="none"
      d="M14.67,9.33h1.66A1.62,1.62,0,0,1,18,10.89v1.55A1.62,1.62,0,0,1,16.33,14H14.67"
    />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M6.72,7.33h7.22a.73.73,0,0,1,.73.72h0v5.74a2.89,2.89,0,0,1-2.89,2.88H8.89A2.88,2.88,0,0,1,6,13.79V8.05a.72.72,0,0,1,.72-.72h0" />
    <path
      fill="none"
      d="M14.67,9.33h1.66A1.62,1.62,0,0,1,18,10.89v1.55A1.62,1.62,0,0,1,16.33,14H14.67"
    />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M6.72,7.33h7.22a.73.73,0,0,1,.73.72h0v5.74a2.89,2.89,0,0,1-2.89,2.88H8.89A2.88,2.88,0,0,1,6,13.79V8.05a.72.72,0,0,1,.72-.72h0"
    />
    <path
      fill="none"
      d="M14.67,9.33h1.66A1.62,1.62,0,0,1,18,10.89v1.55A1.62,1.62,0,0,1,16.33,14H14.67"
    />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M6.72,7.33h7.22a.73.73,0,0,1,.73.72h0v5.74a2.89,2.89,0,0,1-2.89,2.88H8.89A2.88,2.88,0,0,1,6,13.79V8.05a.72.72,0,0,1,.72-.72h0"
    />
    <path
      fill="none"
      d="M14.67,9.33h1.66A1.62,1.62,0,0,1,18,10.89v1.55A1.62,1.62,0,0,1,16.33,14H14.67"
    />
  </Fragment>
);

const Mug = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Mug;
