import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10.55,14.66a2,2,0,0,1-1.88-2.11,2.11,2.11,0,0,1,.05-.35A2,2,0,0,1,8.92,9,2,2,0,0,1,12,6.51,2,2,0,0,1,15.08,9a2,2,0,0,1,.2,3.22,2,2,0,0,1-1.48,2.41,1.84,1.84,0,0,1-.47.06H10.55Z"
    />
    <path fill="none" d="M12,12.67l-1.33-1.34" />
    <path fill="none" d="M12,12l1.33-1.33" />
    <path fill="none" d="M12,18V9.33" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path d="M10.55,14.66a2,2,0,0,1-1.88-2.11,2.11,2.11,0,0,1,.05-.35A2,2,0,0,1,8.92,9,2,2,0,0,1,12,6.51,2,2,0,0,1,15.08,9a2,2,0,0,1,.2,3.22,2,2,0,0,1-1.48,2.41,1.84,1.84,0,0,1-.47.06H10.55Z" />
    <path fill="none" d="M12,12.67l-1.33-1.34" />
    <path fill="none" d="M12,12l1.33-1.33" />
    <path fill="none" d="M12,18V9.33" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fillOpacity=".2"
      d="M10.55,14.66a2,2,0,0,1-1.88-2.11,2.11,2.11,0,0,1,.05-.35A2,2,0,0,1,8.92,9,2,2,0,0,1,12,6.51,2,2,0,0,1,15.08,9a2,2,0,0,1,.2,3.22,2,2,0,0,1-1.48,2.41,1.84,1.84,0,0,1-.47.06H10.55Z"
    />
    <path fill="none" d="M12,12.67l-1.33-1.34" />
    <path fill="none" d="M12,12l1.33-1.33" />
    <path fill="none" d="M12,18V9.33" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill={secondaryColor}
      d="M10.55,14.66a2,2,0,0,1-1.88-2.11,2.11,2.11,0,0,1,.05-.35A2,2,0,0,1,8.92,9,2,2,0,0,1,12,6.51,2,2,0,0,1,15.08,9a2,2,0,0,1,.2,3.22,2,2,0,0,1-1.48,2.41,1.84,1.84,0,0,1-.47.06H10.55Z"
    />
    <path fill="none" d="M12,12.67l-1.33-1.34" />
    <path fill="none" d="M12,12l1.33-1.33" />
    <path fill="none" d="M12,18V9.33" />
  </Fragment>
);

const Tree = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default Tree;
