import React, { forwardRef, Fragment } from "react";
import IconBase from "../primitives/IconBase";

const renderPath = {};

renderPath["outline"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10.66,17.34H16A1.28,1.28,0,0,0,17,17M6.66,10.66V8a1.32,1.32,0,0,1,.39-.94m10.29,7.62V8A1.34,1.34,0,0,0,16,6.66H9.33"
    />
    <path fill="none" d="M10.66,10.66v6.68H8A1.32,1.32,0,0,1,6.66,16V10.66Z" />
    <path fill="none" d="M17.34,10.66h-4" />
    <path fill="none" d="M10.66,8V6.66" />
    <line x1="5.99" y1="5.99" x2="18.01" y2="18.01" />
  </Fragment>
);

renderPath["fill"] = () => (
  <Fragment>
    <path
      fill="none"
      d="M10.66,17.34H16A1.28,1.28,0,0,0,17,17M6.66,10.66V8a1.32,1.32,0,0,1,.39-.94m10.29,7.62V8A1.34,1.34,0,0,0,16,6.66H9.33"
    />
    <path d="M10.66,10.66v6.68H8A1.32,1.32,0,0,1,6.66,16V10.66Z" />
    <path fill="none" d="M17.34,10.66h-4" />
    <path fill="none" d="M10.66,8V6.66" />
    <line x1="5.99" y1="5.99" x2="18.01" y2="18.01" />
  </Fragment>
);

renderPath["duotone"] = (color) => (
  <Fragment>
    <path
      fill="none"
      d="M10.66,17.34H16A1.28,1.28,0,0,0,17,17M6.66,10.66V8a1.32,1.32,0,0,1,.39-.94m10.29,7.62V8A1.34,1.34,0,0,0,16,6.66H9.33"
    />
    <path
      fillOpacity=".2"
      d="M10.66,10.66v6.68H8A1.32,1.32,0,0,1,6.66,16V10.66Z"
    />
    <path fill="none" d="M17.34,10.66h-4" />
    <path fill="none" d="M10.66,8V6.66" />
    <line x1="5.99" y1="5.99" x2="18.01" y2="18.01" />
  </Fragment>
);

renderPath["color"] = (color, secondaryColor) => (
  <Fragment>
    <path
      fill="none"
      d="M10.66,17.34H16A1.28,1.28,0,0,0,17,17M6.66,10.66V8a1.32,1.32,0,0,1,.39-.94m10.29,7.62V8A1.34,1.34,0,0,0,16,6.66H9.33"
    />
    <path
      fill={secondaryColor}
      d="M10.66,10.66v6.68H8A1.32,1.32,0,0,1,6.66,16V10.66Z"
    />
    <path fill="none" d="M17.34,10.66h-4" />
    <path fill="none" d="M10.66,8V6.66" />
    <line x1="5.99" y1="5.99" x2="18.01" y2="18.01" />
  </Fragment>
);

const TableOff = forwardRef((props, ref) => {
  return <IconBase ref={ref} {...props} renderPath={renderPath} />;
});

export default TableOff;
